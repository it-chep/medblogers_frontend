import { FC } from "react";
import classes from './title.module.scss'

interface IProps {
    pathname: string;
}

export const Title: FC<IProps> = ({pathname}) => {

    const isFreelancer = pathname.includes('work') || pathname.includes('freelancer')

    return (
        <section className={classes.mainTitle + (isFreelancer ? ` ${classes.freelancer}` : '')}>
            <h1>
                <span className={classes.singleBase}>
                    {
                        !isFreelancer
                            ?
                        'ЕДИНАЯ БАЗА '
                            :
                        'БАЗА ПОМОЩНИКОВ'
                    } 
                </span>
                <span className={classes.doctorsBlogers}>
                    {
                        !isFreelancer
                            ?
                        'ВРАЧЕЙ-БЛОГЕРОВ'
                            :
                        ' ДЛЯ ВРАЧЕЙ-БЛОГЕРОВ'
                    }
                </span>
            </h1>
            <h2 className={classes.desc}>  
                {
                    !isFreelancer
                        ?
                    'Поиск коллег для реклам и коллабораций по соцсетям, специальностям и городам'
                        :
                    'Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога'
                }
            </h2>   
        </section>
    )
}