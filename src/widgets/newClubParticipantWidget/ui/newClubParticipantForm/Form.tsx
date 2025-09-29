"use client"

import { FC, FormEvent, useEffect, useState } from "react";
import classes from './form.module.scss'
import { IForm, IFormError } from "../../model/types";
import { initialStateForm } from "../../model/initialState";
import { changeForm } from "../../lib/helpers/changeForm";
import { newClubParticipantService } from "../../api/NewClubParticipantService";
import { cityService, ICityData } from "@/src/entities/city";
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { ISpecialityData } from "@/src/entities/speciality/model/types";
import { useRouter } from "next/navigation";
import { changeFormError } from "../../lib/helpers/changeFormError";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { specialityService } from "@/src/entities/speciality";
import { MyInputForm } from "@/src/shared/ui/inputForm";
import { SearchItemListDropdown, SearchListDropdown } from "@/src/features/searchListDropdown";

export const Form: FC = () => {

    const [form, setForm] = useState<IForm>(initialStateForm)
    const [formError, setFormError] = useState<IFormError[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cities, setCities] = useState<ICityData[]>([])
    const [specialities, setSpecialities] = useState<ISpecialityData[]>([])

    const router = useRouter()

    const {
        setEmail, setLastName, setFirstName, setMiddleName, setTelegramChannel,
        setBirthDate, setInstagramUsername, setVkUsername, setTelegramUsername,
        setDzenUsername, setYoutubeUsername, setMainBlogTheme, setSiteLink, setAgreePolicy,
        setAdditionalCities, deleteAdditionalCities, setAdditionalSpecialities,
        deleteAdditionalSpecialities, setCity, setSpeciality, setMarketingPreferences
    } = changeForm(form, setForm)

    const {setErrorFieldDelete} = changeFormError(formError, setFormError)

    const getCities = async () => {
        const cities = await cityService.getCities()
        setCities(cities)
    }

    const getSpecialities = async () => {
        const specialities = await specialityService.getSpecialities()
        setSpecialities(specialities)
    }

    useEffect(() => {
        getCities()
        getSpecialities()
    }, [])

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try{
            setIsLoading(true)
            const res = await newClubParticipantService.setForm(form)
            if(res.errors.length === 0){
                router.push('/spasibo_club_participant')
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
                label="Ваш день рождения *" 
                value={form.birthDate} 
                setValue={setBirthDate} 
                placeholder="Укажите дату в формате ДД.ММ.ГГГГ" 
                type="text"
                name="birthDate"
                error={formError?.find(error => error.field === 'birthDate')?.text} 
                setError={setErrorFieldDelete('birthDate')}
                required
            />
            <MyInputForm 
                label="Ваш никнейм в инстаграм" 
                value={form.instagramUsername} 
                setValue={setInstagramUsername} 
                placeholder="Можете оставить пустым"
                type="text"
                name="instagramUsername"
            />
            <MyInputForm 
                label="Ссылка на VK" 
                value={form.vkUsername} 
                setValue={setVkUsername} 
                placeholder="Можете оставить пустым"
                type="text"
                name="vkUsername"
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
                label="Ссылка на ваш канал в телеграм" 
                value={form.telegramChannel} 
                setValue={setTelegramChannel} 
                placeholder="Пример: https://t.me/readydoctor, но можно оставить пустым" 
                type="text"
                name="telegramChannel"
            />
            <MyInputForm 
                label="Ссылка на ЯндексДзен" 
                value={form.dzenUsername} 
                setValue={setDzenUsername} 
                placeholder="Можете оставить пустым" 
                type="text"
                name="dzenUsername"
            />
            <MyInputForm 
                label="Ссылка на YouTube" 
                value={form.youtubeUsername} 
                setValue={setYoutubeUsername} 
                placeholder="Можете оставить пустым" 
                type="text"
                name="youtubeUsername"
            />
            <SearchItemListDropdown 
                label="Выберите город (Если вашего нет, напишите об этом в бота) *"
                items={cities.map(city => ({id: city.cityId, name: city.cityName}))} 
                selectedItemId={form.cityId} 
                setSelectedId={setCity} 
                placeholder="Нажмите чтобы открыть поиск города"
                placeholderSearch="Введите название города..."
                error={formError?.find(error => error.field === 'cityId')?.text} 
                setError={setErrorFieldDelete('cityId')}
            />
            <SearchListDropdown
                label="Дополнительные города"
                selectedItemsId={form.additionalCities} 
                deleteSelected={deleteAdditionalCities} 
                items={cities.map(c => ({id: c.cityId, name: c.cityName}))} 
                setSelected={setAdditionalCities} 
                placeholder="Введите название города..."
            />
            <SearchItemListDropdown 
                label="Выберите вашу специальность (Если ее нет, напишите в бота) *"
                items={specialities.map(speciality => ({id: speciality.specialityId, name: speciality.specialityName}))} 
                selectedItemId={form.specialityId} 
                setSelectedId={setSpeciality} 
                placeholder="Нажмите чтобы открыть поиск специальности"
                placeholderSearch="Введите название специальности..."
                error={formError?.find(error => error.field === 'specialityId')?.text} 
                setError={setErrorFieldDelete('specialityId')}
            />
            <SearchListDropdown 
                label="Дополнительные специальности"
                selectedItemsId={form.additionalSpecialties} 
                deleteSelected={deleteAdditionalSpecialities} 
                items={specialities.map(s => ({id: s.specialityId, name: s.specialityName}))} 
                setSelected={setAdditionalSpecialities} 
                placeholder="Введите название специальности..."
            />
            <MyInputForm 
                label="ТОП-5 заболеваний/тем про которые пишете в блоге" 
                value={form.mainBlogTheme} 
                setValue={setMainBlogTheme}
                type="text"
                placeholder="Например: ВПЧ, беременность, нарушения цикла, профилактика ОРВИ..."
                name="mainBlogTheme" 
            />
            <MyInputForm 
                label="У врачей каких специальностей вы бы хотели приобрести рекламу / договориться о коллаборации? (Планируем сделать вкладку «ищу неврологов, гинекологов и т.д.)" 
                value={form.marketingPreferences} 
                setValue={setMarketingPreferences}
                placeholder="Например: Неврологи, педиатры, ревматологи, рентгенологи"
                type="text"
                name="marketingPreferences" 
            />
            <MyInputForm 
                label="Ваш сайт/таплинк" 
                value={form.siteLink} 
                setValue={setSiteLink} 
                placeholder="Пример: https://taplink.cc/readydoc" 
                type="text"
                name="siteLink" 
                error={formError?.find(error => error.field === 'siteLink')?.text} 
                setError={setErrorFieldDelete('siteLink')}
            />

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
