import { FC } from "react";
import classes from './welcomeWidget.module.scss'
import { noposts, requirements } from "../../lib/const/lists";
import { MyButton } from "@/src/shared/ui/myButton";
import { BanSvg } from "../../lib/assets/BanSvg";
import { CircleCheck } from "../../lib/assets/CircleCheck";
import { Telega } from "../../lib/assets/Telega";
import Image from "next/image";
import cardsImg from '../../lib/assets/cards.png'
import phoneImg from '../../lib/assets/phone.png'
import { IconContainer } from "@/src/shared/ui/iconContainer";


export const WelcomeWidget: FC = () => {


    return (
        <section className={classes.container}>
            <section className={classes.mainSign}>
                Правила и требования
            </section>
            <section className={classes.header}>
                <h1>
                    Размещение в базе
                </h1>
                <h2>
                    Наша база открыта для врачей-блогеров из любого города.<br /> 
                    Здесь вы можете найти коллег для рекламных интеграций и коллабораций.
                </h2>
                <section className={classes.circle} />
            </section>
            <section className={classes.noPosts}>
                <section className={classes.titleWidget}>
                    <IconContainer background="#3B141A">
                        <BanSvg />
                    </IconContainer>
                    Кого мы НЕ размещаем
                </section>
                <ul className={classes.items}>
                    {noposts.map((noPost, ind) => 
                        <li 
                            style={{width: noPost.width}} 
                            key={ind}
                            className={classes.item}
                        >
                            <IconContainer background="#3B141A">
                                <noPost.icon />
                            </IconContainer>
                            {noPost.text}
                        </li>
                    )}
                </ul>
            </section>
            <section className={classes.requirements}>
                <section className={classes.titleWidget}>
                    <IconContainer background="#153424">
                        <CircleCheck />
                    </IconContainer>
                    Требования к размещаемым
                </section>
                <ul className={classes.items}>
                    {requirements.map((requirement, ind) => 
                        <li 
                            style={{width: requirement.width}} 
                            className={classes.item + ' ' + classes.green}
                            key={ind}
                        >
                            <IconContainer background="#153424">
                                <requirement.icon />
                            </IconContainer>
                            {requirement.text}
                        </li>
                    )}
                </ul>
            </section>
            <section className={classes.join}>
                <section className={classes.data}>
                    <section className={classes.title}>
                        Соответствуете критериям?
                    </section>
                    <section className={classes.sign}>
                        Жмите «Залететь на сайт», а мы пришлём вам актуальные условия и анкету участника
                    </section>
                    <section className={classes.button}>
                        <a 
                            className={classes.link}
                            target="_blank"
                            href="https://t.me/m/K8N_6UNkMGFi"    
                        >
                            <MyButton>
                                <section className={classes.buttonContent}>
                                    <Telega />
                                    Залететь на сайт
                                </section>
                            </MyButton>
                        </a>
                    </section>
                </section>
                <section className={classes.banner}>
                    <Image className={classes.cards} src={cardsImg} width={560} height={400} alt="Карточки" />
                    <section className={classes.phoneWrap}>
                        <section className={classes.phoneBlur} >
                            <section className={classes.blur}>

                            </section>
                        </section>
                        <Image className={classes.phone} src={phoneImg} width={300} height={330} alt="Карточки" />
                    </section>
                    <section className={classes.circleJoin} />
                    <section className={classes.circleJoinBlue} />
                </section>
            </section>
        </section>
    )
}