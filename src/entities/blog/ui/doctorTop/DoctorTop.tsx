import { FC } from "react";
import classes from './doctorTop.module.scss'
import { IBlogDoctor } from "../../model/types";
import Link from "next/link";

interface IProps {
    doctorBlog: IBlogDoctor;
}

export const DoctorTop: FC<IProps> = ({doctorBlog}) => {


    return (
        <Link
            href={'/doctors/' + doctorBlog.slug}
            className={classes.container}
        >
            <section className={classes.imageBox}>
                <img className={classes.image} src={doctorBlog.image} alt="Фото врача" />
            </section>
            <section className={classes.inf}>
                <section className={classes.sign}> 
                    Автор статьи: 
                </section>
                <section className={classes.name}>
                    {doctorBlog.name}
                </section>
                <section className={classes.specialityName}>
                    {doctorBlog.specialityName}
                </section>
            </section>
        </Link>
    )
}