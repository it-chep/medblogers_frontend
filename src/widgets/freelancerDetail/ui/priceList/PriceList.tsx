
import { FC } from "react";
import classes from './priceList.module.scss'
import { IFreelancer, PriceListWrap } from "@/src/entities/freelancer";
import { OpenContainer } from "@/src/features/openContainer";

interface IProps {
    priceList: IFreelancer['priceList'];
    priceCategory: string;
}

export const PriceList: FC<IProps> = ({priceList, priceCategory}) => {

    const use = priceList.length > 8;

    const additionalPercentage = 0.2;
    const speed = (priceList.length + (priceList.length * additionalPercentage)) / 30;

    return (
        <section className={classes.container}>
        {
            use
                ?
            <>
                <section className={classes.desctop}>
                    <OpenContainer 
                        heightConst={300} 
                        darkenHeightConst={120} 
                        speedSec={speed}
                    >
                        <PriceListWrap 
                            priceCategory={priceCategory} 
                            priceList={priceList} 
                        />
                    </OpenContainer>
                </section>
                <section className={classes.mobile}>
                    <OpenContainer 
                        heightConst={600} 
                        darkenHeightConst={260} 
                        speedSec={speed}
                    >
                        <PriceListWrap 
                            priceCategory={priceCategory} 
                            priceList={priceList}
                        />
                    </OpenContainer>
                </section>
            </>
                :
            <PriceListWrap 
                priceCategory={priceCategory} 
                priceList={priceList} 
            />
        }
        </section>
    )
}