import { FC } from "react";
import { IFreelancer } from "../../model/types";
import classes from './priceList.module.scss'

interface IProps {
    priceList: IFreelancer['priceList'];
}

export const PriceList: FC<IProps> = ({priceList}) => {


    return (
        <ul className={classes.list}>
            <li className={classes.top}>
                <section className={classes.badge}>
                    Услуга
                </section>
                <section className={classes.badge}>
                    Стоимость           
                </section>
            </li>
            {priceList.map((priceItem, ind) => 
                <li 
                    key={ind}
                    className={classes.item}
                >
                    <section className={classes.name}>
                        {priceItem.name}
                    </section>
                    <section className={classes.amount}>
                        {priceItem.amount === "0" ? 'по договоренности' : `От ${priceItem.amount} рублей`}
                    </section>
                </li>
            )}
        </ul>
    )
}