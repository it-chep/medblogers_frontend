import { FC } from "react";
import classes from './title.module.scss'

interface IProps {
    isFreelancer: boolean;
}

export const Title: FC<IProps> = ({isFreelancer}) => {

    return (
        <>
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
        </>
    )
}