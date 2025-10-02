import { FC } from "react";
import { IFreelancer } from "../../model/types";
import classes from './priceList.module.scss'
import { PriceList } from "./PriceList";

interface IProps {
    priceList: IFreelancer['priceList'];
    priceCategory: string;
}


export const PriceListWrap: FC<IProps> = ({priceList, priceCategory}) => {

    const priceListForDesctop: IFreelancer['priceList'] = priceList.length % 2 === 0 ? priceList : [...priceList, {name: '', amount: ''}];

    const price = '₽₽₽₽'

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <section className={classes.price}>
                    {price.split('').map((p, ind) => 
                        <span 
                            key={ind} 
                            className={((ind < (+priceCategory)) ? `${classes.highlight}` : '')}
                        >
                            {p}
                        </span>
                    )}
                </section>
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