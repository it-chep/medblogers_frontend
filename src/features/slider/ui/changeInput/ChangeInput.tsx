import { FC, useEffect, useState } from "react";
import classes from './changeInput.module.scss'
import { MyInput } from "@/src/shared/ui/myInput";



interface IProps {
    max: number;
    min: number;
    valueMax: number;
    valueMin: number;
    onBlur: (valMin: number, valMax: number) => void;
}


export const ChangeInput: FC<IProps> = ({
    max, min, valueMax, valueMin, onBlur
}) => {

    const [targetMin, setTargetMin] = useState<number>(valueMin)
    const [targetMax, setTargetMax] = useState<number>(valueMax)

    useEffect(() => {
        setTargetMax(valueMax)
        setTargetMin(valueMin)
    }, [valueMax, valueMin])

    const check = (numb: number) => {
        if(numb > max){
            numb = max;
        }
        if(numb < min){
            numb = min;
        }
        return numb;
    }
    
    const onTargetBlur = () => {
        const checkMin = check(targetMin) > valueMax ? valueMax : check(targetMin) 
        const checkMax = check(targetMax) < valueMin ? valueMin : check(targetMax)
        onBlur(checkMin, checkMax)
    }

    return (
        <section className={classes.inputs}>
            <MyInput
                onBlur={onTargetBlur}
                typeInput="number"
                value={`${targetMin}`}
                setValue={val => setTargetMin(+val)}
            />
            <section className={classes.dash} />
            <MyInput 
                typeInput="number"
                value={`${targetMax}`}
                setValue={val => setTargetMax(+val)}
                onBlur={onTargetBlur}
            />
        </section>
    )
}