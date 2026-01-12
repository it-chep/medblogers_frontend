"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './chckBlacklist.module.scss'
import { MyInput } from "@/src/shared/ui/myInput";
import { MyButton } from "@/src/shared/ui/myButton";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { blacklistService } from "../api/BlacklistService";
import { Message } from "./message/Message";
import { Info } from "./info/Info";


export const CheckBlacklist: FC = () => {

    const [telegram, setTelegram] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<'normal' | 'true' | 'false'>('normal')

    const timerId = useRef<NodeJS.Timeout>(null)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const checkIsMobile = () => {
            if(window.innerWidth <= 480){
                setIsMobile(true)
            }
            else{
                setIsMobile(false)
            }
        }
        checkIsMobile()

        window.addEventListener('resize', checkIsMobile)

        return () => window.removeEventListener('resize', checkIsMobile)
    }, [])

    const onClose = () => {
        if(timerId.current){
            clearTimeout(timerId.current)
        }
        setStatus('normal')
        setTelegram('')
    }

    const closePlanned = () => {
        timerId.current = setTimeout(onClose, 5000)
    }
    
    const onCheck = async () => {
        try{
            setIsLoading(true)
            if(timerId.current){
                clearTimeout(timerId.current)
            }
            const is_in_blacklist = await blacklistService.check(telegram)
            if(is_in_blacklist){
                setStatus('true')
            }   
            else{
                setStatus('false')
            }
            closePlanned()
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <section 
            className={classes.container + (status === 'false' ? ` ${classes.false}` : status === 'true' ? ` ${classes.ok}` : '')}
        >
            <section className={classes.wrapper}>
                <section className={classes.title}>
                    РАССТРЕЛЬНЫЙ СПИСОК КАНАЛОВ
                </section>
                <section className={classes.wrapInput}>
                    <section className={classes.input}>
                        <MyInput 
                            value={telegram} 
                            setValue={setTelegram} 
                            styleBox={{
                                borderRadius: isMobile ? '8px' : '14px',
                            }}
                            style={{
                                fontSize: isMobile ? '14px' : '20px'
                            }}
                            placeholder="название канала или @username"
                        />
                    </section>
                    <section className={classes.button}>
                        <MyButton
                            style={{
                                borderRadius: isMobile ? '8px' : '14px',
                            }}
                            onClick={onCheck}
                        >
                            Проверить на накрутки
                        </MyButton>
                    </section>
                </section>
                <Info />
            </section>
            {
                isLoading
                    &&
                <section className={classes.isLoading}>
                    <LoaderSpinner />
                </section>
            }
            {
                (isLoading || (status !== 'normal'))
                    &&
                <section onClick={onClose} className={classes.glass} />
            }
            {
                (!isLoading && (status !== 'normal'))
                    &&
                <Message 
                    status={status}
                    onClose={onClose}
                />
            }
        </section>
    )
}