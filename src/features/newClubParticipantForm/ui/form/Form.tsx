"use client"

import { FC, FormEvent, useEffect, useState } from "react";
import classes from './form.module.scss'
import { MyInput } from "../input/MyInput";
import { IForm, IFormError, IFormReq } from "../../model/types";
import { initialStateForm } from "../../model/initialState";
import { changeForm } from "../../lib/helpers/changeForm";
import { newClubParticipantService } from "../../api/NewClubParticipantService";
import { ICityData } from "@/src/entities/city";
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { Search } from "../search/Search";
import { ISpecialityData } from "@/src/entities/speciality/model/types";
import { SearchItem } from "../searchItem/SearchItem";
import { useRouter } from "next/navigation";
import { changeFormError } from "../../lib/helpers/changeFormError";

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
        const cities = await newClubParticipantService.getCities()
        setCities(cities)
    }

    const getSpecialities = async () => {
        const specialities = await newClubParticipantService.getSpecialities()
        setSpecialities(specialities)
    }

    useEffect(() => {
        getCities()
        getSpecialities()
    }, [])

    const setCitiesSelected = (name: string) => {
        const targetCity = cities.find(city => city.cityName === name)
        if(targetCity){
            setAdditionalCities(targetCity)
        }
    }

    const setCitySelected = (name: string) => {
        const targetCity = cities.find(city => city.cityName === name)
        if(targetCity){
            setCity(targetCity.cityId)
        }
    }

    const setSpecialitySelected = (name: string) => {
        const targetSpeciality = specialities.find(speciality => speciality.specialityName === name)
        if(targetSpeciality){
            setSpeciality(targetSpeciality.specialityId)
        }
    }

    const setSpecialitiesSelected = (name: string) => {
        const targetSpeciality = specialities.find(speciality => speciality.specialityName === name)
        if(targetSpeciality){
            setAdditionalSpecialities(targetSpeciality)
        }
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const formReq: IFormReq = {
            ...form, 
            additionalCities: form.additionalCities.map(city => city.cityId), 
            additionalSpecialities: form.additionalSpecialities.map(speciality => speciality.specialityId)
        }
        
        try{
            setIsLoading(true)
            const res = await newClubParticipantService.setForm(formReq)
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
            <MyInput 
                label="Почта *" 
                value={form.email} 
                setValue={setEmail} 
                type="email"
                error={formError?.find(error => error.field === 'email')?.text} 
                setError={setErrorFieldDelete('email')}
                required
                name="email"
            />
            <MyInput 
                label="Фамилия *" 
                value={form.lastName} 
                setValue={setLastName} 
                type="text"
                name="lastName"
                error={formError?.find(error => error.field === 'lastName')?.text} 
                setError={setErrorFieldDelete('lastName')}
                required
            />
            <MyInput 
                label="Имя *" 
                value={form.firstName} 
                setValue={setFirstName} 
                type="text"
                name="firstName"
                error={formError?.find(error => error.field === 'firstName')?.text} 
                setError={setErrorFieldDelete('firstName')}
                required
            />
            <MyInput 
                label="Отчество *" 
                value={form.middleName} 
                setValue={setMiddleName} 
                type="text"
                name="middleName"
                error={formError?.find(error => error.field === 'middleName')?.text} 
                setError={setErrorFieldDelete('middleName')}
                required
            />
            <MyInput 
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
            <MyInput 
                label="Ваш никнейм в инстаграм" 
                value={form.instagramUsername} 
                setValue={setInstagramUsername} 
                placeholder="Можете оставить пустым"
                type="text"
                name="instagramUsername"
            />
            <MyInput 
                label="Ссылка на VK" 
                value={form.vkUsername} 
                setValue={setVkUsername} 
                placeholder="Можете оставить пустым"
                type="text"
                name="vkUsername"
            />
            <MyInput 
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
            <MyInput 
                label="Ссылка на ваш канал в телеграм" 
                value={form.telegramChannel} 
                setValue={setTelegramChannel} 
                placeholder="Пример: https://t.me/readydoctor, но можно оставить пустым" 
                type="text"
                name="telegramChannel"
            />
            <MyInput 
                label="Ссылка на ЯндексДзен" 
                value={form.dzenUsername} 
                setValue={setDzenUsername} 
                placeholder="Можете оставить пустым" 
                type="text"
                name="dzenUsername"
            />
            <MyInput 
                label="Ссылка на YouTube" 
                value={form.youtubeUsername} 
                setValue={setYoutubeUsername} 
                placeholder="Можете оставить пустым" 
                type="text"
                name="youtubeUsername"
            />
            
            <SearchItem 
                label="Выберите город (Если вашего нет, напишите об этом в бота) *"
                items={cities.map(city => city.cityName)} 
                selectedItem={cities.find(city => city.cityId === form.cityId)?.cityName || ''} 
                setSelected={setCitySelected} 
                placeholder="Нажмите чтобы открыть поиск города"
                placeholderSearch="Введите название города..."
                error={formError?.find(error => error.field === 'cityId')?.text} 
                setError={setErrorFieldDelete('cityId')}
            />

            <Search 
                label="Дополнительные города"
                selectedItems={form.additionalCities.map(city => city.cityName)} 
                deleteSelected={deleteAdditionalCities} 
                items={cities.map(city => city.cityName)} 
                setSelected={setCitiesSelected} 
                placeholder="Введите название города..."
            />

            <SearchItem 
                label="Выберите вашу специальность (Если ее нет, напишите в бота) *"
                items={specialities.map(speciality => speciality.specialityName)} 
                selectedItem={specialities.find(speciality => speciality.specialityId === form.specialityId)?.specialityName || ''} 
                setSelected={setSpecialitySelected} 
                placeholder="Нажмите чтобы открыть поиск специальности"
                placeholderSearch="Введите название специальности..."
                error={formError?.find(error => error.field === 'specialityId')?.text} 
                setError={setErrorFieldDelete('specialityId')}
            />

            <Search 
                label="Дополнительные специальности"
                selectedItems={form.additionalSpecialities.map(speciality => speciality.specialityName)} 
                deleteSelected={deleteAdditionalSpecialities} 
                items={specialities.map(speciality => speciality.specialityName)} 
                setSelected={setSpecialitiesSelected} 
                placeholder="Введите название специальности..."
            />

            <MyInput 
                label="ТОП-5 заболеваний/тем про которые пишете в блоге" 
                value={form.mainBlogTheme} 
                setValue={setMainBlogTheme}
                type="text"
                placeholder="Например: ВПЧ, беременность, нарушения цикла, профилактика ОРВИ..."
                name="mainBlogTheme" 
            />
            <MyInput 
                label="У врачей каких специальностей вы бы хотели приобрести рекламу / договориться о коллаборации? (Планируем сделать вкладку «ищу неврологов, гинекологов и т.д.)" 
                value={form.marketingPreferences} 
                setValue={setMarketingPreferences}
                placeholder="Например: Неврологи, педиатры, ревматологи, рентгенологи"
                type="text"
                name="marketingPreferences" 
            />
            <MyInput 
                label="Ваш сайт/таплинк" 
                value={form.siteLink} 
                setValue={setSiteLink} 
                placeholder="Пример: https://taplink.cc/readydoc" 
                type="text"
                name="siteLink" 
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
                    Отправить
                </MyButton>
            </section>
        </form>
    )
}