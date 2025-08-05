"use client"

import {FC, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {DoctorMiniature, IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorsAll.module.scss'
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { Pagination } from "@/src/features/pagination";

export const DoctorsAll: FC = () => {

    const searchParams = useSearchParams()
    const [doctors, setDoctors] = useState<IDoctorMiniature[]>([])
    const [totalPages, setTotalPages] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    async function getDoctors() {
        try{
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 2000))
            setDoctors([
                {
            "name": "\u0410\u0431\u0434\u0443\u043b\u0430\u0435\u0432\u0430 \u0421\u043e\u0444\u044c\u044f \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "abdulaeva-Sofia-Vyacheslavovna",
            "speciality": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/abdulaeva-Sofia-Vyacheslavovna/",
            "inst_url": "https://instagram.com/dr.sonya_abdulaeva",
            "tg_subs_count": "0",
            "tg_channel_url": null,
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "10 120",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_abdulaeva-Sofia-Vyacheslavovna_photo_2025-06-01 16.01.42.jpeg"
        },
        {
            "name": "\u0410\u0431\u0434\u0443\u0440\u0437\u0430\u043a\u043e\u0432\u0430 \u0410\u043b\u0451\u043d\u0430 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043d\u0430",
            "city": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
            "slug": "abdurzakova-alyona-aleksandrovna",
            "speciality": "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/abdurzakova-alyona-aleksandrovna/",
            "tg_channel_url": "https://t.me/alena_abdurzakova",
            "inst_url": "https://instagram.com/neurolog_alena",
            "tg_subs_count": "176",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "5869",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_abdurzakova-alyona-aleksandrovna_photo_2025-06-21_01-10-57.jpg"
        },
        {
            "name": "\u0410\u0431\u0440\u0430\u043c\u043e\u0432 \u0418\u0433\u043e\u0440\u044c \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "abramov-Igor-Vladimirovich",
            "speciality": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/abramov-Igor-Vladimirovich/",
            "tg_channel_url": "https://t.me/drabramov",
            "inst_url": "https://instagram.com/dr_abramov",
            "tg_subs_count": "454",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "5738",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_abramov-Igor-Vladimirovich_IMG_3932.JPG"
        },
        {
            "name": "\u0410\u0431\u0443\u0435\u0432 \u0413\u0435\u0431\u0435\u043a \u0413\u0430\u0437\u0438\u0445\u043c\u0430\u0435\u0432\u0438\u0447",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "abuev-gebek-gazihmaevich",
            "speciality": "\u0423\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/abuev-gebek-gazihmaevich/",
            "tg_channel_url": null,
            "inst_url": "https://www.instagram.com/abuev.g/",
            "tg_subs_count": "0",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "537",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_abuev-gebek-gazihmaevich_/app/docstar_site/docstar/user_photos/user_photos/abuev.png"
        },
        {
            "name": "\u0410\u0432\u043e\u044f\u043d \u041a\u0441\u0435\u043d\u0438\u044f \u041b\u044c\u0432\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "avoyan-kseniya-lvovna",
            "speciality": "\u041a\u043e\u0441\u043c\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctor_url": "/avoyan-kseniya-lvovna/",
            "tg_channel_url": null,
            "inst_url": "https://instagram.com/ksenmaya_cosmetology?igshid=YmMyMTA2M2Y=",
            "tg_subs_count": "0",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "2210",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_avoyan-kseniya-lvovna_/app/docstar_site/docstar/user_photos/user_photos/avoyzn_YBIYMWs.png"
        },
        {
            "name": "\u0410\u0433\u0430\u0432\u0435\u0440\u0434\u0438\u0435\u0432\u0430 \u0410\u0438\u0434\u0430 \u041c\u0430\u043c\u0435\u0434\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "agaverdieva-aida-mammadovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/agaverdieva-aida-mammadovna/",
            "tg_channel_url": null,
            "inst_url": "https://instagram.com/dr.agaverdieva",
            "tg_subs_count": "0",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "1940",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_agaverdieva-aida-mammadovna_photo_2025-06-24_22-33-47.jpg"
        },
        {
            "name": "\u0410\u0433\u0430\u0445\u0430\u043d\u043e\u0432\u0430 \u042e\u043b\u0438\u044f \u0412\u0430\u043b\u0435\u0440\u044c\u0435\u0432\u043d\u0430",
            "city": "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
            "slug": "agahanova-yuliya-valerevna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/agahanova-yuliya-valerevna/",
            "tg_channel_url": "https://t.me/sexolog_Agakhanova",
            "inst_url": "https://instagram.com/agakhanova.doc?igshid=YmMyMTA2M2Y=",
            "tg_subs_count": "247",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "871",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_agahanova-yuliya-valerevna_2.jpg"
        },
        {
            "name": "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "aleksandrova-victoria-romanovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433, \u041d\u0443\u0442\u0440\u0438\u0446\u0438\u043e\u043b\u043e\u0433, \u0420\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043b\u043e\u0433",
            "doctor_url": "/aleksandrova-victoria-romanovna/",
            "tg_channel_url": "https://t.me/plan_beremennost_vmeste",
            "inst_url": "https://instagram.com/repro.doc",
            "tg_subs_count": "382",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "10 543",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_aleksandrova-victoria-romanovna_photo_2025-07-14_16-41-49.jpg"
        },
        {
            "name": "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430",
            "city": "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430",
            "slug": "alekseeva-Victoria-Sergeevna",
            "speciality": "\u041c\u0430\u043c\u043c\u043e\u043b\u043e\u0433, \u041e\u043d\u043a\u043e\u043b\u043e\u0433, \u0423\u0417\u0418",
            "doctor_url": "/alekseeva-Victoria-Sergeevna/",
            "tg_channel_url": "https://t.me/oncolog_VS",
            "inst_url": null,
            "tg_subs_count": "2923",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "0",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_alekseeva-Victoria-Sergeevna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-01-27_17.23.06.jpeg"
        },
        {
            "name": "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0430 \u042e\u043b\u0438\u044f \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430",
            "city": "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
            "slug": "alekseeva-yuliya-vladimirovna",
            "speciality": "\u0414\u0438\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctor_url": "/alekseeva-yuliya-vladimirovna/",
            "tg_channel_url": "https://t.me/doctoralexeeva",
            "inst_url": "https://www.instagram.com/doctor.alexeeva/",
            "tg_subs_count": "380",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "1162",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_alekseeva-yuliya-vladimirovna_/app/docstar_site/docstar/user_photos/user_photos/IMG_3912.jpg"
        },
        {
            "name": "\u0410\u043b\u0438\u043c\u043e\u0432\u0430 \u041e\u043a\u0441\u0430\u043d\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "alimova-oksana-petrovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/alimova-oksana-petrovna/",
            "tg_channel_url": "https://t.me/docalimova",
            "inst_url": "https://instagram.com/doc.alimova",
            "tg_subs_count": "3816",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "27 865",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_alimova-oksana-petrovna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-01-28_10.23.51.jpeg"
        },
        {
            "name": "\u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0430 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430",
            "city": "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
            "slug": "andreeva-aleksandra-sergeevna",
            "speciality": "\u041a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433",
            "doctor_url": "/andreeva-aleksandra-sergeevna/",
            "tg_channel_url": "https://t.me/andreeva_cardio",
            "inst_url": "https://www.instagram.com/_dr.andreeva_",
            "tg_subs_count": "193",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "72",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_andreeva-aleksandra-sergeevna_/app/docstar_site/docstar/user_photos/user_photos/IMG_3879.jpg"
        },
        {
            "name": "\u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0430 \u0414\u0438\u0430\u043d\u0430 \u0420\u0430\u0448\u0438\u0434\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "andreeva-diana-rashidovna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/andreeva-diana-rashidovna/",
            "tg_channel_url": "https://t.me/nevrolog_andreeva",
            "inst_url": "https://instagram.com/andreeva_nevrolog?igshid=NDk5N2NlZjQ=",
            "tg_subs_count": "173",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "10 966",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_andreeva-diana-rashidovna_photo_2025-06-27_13-51-50.jpg"
        },
        {
            "name": "\u0410\u043d\u0434\u0440\u0438\u044f\u043d\u043e\u0432 \u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432 \u042e\u043b\u0438\u0430\u043d\u043e\u0432\u0438\u0447",
            "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "slug": "andriyanov-stanislav-yulianovich",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/andriyanov-stanislav-yulianovich/",
            "tg_channel_url": "https://t.me/pediatr_andriyanov",
            "inst_url": "https://www.instagram.com/pediatr_andriyanov/",
            "tg_subs_count": "12 882",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "2253",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_andriyanov-stanislav-yulianovich_photo_2025-07-04_21-08-43.jpg"
        },
        {
            "name": "\u0410\u043d\u0442\u043e\u043d\u0435\u0432\u0438\u0447 \u041c\u0430\u0440\u044c\u044f\u043d\u0430 \u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u043d\u0430",
            "city": "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434 ",
            "slug": "antonevich-Maryana-Anatolyevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/antonevich-Maryana-Anatolyevna/",
            "tg_channel_url": "https://t.me/antonevitchmar",
            "inst_url": "https://instagram.com/Dr_maryana",
            "tg_subs_count": "890",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "0",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_antonevich-Maryana-Anatolyevna_photo_2025-06-28_20-06-49.jpg"
        },
        {
            "name": "\u0410\u0440\u0435\u0445\u0438\u043d\u0430 \u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "arehina-tatyana-anatolevna",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/arehina-tatyana-anatolevna/",
            "tg_channel_url": "https://t.me/DrArekhina",
            "inst_url": "https://instagram.com/dr.arekhina",
            "tg_subs_count": "363",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "4281",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_arehina-tatyana-anatolevna_9.jpg"
        },
        {
            "name": "\u0410\u0440\u0438\u0441\u0442\u043e\u0432\u0430 \u042e\u043b\u0438\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430",
            "city": "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
            "slug": "aristova-yulia-sergeevna",
            "speciality": "\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433",
            "doctor_url": "/aristova-yulia-sergeevna/",
            "tg_channel_url": null,
            "inst_url": "https://www.instagram.com/dr.julia_aristova?igsh=dDlwa2YxZG5zdm9q&amp;utm_source=qr",
            "tg_subs_count": "0",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "2656",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_aristova-yulia-sergeevna_/app/docstar_site/docstar/user_photos/user_photos/IMG_1823.JPG"
        },
        {
            "name": "\u0410\u0440\u0441\u0435\u043d\u0442\u044c\u0435\u0432\u0430 \u041d\u0430\u0434\u0435\u0436\u0434\u0430 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "arsentieva-nadezhda-timofeevna",
            "speciality": "\u041a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433, \u0421\u043e\u043c\u043d\u043e\u043b\u043e\u0433",
            "doctor_url": "/arsentieva-nadezhda-timofeevna/",
            "tg_channel_url": "https://t.me/cardiosonya",
            "inst_url": "https://instagram.com/cardiosonya",
            "tg_subs_count": "183",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "inst_subs_count": "83",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_arsentieva-nadezhda-timofeevna_9412384.jpg"
        },
        {
            "name": "\u0410\u0440\u0442\u0451\u043c\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0412\u0438\u0442\u0430\u043b\u044c\u0435\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "artyomova-anastasiya-vitalevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/artyomova-anastasiya-vitalevna/",
            "tg_channel_url": "https://t.me/docArtemova",
            "inst_url": "https://www.instagram.com/doc.artemova",
            "tg_subs_count": "37",
            "tg_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",
            "inst_subs_count": "301",
            "inst_subs_count_text": "\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a",
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_artyomova-anastasiya-vitalevna_/app/docstar_site/docstar/user_photos/user_photos/artyomova.png"
        },
            ])
            // await doctorService.getAll(searchParams.toString())
            setTotalPages(13)
        }
        catch (e){
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getDoctors()
    }, [searchParams])


    return (
        <section>
            <section className={classes.container}>
                {
                    isLoading
                        ?
                    <section className={classes.loader}><LoaderSpinner /></section>
                        :                
                    doctors.map(doctor =>
                        <DoctorMiniature
                            key={doctor.slug}
                            avatar_url={doctor.avatar_url}
                            city={doctor.city}
                            doctor_url={doctor.doctor_url}
                            inst_subs_count={doctor.inst_subs_count}
                            inst_subs_count_text={doctor.inst_subs_count_text}
                            inst_url={doctor.inst_url}
                            name={doctor.name}
                            slug={doctor.slug}
                            speciality={doctor.speciality}
                            tg_channel_url={doctor.tg_channel_url}
                            tg_subs_count={doctor.tg_subs_count}
                            tg_subs_count_text={doctor.tg_subs_count_text}
                        />
                    )
                }
            </section>
            {
                isLoading
                    ?
                <></>
                    :
                <Pagination setIsLoading={setIsLoading} totalPages={totalPages || 0} />
            }
        </section>
    )
}