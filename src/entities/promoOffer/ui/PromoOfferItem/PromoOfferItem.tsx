import { FC, PropsWithChildren } from "react";
import classes from './promoOfferItem.module.scss'
import { IPromoOfferItem } from "../../model/types";
import { getColorByCoopId } from "../../../../shared/lib/helpers/getColorByCoop";
import Link from "next/link";
import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import { SocialNetwork } from "@/src/shared/ui/socialNetwork";

interface IProps {
    promoOffer: IPromoOfferItem;
}

export const PromoOfferItem: FC<IProps & PropsWithChildren> = ({promoOffer, children}) => {

    const coopTypeColor = getColorByCoopId(promoOffer.cooperationType.id)

    return (
        <Link 
            className={classes.container}
            href={`/promotional_offers/${promoOffer.id}`}
        >
            <section className={classes.top}>
                <img className={classes.photo} src={promoOffer.photo} alt="Аватарка бренда" />
                <section className={classes.brandData}>
                    <section className={classes.titleBox}>
                        <section className={classes.title}>
                            {promoOffer.title}
                        </section>
                        <section 
                            className={classes.coopType}
                            style={{
                                backgroundColor: coopTypeColor.bgColor,
                                color: coopTypeColor.fontColor,
                            }}
                        >
                            {promoOffer.cooperationType.name}
                        </section>
                    </section>
                    <section className={classes.brandDescription}>
                        {promoOffer.brandDescription}
                    </section>
                </section>
            </section>
            <section className={classes.desc}>
                {promoOffer.description}
            </section>
            <section className={classes.socialNetworks}>
                Работа в соц сетях: <SocialNetwork socialNetwork={promoOffer.socialNetworks} miniature />
            </section>
            <section className={classes.footer}>
                <OfferBadge
                    value={promoOffer.businessCategory.name}
                />
                <OfferBadge 
                    value={promoOffer.createdAt}
                    border
                    bgColor="var(--light-black)"
                    fontColor="rgba(255, 255, 255, .3)"
                />
            </section>
        </Link>
    )
}