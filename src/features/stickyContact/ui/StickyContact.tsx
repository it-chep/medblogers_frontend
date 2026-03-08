import { FC } from "react";
import classes from './stickyContact.module.scss'
import { MyButton } from "@/src/shared/ui/myButton";

interface IProps {
    name: string;
    mainSpecialty: string;
    tg: string;
    vip?: boolean;
}

export const StickyContact: FC<IProps> = ({name, mainSpecialty, tg, vip}) => {

    return (
        <section className={classes.container}>
            <section className={classes.name}>
                {name}
            </section>
            <section className={classes.specialties}>
                {mainSpecialty}
            </section>
            <section className={classes.button}>
                <a 
                    href={tg}
                    target="_blank"
                    className={classes.link}
                >
                    <MyButton
                        turquoise={vip}
                    >
                        Написать в Telegram
                    </MyButton>
                </a>
            </section>
        </section>
    )
}