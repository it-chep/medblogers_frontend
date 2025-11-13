import {FC} from "react";
import classes from './recommendation.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import { IFreelancerMiniature, IRecommendation } from "../../model/types";
import markImg from '@/src/shared/lib/assets/mark_blue.png';
import commandImg from '@/src/shared/lib/assets/command_blue_bg.png';
import withDoctorsImg from '@/src/shared/lib/assets/with_doctors_bg.png';
import { SocialNetwork } from "../socialNetwork/SocialNetwork";
import { Hint } from "@/src/shared/ui/hint";
import { PriceBadge } from "../priceBadge/PriceBadge";

interface IProps {
    recommendation: IRecommendation;
}

export const RecommendationCard: FC<IProps> = ({recommendation}) => {

    const doctorLink = `/doctors/${recommendation.slug}`

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <noindex>
                    <Link 
                        rel="nofollow" 
                        href={doctorLink}
                        className={classes.image}
                    >
                        <Image className={classes.avatar} src={recommendation.image} alt={'Аватарка доктора'} width={260} height={160} />
                    </Link>
                </noindex>
                <section className={classes.name}>
                    <Link href={doctorLink}>
                        {recommendation.name}
                    </Link>
                </section>
            </section>
            <section className={classes.infoWrapper}>
                <section className={classes.info}>
                    <p className={classes.speciality}>
                        {recommendation.speciality}
                    </p>
                    <section className={classes.city}> 
                        <Image alt="Метка" width={15} height={17} src={markImg.src} />
                        <span className={classes.text}>{recommendation.city}</span>
                    </section>
                </section>
                    <section className={classes.buttonsWrapper}>
                        <noindex className={classes.link}>
                            <Link rel="nofollow" href={doctorLink} >
                                <MyButton>Подробнее</MyButton>
                            </Link>
                        </noindex>
                    </section>
            </section>
        </section>
    )
}