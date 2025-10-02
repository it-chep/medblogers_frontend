import { FC } from "react";
import classes from './welcomeWidgetFreelancer.module.scss'
import { MyButton } from "@/src/shared/ui/myButton";
import { List } from "../list/List";
import { noposts, requirements } from "../../lib/const/lists";



export const WelcomeWidgetFreelancer: FC = () => {


    return (
        <section className={classes.container}>
            <section className={classes.text}>
                <span>Мы рады фрилансерам из любого города и любой специальности, но есть ряд ограничений и требований.</span>
                <List title="✅ Требования к размещаемым:" items={requirements} />
                <List title="❌ На сайте не размещаем:" items={noposts} />
                <section className={classes.condition + ` ${classes.b}`}>Если вы соответствуете вышеуказанным критериям — добро пожаловать!</section>
                <section className={classes.condition}>Нажимайте на кнопку «Разместиться в базе» и становитесь частью нашего комьюнити, где врачи-блогеры ищут классных специалистов.</section>
                {/* <section className={classes.callToAction}>«Залететь на сайт»👇</section> */}
                <a target="_blank" className={classes.link} href={'https://t.me/m/Bd3jxl2JNjJi'}>
                    <MyButton>
                        Залететь на сайт
                    </MyButton>
                </a>
           </section>
        </section>
    )
}