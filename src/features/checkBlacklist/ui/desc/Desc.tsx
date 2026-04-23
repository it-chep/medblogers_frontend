import { FC } from "react";
import classes from './desc.module.scss'
import { CheckSvg } from "../../lib/assets/CheckSvg";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

interface IProsp {
    count: number;
    isLoadingCount: boolean;
}

export const Desc: FC<IProsp> = ({count, isLoadingCount}) => {


    return (
        <section className={classes.container}>
            <section className={classes.item}>
                <section>
                    <CheckSvg color="white" />
                </section>
                <section className={classes.text}>
                    Проверь канал перед покупкой рекламы
                </section>
            </section>
            <section className={classes.item}>
                <section>
                    <CheckSvg color="var(--blue)" />
                </section>
                <span className={classes.count}>
                    На сегодняшний день в нём
                    {
                        isLoadingCount 
                            ? 
                        <span className={classes.loaderCount}>
                             <LoaderContainer blue />
                        </span> 
                            : 
                        <span className={classes.countNumb}> {count} </span>
                    } 
                    каналов
                </span>
            </section>
        </section>
    )
}