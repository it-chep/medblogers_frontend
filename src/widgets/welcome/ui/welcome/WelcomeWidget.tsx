import { FC } from "react";
import classes from './welcomeWidget.module.scss'
import { List } from "../list/List";
import { noposts, requirements } from "../../lib/const/lists";
import { MyButton } from "@/src/shared/ui/myButton";



export const WelcomeWidget: FC = () => {


    return (
        <section className={classes.container}>
            <section className={classes.text}>
                <span>Мы рады врачам-блогерам из любого города и любой специальности, но есть ряд ограничений и требований.</span>
                <List title="❌ На сайте не размещаем:" items={noposts} />
                <List title="✅ Требования к размещаемым:" items={requirements} />
                <section className={classes.condition}>Если вы соответствуете всем критериям, то нажимайте на кнопку</section>
                <section className={classes.callToAction}>«Залететь на сайт»👇</section>
                <a target="_blank" className={classes.link} href={'https://t.me/m/K8N_6UNkMGFi'}>
                    <MyButton>
                        Залететь на сайт
                    </MyButton>
                </a>
           </section>
        </section>
    )
}