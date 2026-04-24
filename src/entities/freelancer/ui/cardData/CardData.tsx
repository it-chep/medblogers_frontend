import { FC, PropsWithChildren } from "react";
import classes from './cardData.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { SpecialityBadge } from "../specialityBadges/SpecialityBadges";
import { IFreelancer } from "../../model/types";
import commandImg from '@/src/shared/lib/assets/command_blue_bg.png'
import workingExperienceImg from '@/src/shared/lib/assets/speciality_blue_bg.png'
import Image from "next/image";
import { SocialNetwork } from "../socialNetwork/SocialNetwork";
import markImg from '@/src/shared/lib/assets/mark_blue.png';
import MedSvg from "../../lib/assets/MedSvg.svg";

interface IProps {
    freelancer: IFreelancer;
}

export const CardData: FC<IProps & PropsWithChildren> = ({freelancer, children}) => {


    return (
        <section className={classes.container}>
            <section className={classes.main}>
                <h1 className={classes.name}>
                    {freelancer.name}
                </h1>
                <section className={classes.group}>
                    <span className={classes.city}>
                        <Image alt="Метка" width={11} height={13} src={markImg.src} /> Город: {freelancer.mainCity.name}
                        {freelancer.cities.length >= 0 && freelancer.cities.map(city => `, ${city.name}`)}
                    </span>
                    <section className={classes.specialities}>
                        <SpecialityBadge id={freelancer.mainSpeciality.id} text={freelancer.mainSpeciality.name} main={true} />
                        {freelancer.specialities.map((speciality, ind) => 
                            <SpecialityBadge key={ind} id={speciality.id} text={speciality.name} />
                        )}
                    </section>
                </section>
                <section className={classes.group}>
                        <section className={classes.flags}>
                        {
                            freelancer.agencyRepresentative
                                &&
                            <section className={classes.flag}>
                                <Image height={32} width={36} src={commandImg.src} alt={'Представитель агентства'} />
                                <span className={classes.text}>Представитель агентства</span>
                            </section>
                            }
                        {
                            freelancer.hasMedEducation
                                &&
                            <section className={classes.flag}>
                                <Image height={32} width={36} src={MedSvg} alt={'Есть мед. образование'} />
                                <span className={classes.text}>Есть мед. образование</span>
                            </section>
                        }
                        <section className={classes.flag}>
                            <Image height={32} width={36} src={workingExperienceImg.src} alt={'Опыт работы'} />
                            <span className={classes.text}>Опыт работы {freelancer.workingExperience}</span>
                        </section>
                    </section>
                    {
                        freelancer.socialNetworks.length > 0
                            &&
                        <SocialNetwork label="Работаю в соц сетях:" socialNetwork={freelancer.socialNetworks} />
                    }
                </section>
            </section>
            <section className={classes.buttons}>
                <Link className={classes.link} href={freelancer.tgUrl}>
                    <MyButton>
                        Связаться
                    </MyButton>
                </Link>
                {
                    freelancer.portfolioLink
                        &&
                    <a 
                        target="_blank" 
                        className={classes.link + ' ' + classes.portfolioLink} href={freelancer.portfolioLink}
                    >
                        <button className={classes.buttonPortfolioLink}>
                            Портфолио 
                            <svg className={classes.array} width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.381872 13.2735C-0.126706 13.7821 -0.126706 14.6066 0.381872 15.1152C0.89045 15.6238 1.71502 15.6238 2.2236 15.1152L1.30273 14.1943L0.381872 13.2735ZM15.4971 1.30226C15.4971 0.583025 14.914 -3.27281e-05 14.1948 -3.20327e-05L2.47414 -3.25384e-05C1.7549 -3.25384e-05 1.17184 0.583026 1.17184 1.30226C1.17184 2.0215 1.7549 2.60456 2.47414 2.60456L12.8925 2.60456L12.8925 13.0229C12.8925 13.7422 13.4756 14.3252 14.1948 14.3252C14.914 14.3252 15.4971 13.7422 15.4971 13.0229L15.4971 1.30226ZM1.30273 14.1943L2.2236 15.1152L15.1157 2.22313L14.1948 1.30226L13.2739 0.381401L0.381872 13.2735L1.30273 14.1943Z" />
                            </svg>
                        </button>
                    </a>
                }
            </section>
        </section>
    )
}