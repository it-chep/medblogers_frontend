"use client"

import { ChangeEvent, ComponentProps, FC } from "react";
import classes from './myInput.module.scss'

interface IProps {
    value: string;
    setValue: (val: string) => void;
    label?: string;
    onChange?: (val: string) => void;
}

export const MyInput: FC<IProps & ComponentProps<'input'>> = ({value, setValue, label, onChange, ...props}) => {

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value)
    }

    

    return (
        <section className={classes.wrapper}>
            <span className={classes.label}>
                {label}
            </span>
            <input 
                {...props} 
                value={value} 
                onChange={e => onChangeInput(e)} 
            />
        </section>
    )
}