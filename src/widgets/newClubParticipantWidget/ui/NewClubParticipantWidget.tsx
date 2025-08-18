import { FC } from "react";
import classes from './newClubParticipantWidget.module.scss'
import Image from "next/image";
import aboutImg from '@/src/shared/lib/assets/dog_about.png'
import { NewClubParticipantForm } from "@/src/features/newClubParticipantForm";

export const NewClubParticipantWidget: FC = () => {


    return (
        <section className={classes.wrapper}>
            <Image className={classes.aboutImg} src={aboutImg.src} height={125} width={500} alt="Напиши здесь о себе" />
            <section className={classes.header}>
                <h1>Анкета участника MEDBLOGERS</h1>
                <p>Привет, MEDBLOGERец! Эта форма позволит вам попасть на единый сайт - базу врачей-блогеров, а также поможет вам и коллегам найти вас и предложить сотрудничество.</p>
            </section>
            <section className={classes.body}>
                <NewClubParticipantForm />
            </section>
        </section>
    )
}