import { ICityData } from "@/src/entities/city";
import { IForm } from "../../model/types";
import { ISpecialityData } from "@/src/entities/speciality/model/types";




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
        setCity(cityId: number){
            setForm({...form, cityId})
        },
        setSpeciality(specialityId: number){
            setForm({...form, specialityId})
        },
        setAdditionalCities(additionalCity: ICityData){
            const newCities = [...form.additionalCities]
            newCities.push(additionalCity)
            setForm({...form, additionalCities: newCities})
        },
        setAdditionalSpecialities(additionalSpeciality: ISpecialityData){
            const newSpecialities = [...form.additionalSpecialities]
            newSpecialities.push(additionalSpeciality)
            setForm({...form, additionalSpecialities: newSpecialities})
        },
        deleteAdditionalCities(name: string){
            const targetCityInd = form.additionalCities.findIndex(city => city.cityName === name) 
            
            if(targetCityInd >= 0){
                const newCities = [...form.additionalCities]
                newCities.splice(targetCityInd, 1)
                setForm({...form, additionalCities: newCities})
            }
        },
        deleteAdditionalSpecialities(name: string){
            const targetSpecialityInd = form.additionalSpecialities.findIndex(speciality => speciality.specialityName === name) 
            
            if(targetSpecialityInd >= 0){
                const newSpecialities = [...form.additionalSpecialities]
                newSpecialities.splice(targetSpecialityInd, 1)
                setForm({...form, additionalSpecialities: newSpecialities})
            }
        }
    }
    

}