"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './info.module.scss'
import infImg from '../../lib/assets/info.png'
import Image from "next/image";
import { MyModalBody } from "@/src/shared/ui/myModalBody";

export const Info: FC = () => {

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
                Как это работает?
                <Image src={infImg} alt="" width={20} height={20} />
            </section>
            <MyModalBody open={open} setOpen={setOpen}>
                <section className={classes.content}>
                    <p className={classes.questionContent}>Как это работает?</p>
                    <p>
                        Во-первых, «шараут Жуков Никита!» (с) 
                    </p>
                    <p>
                        Во-вторых, мы составили этот список по двум критериям: накрутки и хейтеры.
                    </p>
                    <p>
                        <b>1) Накрутки<br /></b>
                        За последние несколько лет набрали популярность подборки каналов в виде папок. Мы убеждены, что когда в них участвуют 20+ каналов — это «мусорные» подборки, которые резко увеличивают количество подписчиков, но они потом даже не заходят в канал. От этого охват постов канала становится меньше 10%. А когда 90% подписчиков — не активные, мы не рекомендуем обращаться к ним по рекламе и сотрудничеству.
                    </p>
                    <p>
                        <b>2) Хейтеры<br /></b>
                        Это каналы, которые плохо относятся к самому феномену медицинского блогинга в целом или к проекту MEDBLOGERS в частности. Мы с ними не дружим и вам не советуем 😉
                    </p>
                    <p>
                        P.S. список обновляется каждый день в ручном режиме. По всем вопросам обращайтесь в отдел заботы.
                    </p>
                    <svg onClick={() => setOpen(false)} className={classes.close} width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 7L7 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25 25L7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </section>
            </MyModalBody>
        </section>
    )
}