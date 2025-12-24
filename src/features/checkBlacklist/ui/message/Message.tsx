import { FC } from "react";
import classes from './message.module.scss'

interface IProps {
    onClose: () => void;
    status: 'normal' | 'true' | 'false'; 
}

export const Message: FC<IProps> = ({onClose, status}) => {


    return (
        <section className={classes.message}>
            <svg className={classes.close} onClick={onClose} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13Z" fill="#D9D9D9"/>
                <path d="M1 1L13 13Z" fill="#D9D9D9"/>
                <path d="M13 1L1 13M1 1L13 13" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <section className={classes.icon}>
                {
                    status === 'false'
                        ?
                    '👍'
                        :
                    '👎'
                }
            </section>
            <section className={classes.messageTitle}>
                {
                    status === 'false'
                        ?
                    'Нет накруток'
                        :
                    'Вероятно, есть накрутки'
                }
            </section>
            <section className={classes.messageSign}>
                {
                    status === 'false'
                        ?
                    'Вероятно, есть накрутки'
                        :
                    'мы не рекомендуем этот канал '
                }
            </section>
        </section>
    )
}