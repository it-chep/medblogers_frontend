import { FC } from "react";
import classes from './cardData.module.scss'
import { IDoctor } from "../../model/types";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { SpecialityBadge } from "../specialityBadges/SpecialityBadge";
import Image from "next/image";
import markImg from '@/src/shared/lib/assets/mark_blue.png'
import { ClinicHint } from "../clinicHint/ClinicHint";

interface IProps {
    doctor: IDoctor;
}

export const CardData: FC<IProps> = ({doctor}) => {

    const fio = doctor.name.split(' ')

    return (
        <section className={classes.container}>
            <section className={classes.main}>
                <h1 className={classes.name}>
                    {
                        doctor.isKfDoctor
                            ?
                        <>
                            {fio.slice(0, 2).join(' ')}&nbsp;
                            <ClinicHint name={fio[2]} sizeIcon={20} gap={8} />
                        </>
                            :
                        <>
                            {doctor.name}
                        </>
                    }
                </h1>
                <span className={classes.city}>
                    <Image alt="Метка" width={11} height={13} src={markImg.src} /> 
                    Город: {doctor.mainCity.name}{doctor.cities.length >= 0 && doctor.cities.map(city => `, ${city.name}`)}
                </span>
                <section className={classes.specialities}>
                    <SpecialityBadge id={doctor.mainSpeciality.id} text={doctor.mainSpeciality.name} main={true} />
                    {doctor.specialities.map((speciality, ind) => 
                        <SpecialityBadge key={ind} id={speciality.id} text={speciality.name} />
                    )}
                </section>
            </section>

            <section className={classes.blogTheme}>
                <span className={classes.sign}>Тематика блога:</span> {doctor.mainBlogTheme}
            </section>

            <Link className={classes.link} href={doctor.tgUrl}>
                <MyButton>
                    Написать в TG
                </MyButton>
            </Link>
        </section>
    )
}