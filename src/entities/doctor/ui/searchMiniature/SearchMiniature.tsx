import { FC } from "react";
import classes from './searchMiniature.module.scss'
import Link from "next/link";
import Image from "next/image";
import { ISearchDoctor } from "../../model/types";
import { ClinicHint } from "../../../../features/clinicHint/ui/ClinicHint";

interface IProps {
    doctor: ISearchDoctor;
}

export const SearchMiniature: FC<IProps> = ({doctor}) => {

    const fio = doctor.name.split(' ')

    return (
        <Link 
            href={`/doctors/${doctor.slug}`} 
            className={classes.container}
        >
            { 
                doctor.image 
                    && 
                <Image 
                    className={classes.avatar} 
                    width={100} 
                    height={100} 
                    src={doctor.image} 
                    alt="Фото врача" 
                /> 
            }
            <section className={classes.data}>
                <section className={classes.name}> 
                    {
                        doctor.isKfDoctor
                            ?
                        <>
                            {fio.slice(0, 2).join(' ')}&nbsp;
                            <ClinicHint name={fio[2]} paddingAbsolute={30} />
                        </>
                            :
                        <>
                            {doctor.name}
                        </>
                    }
                </section>
                <p className={classes.specialityName}>{doctor.specialityName}, г. {doctor.cityName}</p>
            </section>
        </Link>
    )
}