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

    const priceListForDesctop: IFreelancer['priceList'] = priceList.length % 2 === 0 ? priceList : [...priceList, {name: '', amount: ''}];

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <Image src={priceListImg.src} alt="Ценовая категория" height={35} width={88} />
                <h2>Прайс-лист</h2>
            </section>
            <section className={classes.content}>
                <section className={classes.desctop}>
                    <PriceList priceList={priceListForDesctop.slice(0, priceListForDesctop.length / 2)} />
                    <section className={classes.border}></section>
                    <PriceList priceList={priceListForDesctop.slice(priceListForDesctop.length / 2)} />
                </section>
                <section className={classes.mobile}>
                    <PriceList priceList={priceList} />
                </section>
            </section>
        </section>
    )
}