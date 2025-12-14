import { FC } from 'react'
import classes from './FAQ.module.scss'
import { faqs } from '../lib/consts/faqs'
import { OpenBlockFAQ } from '@/src/features/openBlockFAQ'

export const FAQ: FC = () => {

    return (
        <section className={classes.wrapper}>
            <h2>Ответы на частые вопросы</h2>
            <section className={classes.container}>
                <section className={classes.column}>
                    {faqs.slice(0, faqs.length / 2 + 1).map((faq, ind) => 
                        <section 
                            key={ind}
                            className={classes.item}
                        >   
                            <OpenBlockFAQ
                                title={faq.title} 
                                text={faq.text}
                            />
                        </section>
                    )}
                </section>
                <section className={classes.column}>
                    {faqs.slice(faqs.length / 2 + 1).map((faq, ind) => 
                        <section 
                            key={ind}
                            className={classes.item}
                        >   
                            <OpenBlockFAQ
                                title={faq.title} 
                                text={faq.text}
                            />
                        </section>
                    )}
                    <section 
                        className={classes.item}
                    >
                        <OpenBlockFAQ
                            title='Есть ли успешные кейсы использования базы?' 
                            text=''
                        >
                            Да! Уже есть примеры, когда с помощью базы бренды находили подходящих врачей и блогеров, а врачи — надёжных партнёров для коллабораций. С ними можно ознакомиться по <a href='https://doc.readyschool.ru/base2case' target="_blank">ссылке</a>.
                        </OpenBlockFAQ>
                    </section>   
                </section>
            </section>
        </section>
    )
}