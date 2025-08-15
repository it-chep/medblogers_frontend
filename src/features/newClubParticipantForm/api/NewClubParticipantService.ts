import { ICityData } from "@/src/entities/city"



const CITIES = [
        {
            "id": "107",
            "name": "Абакан"
        },
        {
            "id": "1",
            "name": "Альметьевск"
        },
        {
            "id": "2",
            "name": "Анапа"
        },
        {
            "id": "3",
            "name": "Астана"
        },
        {
            "id": "4",
            "name": "Астрахань"
        },
        {
            "id": "119",
            "name": "Атырау"
        },
        {
            "id": "5",
            "name": "Балашиха"
        },
        {
            "id": "6",
            "name": "Барнаул "
        },
        {
            "id": "7",
            "name": "Барселона "
        },
        {
            "id": "104",
            "name": "Белгород"
        },
        {
            "id": "94",
            "name": "Благовещенск"
        },
        {
            "id": "98",
            "name": "Валенсия (Испания)"
        },
        {
            "id": "8",
            "name": "Верхняя Пышма "
        },
        {
            "id": "9",
            "name": "Витебск "
        },
        {
            "id": "10",
            "name": "Владивосток"
        },
        {
            "id": "11",
            "name": "Владикавказ"
        },
        {
            "id": "12",
            "name": "Владимир"
        },
        {
            "id": "13",
            "name": "Волгоград "
        },
        {
            "id": "14",
            "name": "Воронеж"
        },

    
]


class NewClubParticipantService {

    async getCities(){
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/cities_list',                                     
            {
                cache: "no-cache"
            }
        )
                
        const {cities}: {cities: ICityData[]} = await response.json()
        return cities   
    }

}

export const newClubParticipantService = new NewClubParticipantService()