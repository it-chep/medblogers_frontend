import { FC, PropsWithChildren } from "react";
import classes from './card.module.scss'
import { IPromoOfferData } from "../../model/types";
import { getColorByCoopId } from "../../../../shared/lib/helpers/getColorByCoop";
import { OfferBadge } from "../../../../shared/ui/badgeOffer";
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";
import { TgLogoSvg } from "../../lib/assets/TgLogoSvg";
import { SocialNetwork } from "@/src/shared/ui/socialNetwork";

interface IProps {
    offer: IPromoOfferData;
}

export const PromoOfferCard: FC<IProps & PropsWithChildren> = ({offer, children}) => {

    const coopTypeColor = getColorByCoopId(offer.cooperationType.id)
    
    return (
        <section className={classes.container}>
            <section className={classes.descBox}>
                <section className={classes.sign}>
                    Описание
                </section>
                <section className={classes.desc}>
                    {offer.description}
                </section>
            </section>
            <section className={classes.conditionsBox}>
                <section className={classes.sign}>
                    Условия
                </section>
                <section className={classes.conditions}>
                    <OfferBadge 
                        value={offer.cooperationType.name}
                        bgColor={coopTypeColor.bgColor}
                        fontColor={coopTypeColor.fontColor}
                    />
                    <OfferBadge 
                        value={'от ' + offer.price + ' ₽'}
                    />
                </section>
            </section>
            <section className={classes.socialBox}>
                <section className={classes.sign}>
                    Работа в соц. сетях
                </section>
                <section className={classes.social}>
                    <SocialNetwork socialNetwork={offer.socialNetworks} width={32} />
                </section>
            </section>
            <section className={classes.date}>
                Дата создания оффера: {offer.createdAt}
            </section>
            <Link 
                className={classes.button}
                href={''}
            >
                <MyButton
                    style={{borderRadius: '18px'}}
                >
                    <section className={classes.buttonContent}>
                        <TgLogoSvg />
                        Откликнуться
                    </section>
                </MyButton>
            </Link>
        </section>
    )
}