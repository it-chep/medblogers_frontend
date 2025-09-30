import { FC } from "react";
import classes from './welcomeWidgetFreelancer.module.scss'
import { MyButton } from "@/src/shared/ui/myButton";



export const WelcomeWidgetFreelancer: FC = () => {


    return (
        <section className={classes.container}>
            <section className={classes.text}>
                <span>Мы рады фрилансерам из любого города и любой специальности, но есть ряд ограничений и требований.</span>
              
                <section className={classes.condition}>Если вы соответствуете всем критериям, то нажимайте на кнопку</section>
                <section className={classes.callToAction}>«Залететь на сайт»👇</section>
                <a target="_blank" className={classes.link} href={'https://t.me/m/Bd3jxl2JNjJi'}>
                    <MyButton>
                        Залететь на сайт
                    </MyButton>
                </a>
           </section>
        </section>
    )
}