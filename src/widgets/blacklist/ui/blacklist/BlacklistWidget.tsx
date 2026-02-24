import { FC } from "react";
import classes from './blacklistWidget.module.scss'
import { IconContainer } from "@/src/shared/ui/iconContainer";
import { Search } from "../../lib/assets/Search";
import { Item } from "../item/Item";
import { BanSvg } from "../../lib/assets/BanSvg";
import { CircleCheck } from "../../lib/assets/CircleCheck";
import { MessageCircle } from "../../lib/assets/MessageCircle";
import { Users } from "../../lib/assets/Users";

export const BlacklistWidget: FC = () => {

    return (
        <section className={classes.container}>
            <section className={classes.mainSign}>
                Проверка канала на накрутки
            </section>
            <section className={classes.header}>
                <h2 className={classes.title}>
                    Как это работает ?
                </h2>
                <h2 className={classes.sign}>
                    Три простых шага, чтобы проверить канал перед покупкой рекламы
                </h2>
                <section className={classes.circle} />
            </section>

            <section className={classes.wrapper}>
                <section className={classes.steps}> 
                    <Item
                        header={
                            <>
                                <IconContainer background="#01284B">
                                    <Search />
                                </IconContainer>    
                                Шаг 1
                            </>
                        }
                        text="Введите название или @username канала и нажмите «Проверить»"
                    >
                        <section className={classes.title}>
                            Введите канал
                        </section>
                    </Item>
                    <Item
                        header={
                            <>
                                <IconContainer background="#3B141A">
                                    <BanSvg />
                                </IconContainer>    
                                Шаг 2
                            </>
                        }
                        text="Если канал красный, лучше не покупать у него рекламу — обнаружены накрутки"
                    >
                        <section className={classes.title}>
                            Красный — не покупать
                        </section>
                    </Item>
                    <Item
                        header={
                            <>
                                <IconContainer background="#153424">
                                    <CircleCheck />
                                </IconContainer>    
                                Шаг 3
                            </>
                        }
                        text="Мы не заметили криминальной активности у данного канала"
                    >
                        <section className={classes.title}>
                            Зелёный — всё чисто
                        </section>
                    </Item>
                </section>
                <section className={classes.items}>
                    <Item
                        header={
                            <>
                                <IconContainer background="#3B141A">
                                    <MessageCircle />
                                </IconContainer>    
                                <section className={classes.title}>
                                    Накрутки
                                </section>
                            </>
                        }
                        text={<>
                            За последние несколько лет набрали популярность подборки каналов в виде папок. 
                            Когда в них участвуют 20+ каналов — это «мусорные» подборки, которые резко увеличивают количество 
                            подписчиков, но они потом даже не заходят в канал.<br /><br />
                            От этого охват постов канала становится меньше 10%. А когда 90% подписчиков — не активные,
                            мы не рекомендуем обращаться к ним по рекламе и сотрудничеству.
                        </>}
                    />
                    <Item
                        header={
                            <>
                                <IconContainer background="#01284B">
                                    <Users />
                                </IconContainer>    
                                <section className={classes.title}>
                                    Хейтеры
                                </section>
                            </>
                        }
                        text={<>
                            Это каналы, которые плохо относятся к самому феномену медицинского блогинга в целом или к проекту MEDBLOGERS в частности.
                            <br /><br />
                            Мы с ними не дружим и вам не советуем 😊
                            <br /><br />
                            P.S. Список обновляется каждый день в ручном режиме.
                        </>}
                    />
                </section>
            </section>
        </section>
    )
}