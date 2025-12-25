import { FC } from "react";
import classes from './title.module.scss'

interface IProps {
    isFreelancer: boolean;
}

export const SubTitle: FC<IProps> = ({isFreelancer}) => {

    return (
        <>
            {
                !isFreelancer
                    ?
                'Поиск коллег для реклам и коллабораций по соцсетям, специальностям и городам'
                    :
                'Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога'
            }
        </>
    )
}