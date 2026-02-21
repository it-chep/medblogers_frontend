import { FC } from "react";
import classes from './authorCard.module.scss'
import Link from "next/link";

interface IProps {
    name: string;
    slug: string;
    image: string;
    specialityName: string;
    description: string;
}

export const AuthorCard: FC<IProps> = ({name, slug, image, specialityName, description}) => {
    return (
        <Link href={'/doctors/' + slug} className={classes.container}>
            <img className={classes.image} src={image} height={120} width={120} alt={'Фото ' + name} />
            <section className={classes.inf}>
                <section className={classes.name}>
                    {name}
                </section>
                <section className={classes.specialityName}>
                    {specialityName}
                </section>
                <p className={classes.description}>
                    {description}
                </p>
            </section>
        </Link>
    )
}
