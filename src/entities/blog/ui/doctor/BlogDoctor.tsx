import { FC } from "react";
import classes from './blogDoctor.module.scss'
import { IBlogDoctor } from "../../model/types";
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";


interface IProps {
    doctor: IBlogDoctor;
}

export const BlogDoctor: FC<IProps> = ({doctor}) => {


    return (
        <Link 
            href={'/doctors/' + doctor.slug}
            className={classes.container}
        >
            <section className={classes.data}>
                <img className={classes.image} src={doctor.image} height={100} width={100} alt="Фото врача" />
                <section className={classes.inf}>
                    <section className={classes.sign}> 
                        Автор статьи: 
                    </section>
                    <section className={classes.name}>
                        {doctor.name}
                    </section>
                    <section className={classes.specialityName}>
                        {doctor.specialityName}
                    </section>
                </section>
            </section>
            <section className={classes.button}>
                <MyButton>
                    Перейти в карточку
                </MyButton>
            </section>
            <section className={classes.buttonMobile}>
                <MyButton style={{backgroundColor: '#2A2A2A', border: '2px solid #2A2A2A'}}>
                    Перейти в карточку
                </MyButton>
            </section>
        </Link>
    )
}