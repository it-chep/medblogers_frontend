"use client"

import { FC, FormEvent, useEffect, useState } from "react";
import classes from './form.module.scss'
import { cityService, ICityData } from "@/src/entities/city";
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { useRouter } from "next/navigation";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { MyInputForm } from "@/src/shared/ui/inputForm";
import { SearchItemListDropdown, SearchListDropdown } from "@/src/features/searchListDropdown";
import { IFormError, IFreelancerForm } from "../../model/types";
import { changeFormError } from "@/src/widgets/newClubParticipantWidget/lib/helpers/changeFormError";
import { initialStateForm } from "../../model/initialState";
import { freelancerChange } from "../../lib/helpers/freelancerChange";
import { freelancerFormService } from "../../api/FreelancerFormService";
import { freelancerService, IFreelancerSpeciality } from "@/src/entities/freelancer";
import { IItem } from "@/src/shared/model/types";
import { PriceListChange } from "@/src/features/priceListChange";

export const FreelancerForm: FC = () => {

    const [form, setForm] = useState<IFreelancerForm>(initialStateForm)
    const [formError, setFormError] = useState<IFormError[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cities, setCities] = useState<ICityData[]>([])
    const [socialNetworkList, setSocialNetworkList] = useState<IItem[]>([])
    const [specialities, setSpecialities] = useState<IFreelancerSpeciality[]>([])

    const router = useRouter()

    const {
        setEmail, setLastName, setFirstName, setMiddleName, setWorkingExperience,
        setTelegramUsername, setAgreePolicy, setAdditionalCities, deleteAdditionalCities, 
        setAdditionalSpecialities, deleteAdditionalSpecialities, setCity, setSpeciality,
        setPortfolioLink, setSocialNetworks, setExperienceWithDoctors, setHasCommand, setPriceList
    } = freelancerChange(form, setForm)

    const {setErrorFieldDelete} = changeFormError(formError, setFormError)

    const getCities = async () => {
        const cities = await cityService.getCities()
        setCities(cities)
    }

    const getSpecialities = async () => {
        const specialities = await freelancerService.getSpecialities()
        setSpecialities(specialities)
    }

    const getSocialNetworks = async () => {
        const socialNetworks = await freelancerService.getSocialNetworks()
        setSocialNetworkList(socialNetworks)
    }

    useEffect(() => {
        getCities()
        getSpecialities()
        getSocialNetworks()
    }, [])

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try{
            setIsLoading(true)
            const res = await freelancerFormService.setForm(form)
            if(res.errors.length === 0){
                // router.push('/spasibo_club_participant')
            }
            else{
                if(res.errors){
                    setFormError(res.errors)
                    window.scrollTo({top: 0})
                }
            }
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    const setSelectedAgreePolicy = () => {
        setAgreePolicy(!form.agreePolicy)
        setErrorFieldDelete('agreePolicy')()
    }

    return (
        <form onSubmit={onSubmit} className={classes.container}>
            <MyInputForm
                label="Почта *" 
                value={form.email} 
                setValue={setEmail} 
                type="email"
                error={formError?.find(error => error.field === 'email')?.text} 
                setError={setErrorFieldDelete('email')}
                required
                name="email"
            />
            <MyInputForm 
                label="Фамилия *" 
                value={form.lastName} 
                setValue={setLastName} 
                type="text"
                name="lastName"
                error={formError?.find(error => error.field === 'lastName')?.text} 
                setError={setErrorFieldDelete('lastName')}
                required
            />
            <MyInputForm 
                label="Имя *" 
                value={form.firstName} 
                setValue={setFirstName} 
                type="text"
                name="firstName"
                error={formError?.find(error => error.field === 'firstName')?.text} 
                setError={setErrorFieldDelete('firstName')}
                required
            />
            <MyInputForm 
                label="Отчество *" 
                value={form.middleName} 
                setValue={setMiddleName} 
                type="text"
                name="middleName"
                error={formError?.find(error => error.field === 'middleName')?.text} 
                setError={setErrorFieldDelete('middleName')}
                required
            />
            <MyInputForm 
                label="Сколько лет вы в профессии *" 
                value={form.workingExperience === 0 ? '' : String(form.workingExperience)} 
                setValue={(val) => {
                    if(val === '') setWorkingExperience(0)
                    const parseVal = parseInt(val)
                    if(parseVal){
                        setWorkingExperience(parseVal)
                    }
                }} 
                type="text"
                name="workingExperience"
                error={formError?.find(error => error.field === 'workingExperience')?.text} 
                setError={setErrorFieldDelete('workingExperience')}
                required
            />
            <MyInputForm 
                label="Ваш никнейм в Telegram (не канал, а личный никнейм, через @) *" 
                value={form.telegramUsername} 
                setValue={setTelegramUsername} 
                placeholder="Пример: @readydoc" 
                type="text"
                name="telegramUsername"
                error={formError?.find(error => error.field === 'telegramUsername')?.text} 
                setError={setErrorFieldDelete('telegramUsername')}
                required
            />
            <MyInputForm 
                label="Ваше портфолио" 
                value={form.portfolioLink} 
                setValue={setPortfolioLink} 
                type="text"
                name="portfolioLink"
                placeholder="Пример: https://taplink.cc/readydoc"
                error={formError?.find(error => error.field === 'portfolioLink')?.text} 
                setError={setErrorFieldDelete('portfolioLink')}
                required
            />
            <SearchItemListDropdown 
                label="Ваша специализация *"
                items={specialities.map(speciality => ({id: speciality.specialityId, name: speciality.specialityName}))} 
                selectedItemId={form.specialityId} 
                setSelectedId={setSpeciality} 
                placeholder="Нажмите чтобы открыть поиск специализации"
                placeholderSearch="Введите название специализации..."
                error={formError?.find(error => error.field === 'specialityId')?.text} 
                setError={setErrorFieldDelete('specialityId')}
            />
            <SearchListDropdown 
                label="Дополнительные специализации"
                selectedItemsId={form.additionalSpecialties} 
                deleteSelected={deleteAdditionalSpecialities} 
                items={specialities.map(speciality => ({id: speciality.specialityId, name: speciality.specialityName}))} 
                setSelected={setAdditionalSpecialities} 
                placeholder="Введите название специализации..."
            />
            <SearchItemListDropdown 
                label="Город работы *"
                items={cities.map(city => ({id: city.cityId, name: city.cityName}))} 
                selectedItemId={form.cityId} 
                setSelectedId={setCity} 
                placeholder="Нажмите чтобы открыть поиск города"
                placeholderSearch="Введите название города..."
                error={formError?.find(error => error.field === 'cityId')?.text} 
                setError={setErrorFieldDelete('cityId')}
            />
            <SearchListDropdown
                label="Дополнительные города работы"
                selectedItemsId={form.additionalCities} 
                deleteSelected={deleteAdditionalCities} 
                items={cities.map(city => ({id: city.cityId, name: city.cityName}))} 
                setSelected={setAdditionalCities} 
                placeholder="Введите название города..."
            />
            <SearchListDropdown
                label="Соц сети, с которыми вы работаете"
                selectedItemsId={form.socialNetworks} 
                deleteSelected={deleteAdditionalCities} 
                items={socialNetworkList} 
                setSelected={setSocialNetworks} 
                placeholder=""
            />
            <MyCheckbox
                onSelected={setExperienceWithDoctors}
            >
                <span className={classes.checkbox}>Опыт работы с врачами</span>
            </MyCheckbox>
            <MyCheckbox
                onSelected={setHasCommand}
            >
                <span className={classes.checkbox}>Есть своя команда</span>
            </MyCheckbox>
            <PriceListChange list={form.priceList} setList={setPriceList} />
            <MyCheckbox 
                error={formError?.find(error => error.field === 'agreePolicy')?.text}
                checkBoxTop={true} 
                onSelected={setSelectedAgreePolicy}
            >
                <section className={classes.agreePolicy}>
                    Я ознакомлен (-а) <Link href={'https://docs.google.com/document/d/1gwotwzPEN-fYGmfrnhLP1KvnhTkHmw6IK3quQukhw_8/edit?tab=t.0'}>с политикой в отношении персональных данных</Link> и даю согласие на <Link href={'https://docs.google.com/document/d/1OSUmseHGB625qlRPZ9Icfo7KY3Al_JfmdLkpjmnxFOA/edit?tab=t.0'}>обработку персональных данных.</Link>
                </section>
            </MyCheckbox>

            <section className={classes.button}>
                <MyButton isLoading={isLoading} error={formError.length > 0 ? "Заполните обязательные поля" : ""}>
                    { 
                        isLoading 
                            ? 
                        <section className={classes.loader}>
                            <LoaderSpinner color="#FFF" />
                        </section> 
                            : 
                        'Отправить' 
                    }
                </MyButton>
            </section>
        </form>
    )
}