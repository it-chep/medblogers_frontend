"use client"

import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import classes from './checkBlacklist.module.scss'
import { MyInput } from "@/src/shared/ui/myInput";
import { MyButton } from "@/src/shared/ui/myButton";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { blacklistService } from "../../api/BlacklistService";
import { Message } from "../message/Message";
import { Info } from "../info/Info";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

interface IProps {
    info?: boolean;
    titleH1?: boolean;
}

export const CheckBlacklist: FC<IProps> = ({info, titleH1}) => {

    const [telegram, setTelegram] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<'normal' | 'true' | 'false'>('normal')
    const [isLoadingCount, setIsLoadingCount] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0)

    const timerId = useRef<NodeJS.Timeout>(null)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const getCount = async () => {
        try{
            setIsLoadingCount(true)
            const count = await blacklistService.getCount()
            setCount(count)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoadingCount(false)
        }
    }

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
        getCount()

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

    const onEnter = (e: KeyboardEvent) => {
        if(e.key === 'Enter'){
            onCheck()
        }
    }

    return (
        <section 
            className={classes.container + (status === 'false' ? ` ${classes.false}` : status === 'true' ? ` ${classes.ok}` : '')}
        >
            <section className={classes.wrapper}>
                {
                    titleH1
                        ?
                    <h1 className={classes.title}>
                        РАССТРЕЛЬНЫЙ СПИСОК КАНАЛОВ
                    </h1>
                        :
                    <section className={classes.title}>
                        РАССТРЕЛЬНЫЙ СПИСОК КАНАЛОВ
                    </section>
                }
                <section className={classes.count}>
                    На сегодняшний день в нём 
                    {
                        isLoadingCount 
                            ? 
                        <section className={classes.loaderCount}>
                            <LoaderContainer blue />
                        </section> 
                            : 
                        <pre> {count} </pre>
                    } 
                    каналов
                </section>
                <section className={classes.wrapInput}>
                    <section onKeyDown={onEnter}
                        className={classes.input}
                    >
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
                {
                    info
                        &&
                    <Info />
                }
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