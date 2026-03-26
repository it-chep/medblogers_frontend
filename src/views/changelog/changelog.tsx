import classes from '../methodology/methodology.module.scss'
import { blogClasses } from '@/src/entities/blog'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs';
import { Headlines } from '@/src/features/headlines';
import { BlogThemeProvider } from '@/src/features/switchTheme';
import { OpenerBottomFixedWrap, OpenerBottomFixedWrapMobile } from '@/src/widgets/openerBottomFixed';
import '../../../app/blogs/[slug]/page.css'

interface IProps {
    isLightTheme: boolean;
}

export default function ChangelogPage({isLightTheme}: IProps) {
    return (
        <BlogThemeProvider initialIsLight={isLightTheme}>
            <section className={classes.page + ' wrapper_main'}>
                <Breadcrumbs breadcrumbs={[
                { path: '/', label: 'Вернуться к базе' },
                { path: '', label: 'Changelog' },
                ]} />
                <section className={classes.wrapperMain}>
                    <aside className={classes.aside}>
                    <Headlines />
                    </aside>
                    <main className={classes.main}>
                        <section className={classes.switchTheme}>
                        <OpenerBottomFixedWrap />
                        </section>
                        <section className={classes.mobileFixed}>
                        <OpenerBottomFixedWrapMobile />
                        </section>
                        <section className={blogClasses.container}>
                        <section className={blogClasses.content}>
                            <h1>Как развивается проект: ключевые этапы</h1>
                            <p>Любой технологический проект проходит несколько стадий: от идеи и прототипа до полноценного продукта, который начинает формировать целую экосистему вокруг себя. Именно так мы и развиваем наш проект MEDBLOGERS BASE.</p>
                            <p>Изначально база врачей-блогеров создавалась как инструмент для решения практической задачи — ускорить поиск рекламы и партнёрств между медицинскими блогерами. Со временем проект начал расти, обрастать новыми функциями и постепенно превратился в инфраструктурный сервис для рынка медицинского блогинга.</p>
                            <p>Чтобы зафиксировать этот путь, мы начали вести хронологию обновлений проекта, где отражаем ключевые этапы развития базы, новые функции и важные события вокруг проекта.</p>

                            <h2 id="march-2023">Март 2023</h2>
                            <p>Первые упоминания прототипа проекта в блоге. Идея рождалась из реальных задач закупки рекламы.</p>
                            <p><a href="https://t.me/readydoctor/1132" target="_blank" rel="noopener noreferrer">Первое упоминание прототипа</a></p>
                            <p><a href="https://t.me/it_necheporuk/45" target="_blank" rel="noopener noreferrer">Пост главного разработчика Максима Нечепорука</a></p>

                            <h2 id="january-2025">Январь 2025</h2>
                            <p>Мы провели официальный релиз агрегатора.</p>
                            <p><a href="https://t.me/readydoctor/2860" target="_blank" rel="noopener noreferrer">Пост о релизе</a></p>

                            <h2 id="may-2025">Май 2025</h2>
                            <p>Наш проект начали обсуждать в Общественной палате РФ. Это ускорило внедрение обновлений и запуск changelog — прозрачной истории развития.</p>
                            <p><a href="https://t.me/readydoctor/3207" target="_blank" rel="noopener noreferrer">Обсуждение в Общественной палате РФ</a></p>
                            <p><a href="https://t.me/it_necheporuk/98" target="_blank" rel="noopener noreferrer">Запуск changelog</a></p>

                            <h2 id="june-2025">Июнь 2025</h2>
                            <p>Добавили интеграцию с Telegram:</p>
                            <ul>
                                <li>автоматическое обновление количества подписчиков раз в день;</li>
                                <li>фильтр по числу TG-подписчиков.</li>
                            </ul>
                            <p><a href="https://t.me/readydoctor/3251" target="_blank" rel="noopener noreferrer">Анонс Telegram-интеграции</a></p>

                            <h2 id="july-2025">Июль 2025</h2>
                            <ul>
                                <li><a href="https://t.me/readydoctor/3319" target="_blank" rel="noopener noreferrer">первая инструкция</a> по работе с базой;</li>
                                <li>рассказали о <a href="https://t.me/it_necheporuk/107" target="_blank" rel="noopener noreferrer">нашей команде</a>;</li>
                                <li><a href="https://t.me/it_necheporuk/108" target="_blank" rel="noopener noreferrer">отображение подписчиков</a> в миниатюрах карточек;</li>
                                <li><a href="https://t.me/it_necheporuk/109" target="_blank" rel="noopener noreferrer">расширение городов и специальностей</a>;</li>
                                <li>написали информацию об общем числе врачей и их подписчиков на <a href="https://t.me/it_necheporuk/111" target="_blank" rel="noopener noreferrer">главной странице</a>;</li>
                                <li><a href="https://t.me/readydoctor/3275" target="_blank" rel="noopener noreferrer">интеграция с Instagram*</a> с ежедневным обновлением количества подписчиков, в том числе в миниатюрах.</li>
                            </ul>

                            <h2 id="august-2025">Август 2025</h2>
                            <ul>
                                <li>в новостях появилась <a href="https://t.me/readydoctor/3323" target="_blank" rel="noopener noreferrer">информация о планах создать реестр врачей-блогеров</a>, хотя наша база уже активно работала;</li>
                                <li>проект преодолел отметку в 5 миллионов суммарных подписчиков и переехал на новый домен;</li>
                                <li>запустили <a href="https://t.me/readydoctor/3382" target="_blank" rel="noopener noreferrer">сортировку по числу подписчиков</a> на главной странице;</li>
                                <li>обновили интерфейс и оптимизировали сайт;</li>
                                <li>опубликовали первый <a href="https://t.me/readydoctor/3385" target="_blank" rel="noopener noreferrer">кейс использования базы</a>.</li>
                            </ul>

                            <h2 id="october-2025">Октябрь 2025</h2>
                            <p>Запустили вторую часть проекта — <a href="https://t.me/readydoctor/3489" target="_blank" rel="noopener noreferrer">базу помощников</a> для врачей-блогеров.</p>

                            <h2 id="november-2025">Ноябрь 2025</h2>
                            <ul>
                                <li><a href="https://t.me/readydoctor/3511" target="_blank" rel="noopener noreferrer">7 миллионов</a> суммарных подписчиков врачей в базе;</li>
                                <li><a href="https://t.me/it_necheporuk/144" target="_blank" rel="noopener noreferrer">красивое и удобное меню</a>;</li>
                                <li>раздел <a href="https://t.me/readydoctor/3548" target="_blank" rel="noopener noreferrer">«Меня могут порекомендовать»</a> в базе помощников;</li>
                                <li>первые <a href="https://t.me/readydoctor/3497" target="_blank" rel="noopener noreferrer">кейсы сотрудничества</a> через базу помощников.</li>
                            </ul>

                            <h2 id="december-2025">Декабрь 2025</h2>
                            <ul>
                                <li>собственный <a href="https://t.me/readydoctor/3619" target="_blank" rel="noopener noreferrer">конструктор статей</a> и <a href="https://t.me/it_necheporuk/153" target="_blank" rel="noopener noreferrer">админка</a>;</li>
                                <li>первый оформленный <a href="https://t.me/readydoctor/3637" target="_blank" rel="noopener noreferrer">кейс по базе помощников</a>;</li>
                                <li>добавили на сайт <a href="https://t.me/it_necheporuk/151" target="_blank" rel="noopener noreferrer">хлебные крошки</a>;</li>
                                <li><a href="https://t.me/it_necheporuk/152" target="_blank" rel="noopener noreferrer">коллаборация с Клиникой Фомина</a>.</li>
                            </ul>

                            <h2 id="january-2026">Январь 2026</h2>
                            <ul>
                                <li>интеграция с YouTube и ВКонтакте;</li>
                                <li>более 500 врачей в базе;</li>
                                <li>14 млн суммарных подписчиков.</li>
                            </ul>

                            <h2 id="february-2026">Февраль 2026</h2>
                            <ul>
                                <li>запустили VIP-размещение в базе врачей-блогеров: премиальные карточки для докторов, которые активно покупают или продают рекламу. В них можно находиться в топе базы на главной и при любой фильтрации, ставить статусы «куплю / продам рекламу» и «бартер», добавлять развёрнутое описание карточки и стоимость рекламы, прикреплять сайт или таплинк со своими услугами, а также публиковать свои статьи для лучшей индексации в Яндекс и Google;</li>
                                <li>написали основополагающие статьи сайта: редакционная политика, методология, авторы базы;</li>
                                <li>опубликовали первые статьи авторов базы, кураторов клуба MEDBLOGERS, и собрали их в отдельную рубрику «Опыт редакции»;</li>
                                <li>разместили актуальное число каналов расстрельного списка и обновили страницу;</li>
                                <li>обновили welcome-страницу проекта;</li>
                                <li>добавили содержание статей, отображение количества статей по категориям и сделали фильтр по категориям.</li>
                            </ul>

                            <h2 id="summary">Итог</h2>
                            <p>MEDBLOGERS BASE развивается как живой продукт, который растёт вместе с рынком медицинского блогинга.</p>
                            <p>За относительно короткое время проект прошёл путь от идеи до полноценной базы врачей-блогеров, к которой всё чаще обращаются не только за поиском врача для коллаборации, но и для записи на консультацию.</p>
                            <p>Мы продолжаем добавлять новые функции, расширять базу врачей и улучшать инструменты поиска для рекламодателей, брендов, агентств и самих докторов.</p>
                            <p>И, судя по темпам роста проекта и интереса к нему, наша история только начинается.</p>
                        </section>
                        </section>
                    </main>
                </section>
            </section>
        </BlogThemeProvider>
    );
}
