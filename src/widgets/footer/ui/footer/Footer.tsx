import { FC } from "react";
import classes from './footer.module.scss'
import { Block } from "../block/Block";
import { ListLinks } from "../list/ListLinks";
import { contacts, infs, requisites } from "../../lib/const/lists";
import { Sign } from "../list/sign";
import { ListRequisites } from "../list/ListRequisites";
import logo from '../../lib/assets/footer_logo.png'
import { BannerNewDoctor } from "../bannerNewDoctor/BannerNewDoctor";

export const Footer: FC = () => {



    return (
        <footer className={classes.wrapper}>
            <section className="wrapper_main">
                <section className={classes.container}>
                    <Block title="Информация">
                        <>
                            <ListLinks items={infs} />
                            <Sign sign="*Instagram принадлежит Meta, признанной экстремистской в России" />
                        </>
                    </Block>
                    <Block title="Контакты">
                        <>
                            <ListLinks items={contacts} />
                            <Sign>
                                <span className={classes.nowrap + " nowrap"}>Индивидуальный предприниматель</span> <span className={classes.nowrap + " nowrap"}>Нечепорук Владимир Алексеевич</span>
                            </Sign>
                            <ListRequisites requisites={requisites} />
                        </>
                    </Block>
                    <Block textCenter={true} title="Размещение на сайте">
                        <>
                            <BannerNewDoctor />
                        </>
                    </Block>
                </section>
                <img className={classes.logo} src={logo.src} />
            </section>
        </footer>
    )
}