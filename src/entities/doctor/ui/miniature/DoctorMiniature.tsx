import {FC} from "react";
import {IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorMiniature.module.scss'


export const DoctorMiniature: FC<IDoctorMiniature> = ({
    name, avatar_url, city, doctor_url, inst_url, tg_channel_url, inst_subs_count_text, inst_subs_count, tg_subs_count_text, tg_subs_count, slug, speciality
}) => {


    return (
        <section>
            {name}
        </section>
    )
}