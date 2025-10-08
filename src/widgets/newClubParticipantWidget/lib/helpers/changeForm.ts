import { IForm } from "../../model/types";




export const changeForm = (form: IForm, setForm: (form: IForm) => void) =>  {

    return {
        setEmail(email: string){
            setForm({...form, email})
        },
        setFirstName(firstName: string){
            setForm({...form, firstName})
        },
        setLastName(lastName: string){
            setForm({...form, lastName})
        },
        setMiddleName(middleName: string){
            setForm({...form, middleName})
        },
        setBirthDate(birthDate: string){
            setForm({...form, birthDate})
        },
        setTelegramUsername(telegramUsername: string){
            setForm({...form, telegramUsername})
        },
        setInstagramUsername(instagramUsername: string){
            setForm({...form, instagramUsername})
        },
        setVkUsername(vkUsername: string){
            setForm({...form, vkUsername})
        },
        setYoutubeUsername(youtubeUsername: string){
            setForm({...form, youtubeUsername})
        },
        setDzenUsername(dzenUsername: string){
            setForm({...form, dzenUsername})
        },
        setTelegramChannel(telegramChannel: string){
            setForm({...form, telegramChannel})
        },
        setSiteLink(siteLink: string){
            setForm({...form, siteLink})
        },
        setMainBlogTheme(mainBlogTheme: string){
            setForm({...form, mainBlogTheme})
        },
        setAgreePolicy(agreePolicy: boolean){
            setForm({...form, agreePolicy})
        },
        setMarketingPreferences(marketingPreferences: string){
            setForm({...form, marketingPreferences})
        },
        setCity(cityId: number){
            setForm({...form, cityId})
        },
        setSpeciality(specialityId: number){
            setForm({...form, specialityId})
        },
        setAdditionalCities(additionalCityId: number){
            const newCities = [...form.additionalCities]
            newCities.push(additionalCityId)
            setForm({...form, additionalCities: newCities})
        },
        setAdditionalSpecialities(additionalSpecialityId: number){
            const newSpecialities = [...form.additionalSpecialties]
            newSpecialities.push(additionalSpecialityId)
            setForm({...form, additionalSpecialties: newSpecialities})
        },
        deleteAdditionalCities(id: number){
            const targetCityInd = form.additionalCities.findIndex(cityId => cityId === id) 
            if(targetCityInd >= 0){
                const newCities = [...form.additionalCities]
                newCities.splice(targetCityInd, 1)
                setForm({...form, additionalCities: newCities})
            }
        },
        deleteAdditionalSpecialities(id: number){
            const targetSpecialityInd = form.additionalSpecialties.findIndex(specialityId => specialityId === id) 
            
            if(targetSpecialityInd >= 0){
                const newSpecialities = [...form.additionalSpecialties]
                newSpecialities.splice(targetSpecialityInd, 1)
                setForm({...form, additionalSpecialties: newSpecialities})
            }
        }
    }
    

}