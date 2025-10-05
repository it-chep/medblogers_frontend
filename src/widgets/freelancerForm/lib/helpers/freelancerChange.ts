import { IPriceListItem } from "@/src/entities/freelancer";
import { IFreelancerForm } from "../../model/types";

export const freelancerChange = (freelancer: IFreelancerForm, setFreelancer: (freelancer: IFreelancerForm) => void) => {
    return {
        setEmail(email: string){
            setFreelancer({...freelancer, email})
        },
        setFirstName(firstName: string){
            setFreelancer({...freelancer, firstName})
        },
        setLastName(lastName: string){
            setFreelancer({...freelancer, lastName})
        },
        setMiddleName(middleName: string){
            setFreelancer({...freelancer, middleName})
        },
        setPortfolioLink(portfolioLink: string){
            setFreelancer({...freelancer, portfolioLink})
        },
        setTelegramUsername(telegramUsername: string){
            setFreelancer({...freelancer, telegramUsername})
        },
        setAgreePolicy(agreePolicy: boolean){
            setFreelancer({...freelancer, agreePolicy})
        },
        setWorkingExperience(workingExperience: number){
            setFreelancer({...freelancer, workingExperience})
        },
        setExperienceWithDoctors(experienceWithDoctors: boolean){
            setFreelancer({...freelancer, experienceWithDoctors})
        },
        setHasCommand(hasCommand: boolean){
            setFreelancer({...freelancer, hasCommand})
        },
        setPriceList(priceList: IPriceListItem[]){
            setFreelancer({...freelancer, priceList})
        },
        setCity(cityId: number){
            setFreelancer({...freelancer, cityId})
        },
        setSpeciality(specialityId: number){
            setFreelancer({...freelancer, specialityId})
        },
        setAdditionalCities(id: number){
            const newCities = [...freelancer.additionalCities]
            newCities.push(id)
            setFreelancer({...freelancer, additionalCities: newCities})
        },
        setAdditionalSpecialities(id: number){
            const newSpecialities = [...freelancer.additionalSpecialties]
            newSpecialities.push(id)
            setFreelancer({...freelancer, additionalSpecialties: newSpecialities})
        },
        setSocialNetworks(id: number){
            const newSocialNetworks = [...freelancer.socialNetworks]
            newSocialNetworks.push(id)
            setFreelancer({...freelancer, socialNetworks: newSocialNetworks})
        },
        deleteAdditionalCities(id: number){
            const targetCityInd = freelancer.additionalCities.findIndex(cityId => cityId === id)                 
            if(targetCityInd >= 0){
                const newCities = [...freelancer.additionalCities]
                newCities.splice(targetCityInd, 1)
                setFreelancer({...freelancer, additionalCities: newCities})
            }
        },
        deleteAdditionalSpecialities(id: number){
            const targetSpecialityInd = freelancer.additionalSpecialties.findIndex(specialityId => specialityId === id)             
            if(targetSpecialityInd >= 0){
                const newSpecialities = [...freelancer.additionalSpecialties]
                newSpecialities.splice(targetSpecialityInd, 1)
                setFreelancer({...freelancer, additionalSpecialties: newSpecialities})
            }
        },
        deleteSocialNetworks(id: number){
            const targetSocialInd = freelancer.socialNetworks.findIndex(socialId => socialId === id)             
            if(targetSocialInd >= 0){
                const newSocials = [...freelancer.socialNetworks]
                newSocials.splice(targetSocialInd, 1)
                setFreelancer({...freelancer, socialNetworks: newSocials})
            }
        }
    }
}