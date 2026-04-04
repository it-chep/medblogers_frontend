import { FC } from "react";
import classes from './offer.module.scss'
import { IOfferItemByBrand } from "../../model/types";
import { SocialNetwork } from "@/src/shared/ui/socialNetwork";
import Link from "next/link";
import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import { getColorByCoopId } from "@/src/shared/lib/helpers/getColorByCoop";

interface IProps {
    offer: IOfferItemByBrand;
}

export const OfferItemByBrand: FC<IProps> = ({offer}) => {

    const coopColor = getColorByCoopId(String(offer.cooperationType.id))

    return (
        <Link 
            href={`/promotional_offers/${offer.id}`}
            className={classes.container}
        >
            <section className={classes.description}>
                {offer.description}
            </section>
            <section className={classes.socials}>
                <span>Работа в соц сетях:</span>
                <SocialNetwork socialNetwork={offer.socialNetworks} miniature />
            </section>
            <section className={classes.footer}>
                <section className={classes.left}>
                    <OfferBadge 
                        value={offer.cooperationType.name}
                        bgColor={coopColor.bgColor}
                        fontColor={coopColor.fontColor}
                    />
                    <OfferBadge 
                        value={offer.price}
                    />
                </section>
                <section className={classes.date}>
                    <OfferBadge 
                        value={offer.publicationDate}
                        border
                        fontColor="rgba(255, 255, 255, .3)"
                        bgColor="var(--light-black)"
                    />
                </section>
            </section>
        </Link>
    )
}