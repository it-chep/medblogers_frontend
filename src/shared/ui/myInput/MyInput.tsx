"use client"

import { FC, useRef } from "react";
import classes from './myInput.module.scss'

interface IProps{
    value: string;
    typeInput?: string;
    onBlur?: () => void;
    setValue: (value: string) => void;
    isLoading?: boolean;
    error?: string;
    sign?: string;
}

export const MyInput: FC<IProps> = ({value, setValue, typeInput, onBlur = () => {}, sign}) => {

    const refBox = useRef<HTMLDivElement>(null)

    const onBlurInput = () => {
        onBlur()
        if(refBox.current){
            refBox.current.classList.remove(classes.hightlight)
        }
    }

    const onFocus = () => {
        if(refBox.current){
            refBox.current.classList.add(classes.hightlight)
        }
    }

    return (
        <section ref={refBox} className={classes.inputBox}>
            <div className={classes.sign}>{sign}&nbsp;</div>
            <input 
                onFocus={onFocus}
                onBlur={onBlurInput}
                type={typeInput || 'text'} 
                value={value} 
                onChange={e => setValue(e.target.value)}
            />
        </section>
    )
}