import { IPriceListItem } from "@/src/entities/freelancer";
import { FC } from "react";
import classes from './priceListChange.module.scss'
import { MyInputForm } from "@/src/shared/ui/inputForm";
import plusImg from '../../lib/assets/plus.png'
import deleteImg from '../../lib/assets/delete.png'
import { Hint } from "@/src/shared/ui/hint";


interface IProps {
    list: IPriceListItem[];
    setList: (list: IPriceListItem[]) => void;
    error?: string;
    setError?: (err: string) => void;
}

export const PriceListChange: FC<IProps> = ({list, setList, error, setError}) => {


    const addItem = () => {
        const target: IPriceListItem[] = [...list]
        target.push({name: '', amount: 0})
        setList(target)
        setError && setError('')
    }

    const setName = (ind: number) => {
        return (val: string) => {
            const target: IPriceListItem[] = JSON.parse(JSON.stringify(list));
            target[ind].name = val;
            setList(target)
            setError && setError('')
        }
    }

    const setAmount = (ind: number) => {
        return (val: string) => {
            const target: IPriceListItem[] = JSON.parse(JSON.stringify(list));
            if(val === '') {
                target[ind].amount = 0;
                setList(target)
            }
            else {
                const parse = parseInt(val)
                if(parse){
                    target[ind].amount = parse;
                    setList(target)
                }
            }
            setError && setError('')
        }
    }

    const deleteItem = (ind: number) => {
        const target: IPriceListItem[] = [...list]
        target.splice(ind, 1)
        setList(target)
        setError && setError('')
    }

    return (
        <section className={classes.container}>
            <section className={classes.title}>
                Ваш прайс-лист
            </section>
            {
                list.length > 0
                    &&
                <ul className={classes.list}>
                    <li className={classes.title}>
                        <section className={classes.name}>
                            <span className={classes.text}>Название услуги</span>
                        </section>
                        <section className={classes.amount}>
                            <span className={classes.text}>Цена ОТ или по договоренности</span>
                            <section className={classes.hint}>
                                <Hint hint="Оставьте 0 если работаете по договоренности" />
                            </section>
                        </section>
                    </li>
                    {list.map((l, ind) => 
                        <li 
                            key={ind}
                            className={classes.item}
                        >
                            <section className={classes.name}>
                                <MyInputForm value={l.name} setValue={setName(ind)} />
                            </section>
                            <section className={classes.amount}>
                                <MyInputForm value={String(l.amount)} setValue={setAmount(ind)} />
                            </section>
                            <section 
                                className={`${classes.button} ${classes.delete}`}
                                onClick={() => deleteItem(ind)}
                            >
                                <img alt="Удалить" src={deleteImg.src} />
                            </section>
                        </li>
                    )}
                </ul>
            }
            <section 
                className={`${classes.button} ${classes.add}`}
                onClick={addItem}
            >
                <img alt="Добавить" src={plusImg.src} />
            </section>
            { (error) && <span className={classes.errorText}>*{error}</span> }
        </section>
    )
}