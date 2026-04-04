import { FC, PropsWithChildren } from "react";
import classes from './card.module.scss'
import { IPromoOfferData } from "../../model/types";
import { getColorByCoopId } from "../../../../shared/lib/helpers/getColorByCoop";
import { OfferBadge } from "../../../../shared/ui/badgeOffer";
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";
import { TgLogoSvg } from "../../lib/assets/TgLogoSvg";
import { SocialNetwork } from "@/src/shared/ui/socialNetwork";
import MarkdownIt from "markdown-it";

interface IProps {
    slug: string;
    offer: IPromoOfferData;
}

export const PromoOfferCard: FC<IProps> = ({offer, slug}) => {

    const coopTypeColor = getColorByCoopId(offer.cooperationType.id)
    
    const render = () => {
        const mk = MarkdownIt()
        return mk.render(offer.description)
    } 

    return (
        <section className={classes.container}>
            <section className={classes.descBox}>
                <section className={classes.sign}>
                    Описание
                </section>
                <section 
                    dangerouslySetInnerHTML={{__html: render()}} 
                    className={classes.desc}
                />
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
                        value={offer.price}
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
            <a 
                target="_blank"
                className={classes.button}
                href={`https://t.me/readydog?text=Меня%20заинтересовало%20предложение%20бренда%20на%20вашей%20площадке:%20https://medblogers-base.ru/promotional_offers/${slug}%0A%0AКак%20я%20могу%20на%20него%20откликнуться%20%3F`}
            >
                <MyButton
                    style={{borderRadius: '18px'}}
                >
                    <section className={classes.buttonContent}>
                        <TgLogoSvg />
                        Откликнуться
                    </section>
                </MyButton>
            </a>
        </section>
    )
}