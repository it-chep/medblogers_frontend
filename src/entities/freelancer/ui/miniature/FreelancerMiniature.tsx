import {FC} from "react";
import classes from './freelancerMiniature.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import { IFreelancerMiniature } from "../../model/types";
import { PriceBadge } from "../priceBadge/PriceBadge";
import { BadgeMiniature } from "../badgeMiniature/BadgeMiniature";
import { CommandSvg } from "../../lib/assets/CommandSvg";
import { MedMiniSvg } from "../../lib/assets/MedMiniSvg";

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
                        {
                            freelancer.hasMedEducation
                                &&
                            <BadgeMiniature 
                                svg={<MedMiniSvg />}
                                name="мед. образование"
                            />
                        }
                        <BadgeMiniature 
                            svg={<PriceBadge priceCategory={+freelancer.priceCategory} />}
                            name="ср. чек"
                        />
                        { 
                            freelancer.agencyRepresentative
                                &&
                            <BadgeMiniature 
                                svg={<CommandSvg />}
                                name="агентство"
                            />
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