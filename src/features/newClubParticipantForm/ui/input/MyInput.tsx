"use client"

import { ChangeEvent, ComponentProps, FC, useEffect, useRef, useState } from "react";
import classes from './myInput.module.scss'

interface IProps {
    value: string;
    setValue: (val: string) => void;
    label?: string;
    onChange?: (val: string) => void;
    error?: string;
    setError?: () => void;
    required?: boolean;
}

export const MyInput: FC<IProps & ComponentProps<'input'>> = (
    {value, setValue, label, onChange, error, setError, required, ...props}
) => {
    
    const [currentError, setCurrentError] = useState<string>('')
    
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value)

        setCurrentError('')
        setError && setError()
    }

    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current){
            isOne.current = false;
            return
        }
        if(required && value.length === 0){
            setCurrentError('Поле не может быть пустым')
        }
    }, [value])

    return (
        <section className={classes.wrapper + (error ? ` ${classes.error}` : '')}>
            <span className={classes.label}>
                {label}
            </span>
            <input 
                {...props} 
                value={value} 
                onChange={e => onChangeInput(e)} 
            />
            { (error || currentError) && <span className={classes.errorText}>*{error || currentError}</span> }
        </section>
    )
}