"use client"

import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './openFiltersModal.module.scss'
import { MyModal } from "@/src/shared/ui/myModal";
import { useSearchParams } from "next/navigation";



export const OpenFiltersModal: FC<PropsWithChildren> = ({children}) => {

    const searchParams = useSearchParams()
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    useEffect(() => {
        onClose()
    }, [searchParams])

    useEffect(() => {
        if(open){
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        }
        else{
            document.body.style.overflow = ''
            document.body.style.height = ''
        }

        return () => {
            document.body.style.overflow = ''
            document.body.style.height = ''
        }
    }, [open])

    return (
        <section className={classes.container}>
            <section onClick={onOpen} className={classes.button}>ddd</section>
            <MyModal open={open} setOpen={setOpen} transitionSec={.3}>
                <section className={classes.content}>
                    <section className={classes.top}>
                        <h3 className={classes.title}>Фильтры</h3>
                    </section>
                    {
                        open && children
                    }
                </section>
            </MyModal>
        </section>
    )
}