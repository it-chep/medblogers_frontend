import { FC } from "react";
import classes from './brandCard.module.scss'
import { IBrandData } from "../../model/types";
import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import Link from "next/link";
import { Socials } from "../socials/Socials";

interface IProps {
    brand: IBrandData;
    byOffer?: boolean;
}

export const BrandCard: FC<IProps> = ({brand, byOffer}) => {


    return (
        <section className={classes.container + (byOffer ? ` ${classes.byOffer}` : '')}>
            <section className={classes.top}>
                <img className={classes.photo} src={brand.photo} alt="Аватарка бренда" />
                <section className={classes.titleBox}>
                    <section className={classes.title}>
                        {brand.title}
                    </section>
                    <section className={classes.description}>
                        {brand.description}
                    </section>
                </section>
            </section>
            <section className={classes.about}>
                {brand.about}
            </section>
            <section className={classes.socials}>
                <Socials 
                    socialNetwork={[{
                        id: 0,
                        name: 'Сайт компании',
                        slug: 'site',
                        link: brand.siteLink
                    }, ...brand.socialNetworks]} 
                />
            </section>
            <section className={classes.businessCategory}>
                <OfferBadge 
                    value={brand.businessCategory.name}
                />
            </section>
        </section>
    )
}