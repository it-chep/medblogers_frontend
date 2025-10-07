import {FC} from "react";
import classes from './freelancerMiniature.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import { IFreelancerMiniature } from "../../model/types";
import markImg from '@/src/shared/lib/assets/mark_blue.png';
import commandImg from '@/src/shared/lib/assets/command_blue_bg.png';
import withDoctorsImg from '@/src/shared/lib/assets/with_doctors_bg.png';
import { SocialNetwork } from "../socialNetwork/SocialNetwork";
import { Hint } from "@/src/shared/ui/hint";
import { PriceBadge } from "../priceBadge/PriceBadge";

interface IProps {
    freelancer: IFreelancerMiniature;
}

export const FreelancerMiniature: FC<IProps> = ({freelancer}) => {

    const freelancerLink = `work/${freelancer.slug}`

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <noindex>
                    <Link 
                        rel="nofollow" 
                        href={freelancerLink}
                        className={classes.image}
                    >
                        <section className={classes.icons}>
                            <Hint hint="Ценовая категория">
                                <PriceBadge priceCategory={+freelancer.priceCategory} />
                            </Hint>
                            { 
                                freelancer.hasCommand
                                    &&
                                <Hint hint="Есть своя команда">
                                    <Image alt="Есть своя команда" height={32} width={36} src={commandImg.src}  />
                                </Hint>
                            }
                            {    
                                freelancer.experienceWithDoctors
                                    &&
                                <Hint hint="Есть опыт работы с врачами"> 
                                    <Image alt="Есть опыт работы с врачами" height={32} width={36} src={withDoctorsImg.src}  />
                                </Hint>
                            }
                        </section>
                        <Image className={classes.avatar} src={freelancer.image} alt={'Аватарка фрилансера'} width={260} height={160} />
                    </Link>
                </noindex>
                <section className={classes.name}>
                    <Link href={freelancerLink}>
                        {freelancer.name}
                    </Link>
                </section>
            </section>
            <section className={classes.infoWrapper}>
                <p className={classes.speciality}>
                    {freelancer.speciality}
                </p>
                <section className={classes.city}> 
                    <Image alt="Метка" width={16} height={16} src={markImg.src} />
                    {freelancer.city}
                </section>
                <section className={classes.socialNetworks}>
                    {
                        freelancer.socialNetworks.length > 0
                            &&
                        <SocialNetwork label="Работаю в:" socialNetwork={freelancer.socialNetworks} />
                    }
                </section>
                <section className={classes.buttonsWrapper}>
                    <noindex className={classes.link}>
                        <Link rel="nofollow" href={freelancerLink} >
                            <MyButton>Подробнее</MyButton>
                        </Link>
                    </noindex>
                </section>
            </section>
        </section>
    )
}