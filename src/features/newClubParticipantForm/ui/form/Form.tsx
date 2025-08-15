"use client"

import { FC, useEffect, useState } from "react";
import classes from './form.module.scss'
import { MyInput } from "../input/MyInput";
import { IForm } from "../../model/types";
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

export const Form: FC = () => {

    const [form, setForm] = useState<IForm>(initialStateForm)
    const [cities, setCities] = useState<ICityData[]>([])
    const [specialities, setSpecialities] = useState<ISpecialityData[]>([])

    const {
        setEmail, setLastName, setFirstName, setMiddleName, setTelegramChannel,
        setBirthDate, setInstagramUsername, setVkUsername, setTelegramUsername,
        setDzenUsername, setYoutubeUsername, setMainBlogTheme, setSiteLink, setAgreePolicy,
        setAdditionalCities, deleteAdditionalCities, setAdditionalSpecialities,
         deleteAdditionalSpecialities, setCity, setSpeciality
    } = changeForm(form, setForm)

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

    return (
        <section className={classes.container}>
            <MyInput label="Почта" value={form.email} setValue={setEmail} />
            <MyInput label="Фамилия" value={form.lastName} setValue={setLastName} />
            <MyInput label="Имя" value={form.firstName} setValue={setFirstName} />
            <MyInput label="Отчество" value={form.middleName} setValue={setMiddleName} />
            <MyInput label="Ваш день рождения" value={form.birthDate} setValue={setBirthDate} placeholder="Укажите дату в формате ДД.ММ.ГГГГ" />
            <MyInput label="Ваш никнейм в инстаграм" value={form.instagramUsername} setValue={setInstagramUsername} placeholder="Можете оставить пустым" />
            <MyInput label="Ссылка на VK" value={form.vkUsername} setValue={setVkUsername} placeholder="Можете оставить пустым" />
            <MyInput label="Ваш никнейм в Telegram (не канал, а личный никнейм, через @)" value={form.telegramUsername} setValue={setTelegramUsername} placeholder="Пример: @readydoc" />
            <MyInput label="Ссылка на ваш канал в телеграм" value={form.telegramChannel} setValue={setTelegramChannel} placeholder="Пример: https://t.me/readydoctor, но можно оставить пустым" />
            <MyInput label="Ссылка на ЯндексДзен" value={form.dzenUsername} setValue={setDzenUsername} placeholder="Можете оставить пустым" />
            <MyInput label="Ссылка на YouTube" value={form.youtubeUsername} setValue={setYoutubeUsername} placeholder="Можете оставить пустым" />
            
            <SearchItem 
                label="Выберите город (Если вашего нет, напишите об этом в бота)"
                items={cities.map(city => city.cityName)} 
                selectedItem={cities.find(city => city.cityId === form.cityId)?.cityName || ''} 
                setSelected={setCitySelected} 
            />

            <Search 
                label="Дополнительные города"
                seletedItems={form.additionalCities.map(city => city.cityName)} 
                deleteSelected={deleteAdditionalCities} 
                items={cities.map(city => city.cityName)} 
                setSelected={setCitiesSelected} 
                placeholder="Введите название города..."
            />

            <SearchItem 
                label="Выберите вашу специальность (Если ее нет, напишите в бота)"
                items={specialities.map(speciality => speciality.specialityName)} 
                selectedItem={specialities.find(speciality => speciality.specialityId === form.specialityId)?.specialityName || ''} 
                setSelected={setSpecialitySelected} 
            />

            <Search 
                label="Дополнительные специальности"
                seletedItems={form.additionalSpecialities.map(speciality => speciality.specialityName)} 
                deleteSelected={deleteAdditionalSpecialities} 
                items={specialities.map(speciality => speciality.specialityName)} 
                setSelected={setSpecialitiesSelected} 
                placeholder="Введите название специальности..."
            />

            <MyInput label="ТОП-5 заболеваний/тем про которые пишете в блоге" value={form.mainBlogTheme} setValue={setMainBlogTheme} />
            <MyInput label="Ваш сайт/таплинк" value={form.siteLink} setValue={setSiteLink} placeholder="Пример: https://taplink.cc/readydoc" />

            <MyCheckbox checkBoxTop={true} onSelected={() => setAgreePolicy(!form.agreePolicy)}>
                <section className={classes.agreePolicy}>
                    Я ознакомлен (-а) <Link href={'https://docs.google.com/document/d/1gwotwzPEN-fYGmfrnhLP1KvnhTkHmw6IK3quQukhw_8/edit?tab=t.0'}>с политикой в отношении персональных данных</Link> и даю согласие на <Link href={'https://docs.google.com/document/d/1OSUmseHGB625qlRPZ9Icfo7KY3Al_JfmdLkpjmnxFOA/edit?tab=t.0'}>обработку персональных данных.</Link>
                </section>
            </MyCheckbox>

            <section className={classes.button}>
                <MyButton>
                    Отправить
                </MyButton>
            </section>
        </section>
    )
}