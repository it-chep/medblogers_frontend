import { FC } from "react";
import classes from './homeTitle.module.scss'
import { usePathname } from "next/navigation";


export const HomeTitle: FC = () => {

    const pathname = usePathname()

    const isFreelancer = pathname === '/helpers'

    return (
        <section className={classes.container + (isFreelancer ? ` ${classes.freelancer}` : '')}>
            <h1 className={classes.title}>
                {
                    isFreelancer
                        ?
                    "БАЗА ПОМОЩНИКОВ ДЛЯ ВРАЧЕЙ-БЛОГЕРОВ"
                        :
                    "ЕДИНАЯ БАЗА ВРАЧЕЙ-БЛОГЕРОВ"
                }
            </h1>
            <section className={classes.desc}>
                {
                    isFreelancer
                        ?
                    <>
                        Поиск SMM, дизайнеров, маркетологов и других <br/> помощников для ведения медицинского блога
                    </>
                        :
                    <>
                        Поиск коллег для реклам и коллабораций <br /> по соцсетям, специальностям и городам
                    </>
                }
                
            </section>
            <section className={classes.blurWrap}>
                <section className={classes.blur} />
            </section>
        </section>
    )
}