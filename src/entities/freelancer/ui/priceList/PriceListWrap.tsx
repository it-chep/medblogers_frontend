import { FC } from "react";
import { IFreelancer } from "../../model/types";
import classes from './priceList.module.scss'
import { PriceList } from "./PriceList";
import { PriceBadge } from "../priceBadge/PriceBadge";

interface IProps {
    priceList: IFreelancer['priceList'];
    priceCategory: string;
}


export const PriceListWrap: FC<IProps> = ({priceList, priceCategory}) => {

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <h3>Прайс-лист</h3> 
                <section className={classes.price}>
                    <PriceBadge priceCategory={+priceCategory} />
                </section>
            </section>
            <section className={classes.content}>
                <PriceList priceList={priceList} />
            </section>
        </section>
    )
}