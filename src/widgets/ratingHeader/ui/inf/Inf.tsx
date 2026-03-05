"use client"

import { MyModalBody } from "@/src/shared/ui/myModalBody";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import classes from './inf.module.scss'
import infImg from '../../lib/assets/info.png'

export const Inf: FC = () => {

    const [open, setOpen] = useState<boolean>(false)
    const openRef = useRef<boolean>(false)
        
    useEffect(() => {
        openRef.current = open;
    }, [open])

    const handleResize = () => {
        if(openRef.current){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = ''
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className={classes.container}>
            <section onClick={() => setOpen(true)} className={classes.question}>
                Что это?
                <Image src={infImg} alt="" width={20} height={20} />
            </section>
            <MyModalBody open={open} setOpen={setOpen}>
                <section className={classes.content}>
                    <section className={classes.wrapper}>
                        <p className={classes.questionContent}>Что это?</p>
                        <p>
                            Рейтинг врачей MEDBLOGERS - это ежегодная турнирная таблица активных резидентов нашего клуба врачей-блогеров.
                        </p>
                        <p>
                            Каждый месяц докторам доступны активности, за которые мы начисляем MBC (MedBlogers Coin) - это внутренняя валюта, которую можно обменивать на скидку на членство в клубе. Полный список всех активностей находится в <a target="_blank" href="https://t.me/c/1600505428/69">главном чате клуба</a>.
                        </p>
                        <p>
                            Мы обновляем рейтинг 1 раз в месяц, а в конце года самые продуктивные участники клуба получат призы 🤩
                        </p>
                        <svg onClick={() => setOpen(false)} className={classes.close} width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 7L7 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 25L7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </section>
                </section>
            </MyModalBody>
        </section>
    )
}