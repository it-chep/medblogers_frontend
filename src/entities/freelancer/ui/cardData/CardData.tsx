import { FC, PropsWithChildren } from "react";
import classes from './cardData.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { SpecialityBadge } from "../specialityBadges/SpecialityBadges";
import { IFreelancer } from "../../model/types";
import withDoctorsImg from '@/src/shared/lib/assets/with_doctors_bg.png'
import commandImg from '@/src/shared/lib/assets/command_blue_bg.png'
import workingExperienceImg from '@/src/shared/lib/assets/speciality_blue_bg.png'
import Image from "next/image";
import { SocialNetwork } from "../socialNetwork/SocialNetwork";

interface IProps {
    freelancer: IFreelancer;
}

export const CardData: FC<IProps & PropsWithChildren> = ({freelancer, children}) => {


    return (
        <section className={classes.container}>
            <section className={classes.main}>
                <h1 className={classes.name}>{freelancer.name}</h1>
                <span className={classes.city}>Город: {freelancer.mainCity.name}
                    {freelancer.cities.length >= 0 && freelancer.cities.map(city => `, ${city.name}`)}
                </span>
                <section className={classes.specialities}>
                    <SpecialityBadge id={freelancer.mainSpeciality.id} text={freelancer.mainSpeciality.name} main={true} />
                    {freelancer.specialities.map((speciality, ind) => 
                        <SpecialityBadge key={ind} id={speciality.id} text={speciality.name} />
                    )}
                </section>
                {
                    (true)
                        &&
                    <section className={classes.flags}>
                        {
                            true
                                &&
                            <section className={classes.flag}>
                                <Image height={32} width={36} src={withDoctorsImg.src} alt={'Опыт работы с врачами'} />
                                <span className={classes.text}>Есть опыт работы с врачами</span>
                            </section>
                        }
                        {
                            true
                                &&
                            <section className={classes.flag}>
                                <Image height={32} width={36} src={commandImg.src} alt={'Есть команда'} />
                                <span className={classes.text}>Есть команда</span>
                            </section>
                        }
                    </section>
                }
                <section className={classes.experience}>
                    <Image height={32} width={36} src={workingExperienceImg.src} alt={'Опыт работы'} />
                    <span className={classes.text}>Опыт работы {freelancer.workingExperience}</span>
                </section>
            </section>
            <SocialNetwork socialNetwork={freelancer.socialNetworks} />
            <Link className={classes.link} href={freelancer.tgUrl}>
                <MyButton>
                    Связаться
                </MyButton>
            </Link>
        </section>
    )
}