import {FC} from "react";
import classes from './freelancerMiniature.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import { IFreelancerMiniature } from "../../model/types";
import commandImg from '@/src/shared/lib/assets/command_blue_bg.png';
import { PriceBadge } from "../priceBadge/PriceBadge";
import { HintWrap } from "../hintWrap/HintWrap";

interface IProps {
    freelancer: IFreelancerMiniature;
    setCitiesSearch: React.ReactElement;
    setSpecialitiesSearch: React.ReactElement;
}

export const FreelancerMiniature: FC<IProps> = ({freelancer, setCitiesSearch, setSpecialitiesSearch}) => {

    const freelancerLink = `helpers/${freelancer.slug}`

    return (
        <Link 
            href={freelancerLink}
            className={classes.container}
        >
            <section className={classes.header}>
                <section className={classes.image}>
                    <section className={classes.icons}>
                        <HintWrap width={172} hint="Ценовая категория">
                            <PriceBadge priceCategory={+freelancer.priceCategory} />
                        </HintWrap>
                        { 
                            freelancer.agencyRepresentative
                                &&
                            <HintWrap width={216} hint="Представитель агентства">
                                <Image 
                                    alt="Представитель агентства" 
                                    height={32} 
                                    width={36} 
                                    src={commandImg.src}  
                                />
                            </HintWrap>
                        }
                    </section>
                    <Image 
                        className={classes.avatar} 
                        src={freelancer.image} 
                        alt={'Аватарка фрилансера'}
                        width={260} 
                        height={160} 
                    />
                </section>
                <section className={classes.name}>
                    {freelancer.name}
                </section>
            </section>
            <section className={classes.infoWrapper}>
                <section className={classes.info}>
                    {setSpecialitiesSearch}
                    {setCitiesSearch}
                </section>
                <section className={classes.buttonsWrapper}>
                    <MyButton>Подробнее</MyButton>
                </section>
            </section>
        </Link>
    )
}