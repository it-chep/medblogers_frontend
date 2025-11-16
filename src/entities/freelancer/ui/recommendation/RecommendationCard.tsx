import {FC} from "react";
import classes from './recommendation.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import { IRecommendation } from "../../model/types";
import markImg from '@/src/shared/lib/assets/mark_blue.png';

interface IProps {
    recommendation: IRecommendation;
    isMobile?: boolean;
}

export const RecommendationCard: FC<IProps> = ({recommendation, isMobile}) => {

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
                                <MyButton 
                                    style={
                                        isMobile 
                                            ? 
                                        {
                                            padding: window.innerWidth / 100 * 2,
                                            borderRadius: window.innerWidth / 100 * 1.2,
                                        } 
                                            : 
                                        {}
                                    }
                                >
                                    <section className={classes.textButton}>Подробнее</section>
                                </MyButton>
                            </Link>
                        </noindex>
                    </section>
            </section>
        </section>
    )
}