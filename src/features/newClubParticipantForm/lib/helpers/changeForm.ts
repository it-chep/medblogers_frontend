import { IForm, TItem } from "../../model/types";




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
        setAdditionalCities(additionalCity: TItem){
            const newCities = [...form.additionalCities]
            newCities.push(additionalCity)
            setForm({...form, additionalCities: newCities})
        }
    }
    

}