import { FC } from "react";
import { IFreelancer } from "../../model/types";
import classes from './priceList.module.scss'
import Image from "next/image";
import priceListImg from '../../lib/assets/priceList.png'
import { PriceList } from "./PriceList";

interface IProps {
    priceList: IFreelancer['priceList'];
}


export const PriceListWrap: FC<IProps> = ({priceList}) => {

    if(priceList.length % 2 !==0){
        priceList.push({name: '', amount: ''})
    }

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <Image src={priceListImg.src} alt="Ценовая категория" height={35} width={88} />
                <h2>Прайс-лист</h2>
            </section>
            <section className={classes.content}>
                <PriceList priceList={priceList.slice(0, priceList.length / 2)} />
                <section className={classes.border}></section>
                <PriceList priceList={priceList.slice(priceList.length / 2)} />
            </section>
        </section>
    )
}