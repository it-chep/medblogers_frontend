import { ISearchDoctors } from "../model/types"

const RES = {
    "data": [
        {
            "name": "\u0410\u0431\u0440\u0430\u043c\u043e\u0432 \u0418\u0433\u043e\u0440\u044c \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "abramov-Igor-Vladimirovich",
            "speciality": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/abramov-Igor-Vladimirovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_abramov-Igor-Vladimirovich_IMG_3932.JPG"
        },
        {
            "name": "\u0410\u0433\u0430\u0432\u0435\u0440\u0434\u0438\u0435\u0432\u0430 \u0410\u0438\u0434\u0430 \u041c\u0430\u043c\u0435\u0434\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "agaverdieva-aida-mammadovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/agaverdieva-aida-mammadovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_agaverdieva-aida-mammadovna_photo_2025-06-24_22-33-47.jpg"
        },
        {
            "name": "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0430 \u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "aleksandrova-victoria-romanovna",
            "speciality": "\u0420\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043b\u043e\u0433",
            "doctor_url": "/aleksandrova-victoria-romanovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_aleksandrova-victoria-romanovna_photo_2025-07-14_16-41-49.jpg"
        },
        {
            "name": "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0430 \u042e\u043b\u0438\u044f \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430",
            "city": "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
            "slug": "alekseeva-yuliya-vladimirovna",
            "speciality": "\u0414\u0438\u0435\u0442\u043e\u043b\u043e\u0433",
            "doctor_url": "/alekseeva-yuliya-vladimirovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_alekseeva-yuliya-vladimirovna_/app/docstar_site/docstar/user_photos/user_photos/IMG_3912.jpg"
        },
        {
            "name": "\u0410\u043b\u0438\u043c\u043e\u0432\u0430 \u041e\u043a\u0441\u0430\u043d\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "alimova-oksana-petrovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/alimova-oksana-petrovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_alimova-oksana-petrovna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-01-28_10.23.51.jpeg"
        },
        {
            "name": "\u0410\u043c\u0438\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u0438\u0447",
            "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "slug": "aminov-ilya-vyacheslavovich",
            "speciality": "\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctor_url": "/aminov-ilya-vyacheslavovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_aminov-ilya-vyacheslavovich_542124.jpg"
        },
        {
            "name": "\u0410\u043d\u0442\u043e\u043d\u0435\u0432\u0438\u0447 \u041c\u0430\u0440\u044c\u044f\u043d\u0430 \u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u043d\u0430",
            "city": "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434 ",
            "slug": "antonevich-Maryana-Anatolyevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/antonevich-Maryana-Anatolyevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_antonevich-Maryana-Anatolyevna_photo_2025-06-28_20-06-49.jpg"
        },
        {
            "name": "\u0410\u0440\u0441\u0435\u043d\u0442\u044c\u0435\u0432\u0430 \u041d\u0430\u0434\u0435\u0436\u0434\u0430 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "arsentieva-nadezhda-timofeevna",
            "speciality": "\u041a\u0430\u0440\u0434\u0438\u043e\u043b\u043e\u0433",
            "doctor_url": "/arsentieva-nadezhda-timofeevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_arsentieva-nadezhda-timofeevna_9412384.jpg"
        },
        {
            "name": "\u0410\u0440\u0442\u0451\u043c\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0412\u0438\u0442\u0430\u043b\u044c\u0435\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "artyomova-anastasiya-vitalevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/artyomova-anastasiya-vitalevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_artyomova-anastasiya-vitalevna_/app/docstar_site/docstar/user_photos/user_photos/artyomova.png"
        },
        {
            "name": "\u0410\u0440\u0445\u0438\u043f\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "arhipova-mariya-vyacheslavovna",
            "speciality": "\u041e\u0442\u043e\u0440\u0438\u043d\u043e\u043b\u0430\u0440\u0438\u043d\u0433\u043e\u043b\u043e\u0433",
            "doctor_url": "/arhipova-mariya-vyacheslavovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_arhipova-mariya-vyacheslavovna_photo_2025-06-24_09-37-38.jpg"
        },
        {
            "name": "\u0410\u0445\u043c\u0430\u0434\u0435\u0435\u0432\u0430 \u0413\u0443\u043b\u044c\u043d\u0430\u0440\u0430 \u041d\u0430\u0438\u043b\u0435\u0432\u043d\u0430",
            "city": "\u0423\u0444\u0430",
            "slug": "ahmadeeva-gulnara-nailevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/ahmadeeva-gulnara-nailevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_ahmadeeva-gulnara-nailevna_/app/docstar_site/docstar/user_photos/user_photos/ahmadeeva.png"
        },
        {
            "name": "\u0410\u0445\u043c\u0430\u0434\u0443\u043b\u043b\u0438\u043d\u0430 \u0413\u0443\u043b\u044c\u0448\u0430\u0442 \u0420\u0430\u0432\u0438\u0441\u043e\u0432\u043d\u0430",
            "city": "\u0423\u0444\u0430",
            "slug": "ahmadullina-gulshat-ravisovna",
            "speciality": "\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433",
            "doctor_url": "/ahmadullina-gulshat-ravisovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_ahmadullina-gulshat-ravisovna_/app/docstar_site/docstar/user_photos/user_photos/IMG_3913.jpg"
        },
        {
            "name": "\u0410\u0445\u043c\u0435\u0434\u043e\u0432 \u0422\u0443\u0440\u0430\u043d \u0417\u043e\u0445\u0440\u0430\u0431\u043e\u0432\u0438\u0447",
            "city": "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430",
            "slug": "ahmedov-turan-zohrabovich",
            "speciality": "\u0425\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/ahmedov-turan-zohrabovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_ahmedov-turan-zohrabovich_photo_2025-06-19_00-45-26.jpg"
        },
        {
            "name": "\u0411\u0430\u0431\u0438\u043a\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043d\u0430",
            "city": "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
            "slug": "babikova-mariya-aleksandrovna",
            "speciality": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/babikova-mariya-aleksandrovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_babikova-mariya-aleksandrovna_/app/docstar_site/docstar/user_photos/user_photos/babikova.png"
        },
        {
            "name": "\u0411\u0430\u0439\u0440\u0430\u043c\u043e\u0432\u0430 \u041d\u0443\u0440\u0430\u043d\u0430 \u042d\u043b\u044c\u0447\u0438\u043d\u043e\u0432\u043d\u0430",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "bajramova-nurana-elchinovna",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/bajramova-nurana-elchinovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bajramova-nurana-elchinovna_photo_2025-06-20_19-25-05.jpg"
        },
        {
            "name": "\u0411\u0430\u043a\u0438\u0435\u0432\u0430 \u042d\u043b\u0438\u043d\u0430 \u041c\u0430\u043a\u0441\u043e\u0432\u043d\u0430",
            "city": "\u0421\u0443\u0440\u0433\u0443\u0442",
            "slug": "bakieva-elina-maksovna",
            "speciality": "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433 \u043e\u0431\u0449\u0435\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",
            "doctor_url": "/bakieva-elina-maksovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bakieva-elina-maksovna_/app/docstar_site/docstar/user_photos/user_photos/bakieva_ioOkjJB.png"
        },
        {
            "name": "\u0411\u0435\u0439\u0442\u0443\u043b\u0430\u0435\u0432\u0430 \u041b\u0435\u043c\u0430\u0440\u0430 \u0410\u0439\u0434\u0435\u0440\u043e\u0432\u043d\u0430",
            "city": "\u0421\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c",
            "slug": "beytulaeva-Lemara-Ayderovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/beytulaeva-Lemara-Ayderovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_beytulaeva-Lemara-Ayderovna_photo_2025-06-15_16-02-50.jpg"
        },
        {
            "name": "\u0411\u0435\u043b\u043e\u0432\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430 \u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043d\u0430",
            "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "slug": "belova-ekaterina-mihajlovna",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/belova-ekaterina-mihajlovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_belova-ekaterina-mihajlovna_/app/docstar_site/docstar/user_photos/user_photos/belova.png"
        },
        {
            "name": "\u0411\u0435\u043b\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u044f \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u043d\u0430",
            "city": "\u0420\u044f\u0437\u0430\u043d\u044c",
            "slug": "belova-mariya-nikolaevna",
            "speciality": "\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433",
            "doctor_url": "/belova-mariya-nikolaevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_belova-mariya-nikolaevna_/app/docstar_site/docstar/user_photos/user_photos/belova.m.png"
        },
        {
            "name": "\u0411\u0435\u043b\u043e\u0448\u0438\u0441\u0442\u0430\u044f \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432\u043d\u0430",
            "city": "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
            "slug": "beloshistaya-anastasiya-dmitrievna",
            "speciality": "\u042d\u043d\u0434\u043e\u043a\u0440\u0438\u043d\u043e\u043b\u043e\u0433",
            "doctor_url": "/beloshistaya-anastasiya-dmitrievna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_beloshistaya-anastasiya-dmitrievna_456.jpg"
        },
        {
            "name": "\u0411\u0435\u0440\u0447\u0438\u0442\u043e\u0432\u0430 \u0412\u0430\u043b\u0435\u0440\u0438\u044f \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430",
            "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "slug": "bercitova-valeria-vladimirovna",
            "speciality": "\u041f\u0441\u0438\u0445\u0438\u0430\u0442\u0440",
            "doctor_url": "/bercitova-valeria-vladimirovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bercitova-valeria-vladimirovna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-05-12_21.43.14.jpeg"
        },
        {
            "name": "\u0411\u043b\u0438\u043d\u043e\u0432\u0430 \u041c\u0430\u0440\u0438\u043d\u0430 \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u043d\u0430",
            "city": "\u0410\u043d\u0430\u043f\u0430",
            "slug": "blinova-marina-nikolaevna",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/blinova-marina-nikolaevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_blinova-marina-nikolaevna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-02-01_15.58.51.jpeg"
        },
        {
            "name": "\u0411\u043b\u0438\u043d\u043e\u0432 \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "blinov-dmitrij-vladimirovich",
            "speciality": "\u0424\u043b\u0435\u0431\u043e\u043b\u043e\u0433",
            "doctor_url": "/blinov-dmitrij-vladimirovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_blinov-dmitrij-vladimirovich_/app/docstar_site/docstar/user_photos/user_photos/2024-03-10_23.30.53.jpg"
        },
        {
            "name": "\u0411\u043e\u043b\u043e\u0442\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",
            "city": "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
            "slug": "bolotov-mihail-vladimirovich",
            "speciality": "\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442",
            "doctor_url": "/bolotov-mihail-vladimirovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bolotov-mihail-vladimirovich_/app/docstar_site/docstar/user_photos/user_photos/jfnvhdnmc.png"
        },
        {
            "name": "\u0411\u043e\u0440\u0438\u0441\u0435\u043d\u043a\u043e \u041d\u0430\u0442\u0430\u043b\u044c\u044f \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043d\u0430",
            "city": "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
            "slug": "borisenko-natalya-romanovna",
            "speciality": "\u0410\u043a\u0443\u0448\u0435\u0440-\u0433\u0438\u043d\u0435\u043a\u043e\u043b\u043e\u0433",
            "doctor_url": "/borisenko-natalya-romanovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_borisenko-natalya-romanovna_/app/docstar_site/docstar/user_photos/user_photos/borisenko.png"
        },
        {
            "name": "\u0411\u043e\u0440\u043c\u043e\u0442\u043e\u0432\u0430  \u0415\u043b\u0435\u043d\u0430 \u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043d\u0430",
            "city": "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a ",
            "slug": "bormotova-elena-alekseevna",
            "speciality": "\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433",
            "doctor_url": "/bormotova-elena-alekseevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bormotova-elena-alekseevna_/app/docstar_site/docstar/user_photos/user_photos/bormotova.png"
        },
        {
            "name": "\u0411\u043e\u0442\u0438\u0440\u043e\u0432 \u0410\u0437\u0438\u0437\u0431\u0435\u043a \u041c\u0430\u043c\u0430\u0437\u043e\u0438\u0434\u043e\u0432\u0438\u0447",
            "city": "\u041c\u043e\u0441\u043a\u0432\u0430",
            "slug": "botirov-azizbek-mamazoidovich",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/botirov-azizbek-mamazoidovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_botirov-azizbek-mamazoidovich_/app/docstar_site/docstar/user_photos/user_photos/botirov.png"
        },
        {
            "name": "\u0411\u0443\u0439\u043c\u043e\u0432\u0430 \u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430",
            "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
            "slug": "buimova-Anastasia-Vyacheslavovna",
            "speciality": "\u041f\u0435\u0434\u0438\u0430\u0442\u0440",
            "doctor_url": "/buimova-Anastasia-Vyacheslavovna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_buimova-Anastasia-Vyacheslavovna_/app/docstar_site/docstar/user_photos/user_photos/photo_2025-03-25_22.57.35.jpeg"
        },
        {
            "name": "\u0411\u0443\u043b\u0430\u0434\u0436\u043e\u0432 \u042d\u043c\u0438\u043b\u044c \u0411\u0430\u0445\u0440\u0443\u0437\u043e\u0432\u0438\u0447",
            "city": "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
            "slug": "buladzhov-emil-bahruzovich",
            "speciality": "\u041f\u043b\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0445\u0438\u0440\u0443\u0440\u0433",
            "doctor_url": "/buladzhov-emil-bahruzovich/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_buladzhov-emil-bahruzovich_/app/docstar_site/docstar/user_photos/user_photos/emil_8sps7dV.png"
        },
        {
            "name": "\u0411\u0443\u043b\u0430\u0442\u043e\u0432\u0430 \u0414\u0438\u043b\u044f \u0420\u0430\u043c\u0438\u043b\u0435\u0432\u043d\u0430",
            "city": "\u041a\u0430\u0437\u0430\u043d\u044c",
            "slug": "bulatova-dilya-ramilevna",
            "speciality": "\u041d\u0435\u0432\u0440\u043e\u043b\u043e\u0433",
            "doctor_url": "/bulatova-dilya-ramilevna/",
            "local_file": null,
            "avatar_url": "https://storage.yandexcloud.net/medblogers-photos/images/user_bulatova-dilya-ramilevna_/app/docstar_site/docstar/user_photos/user_photos/photo_2024-09-21_00.24.30.jpeg"
        }
    ],
    "cities": [
        {
            "id": 1,
            "name": "\u0410\u043b\u044c\u043c\u0435\u0442\u044c\u0435\u0432\u0441\u043a",
            "doctors_count": 3
        },
        {
            "id": 12,
            "name": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
            "doctors_count": 4
        },
        {
            "id": 108,
            "name": "\u0414\u0438\u043c\u0438\u0442\u0440\u043e\u0432\u0433\u0440\u0430\u0434",
            "doctors_count": 1
        },
        {
            "id": 28,
            "name": "\u041b\u0435\u0439\u043f\u0446\u0438\u0433 (\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f)",
            "doctors_count": 1
        },
        {
            "id": 30,
            "name": "\u041c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430",
            "doctors_count": 3
        }
    ],
    "specialities": [
        {
            "id": 3,
            "name": "\u0410\u043b\u043b\u0435\u0440\u0433\u043e\u043b\u043e\u0433-\u0438\u043c\u043c\u0443\u043d\u043e\u043b\u043e\u0433",
            "doctors_count": 6
        },
        {
            "id": 5,
            "name": "\u0410\u043d\u0435\u0441\u0442\u0435\u0437\u0438\u043e\u043b\u043e\u0433-\u0440\u0435\u0430\u043d\u0438\u043c\u0430\u0442\u043e\u043b\u043e\u0433",
            "doctors_count": 2
        },
        {
            "id": 119,
            "name": "\u0411\u0440\u0435\u043d\u0434\u043c\u0435\u0439\u043a\u0435\u0440 \u0432\u0440\u0430\u0447\u0435\u0439",
            "doctors_count": 1
        },
        {
            "id": 7,
            "name": "\u0412\u0440\u0430\u0447 \u0421\u041c\u041f",
            "doctors_count": 2
        },
        {
            "id": 135,
            "name": "\u0413\u0435\u043c\u043e\u0441\u0442\u0430\u0437\u0438\u043e\u043b\u043e\u0433",
            "doctors_count": 1
        }
    ]
}

class SearchDoctorsService{

    controller: null | AbortController = null; 

    async get(query: string): Promise<ISearchDoctors>{

        if(this.controller){
            this.controller.abort()
        }

        this.controller = new AbortController()

        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/search-doctor/' + `?query=${query}`, {
            cache: 'no-cache',
            signal: this.controller?.signal
        })

        return RES
    }


}

export const searchDoctorsService = new SearchDoctorsService()