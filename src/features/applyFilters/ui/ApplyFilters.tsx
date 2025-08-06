"use client"

import { clearParams } from "@/src/shared/lib/helpers/clearParams";
import { MyButton } from "@/src/shared/ui/myButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";


interface IProps {
    currentMin: number;
    currentMax: number;
}

export const ApplyFilters: FC<IProps> = ({currentMax, currentMin}) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const selectedCities = () => {
        const selectedIds: string[] = [];
        const cities: NodeListOf<HTMLInputElement> = document.querySelectorAll('.city input')
        const selectedCheckboxes = Array.from(cities).filter(city => city.checked);
        selectedCheckboxes.forEach(selectedCity => {
            const checkboxId = selectedCity.parentElement?.parentElement?.dataset.id;
            if(checkboxId){
                selectedIds.push(checkboxId)
            }
        })
        return selectedIds
    }

    const selectedSpecialities = () => {
        const selectedIds: string[] = [];
        const specialities: NodeListOf<HTMLInputElement> = document.querySelectorAll('.speciality input')
        const selectedCheckboxes = Array.from(specialities).filter(speciality => speciality.checked);
        selectedCheckboxes.forEach(selectedSpeciality => {
            const checkboxId = selectedSpeciality.parentElement?.parentElement?.dataset.id;
            if(checkboxId){
                selectedIds.push(checkboxId)
            }
        })
        return selectedIds
    }

    const selectedSubs = () => {
        const selectedIds: string[] = [];
        const subs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.social_media input')
        const selectedCheckboxes = Array.from(subs).filter(sub => sub.checked);
        selectedCheckboxes.forEach(selectedSub => {
            const checkboxId = selectedSub.parentElement?.parentElement?.dataset.id;
            if(checkboxId){
                selectedIds.push(checkboxId)
            }
        })
        return selectedIds
    }

    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const apply = () => {
        const params = new URLSearchParams(searchParams);
        clearParams(params)

        const selectedCitiesIds = selectedCities()
        const selectedSpecialitiesIds = selectedSpecialities()
        const selectedSubsIds = selectedSubs()

        if(selectedCitiesIds.length > 0){
            params.append('city', selectedCitiesIds.join(','));
        }
        if(selectedSpecialitiesIds.length > 0){
            params.append('speciality', selectedSpecialitiesIds.join(','));
        }
        if(selectedSubsIds.length > 0){
            params.append('social_media', selectedSubsIds.join(','));
        }

        params.set('min_subscribers', String(currentMin))
        params.set('max_subscribers', String(currentMax))

        setNewUrl(params)
    }   

    return (
        <section>
            <MyButton onClick={apply}>Применить</MyButton>
        </section>
    )
}