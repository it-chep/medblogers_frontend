import classes from './authors.module.scss'
import {blogClasses} from '@/src/entities/blog'
import {doctorService} from '@/src/entities/doctor'
import {Breadcrumbs} from '@/src/widgets/breadcrumbs'
import {HeadlinesBlog} from '@/src/widgets/headlinesBlog'
import {AuthorCard} from './AuthorCard'

const authors = [
    {
        name: 'Нечепорук Владимир Алексеевич',
        slug: 'necheporuk-vladimir-alekseevich',
        specialityName: 'Врач-терапевт, главный редактор',
        description: 'Врач-терапевт, блогер и специалист по развитию медицинских блогов. С 2020 года работает с врачами над развитием их экспертных аккаунтов и аналитикой рынка медицинского блогинга.',
        section: 'editor' as const,
    },
    {
        name: 'Андриянов Станислав Юлианович',
        slug: 'andriyanov-stanislav-yulianovich',
        specialityName: 'Педиатр, Санкт-Петербург',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, контент и работа с аудиторией, закуп и продажа рекламы в Telegram, ведение и монетизация Telegram-канала, инфопродукты для пациентов, развитие личного бренда врача, личные продажи.',
    },
    {
        name: 'Гаврилов Василий Александрович',
        slug: 'gavrilov-vasilij-aleksandrovich',
        specialityName: 'Хирург, проктолог, Пермь',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, обучение работе с нейросетями, аналитика соцсетей и кросспостинг, научная работа, контент и работа с аудиторией, продвижение через видеоконтент, развитие личного бренда врача. Автор курсов Нейросети для медблога, Ютубоскопия.',
    },
    {
        name: 'Заболотная Светлана Валентиновна',
        slug: 'zabolotnaya-svetlana-valentinovna',
        specialityName: 'Невролог, Москва',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, контент и работа с аудиторией, развитие личного бренда врача, инфопродукты для пациентов, продвижение через видеоконтент, коллаборации с коллегами.',
    },
    {
        name: 'Борисов Алексей Сергеевич',
        slug: 'borisov-aleksej-sergeevich',
        specialityName: 'Невролог, Иркутск',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, контент и работа с аудиторией, развитие личного бренда врача, продвижение через видеоконтент. Автор канала «Доктор Борисов», совокупная аудитория по всем соцсетям – 750+ тысяч человек, автор образовательных курсов для врачей, спикер международных конференций, автор книги «Как устоять, когда весь мир кружится».',
    },
    {
        name: 'Озолинь Марк Айварович',
        slug: 'ozolin-mark-aivarovich',
        specialityName: 'Врач спортивной медицины и ЛФК, Буэнос-Айрес (Аргентина)',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, контент и работа с аудиторией, продвижение через видеоконтент. Экс-врач сборной России по кёрлингу, экс-медицинский директор Ravetape x FlowRecovery Russia, старший преподаватель образовательной платформы Bodycoach.',
    },
    {
        name: 'Алексеева Юлия Владимировна',
        slug: 'alekseeva-yuliya-vladimirovna',
        specialityName: 'Диетолог, гастроэнтеролог, психолог, Екатеринбург',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, развитие личного бренда врача, контент и работа с аудиторией.',
    },
    {
        name: 'Алимова Оксана Петровна',
        slug: 'alimova-oksana-petrovna',
        specialityName: 'Акушер-гинеколог, Москва',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Автор блогов о женском здоровье. Медицинский блогинг, контент и работа с аудиторией. Продвижение через видеоконтент в Reels и TikTok.',
    },
    {
        name: 'Цыплухина Елена Фаритовна',
        slug: 'cypluhina-elena-faritovna',
        specialityName: 'Врач КЛД, Валенсия (Испания)',
        description: 'Куратор (диджей) клуба MEDBLOGERS. Медицинский блогинг, развитие личного бренда врача, контент и продвижение в Threads, комьюнити-менеджмент.',
    },
]

export default async function AuthorsPage() {
    const seoData = await Promise.all(
        authors.map(author => doctorService.seo(author.slug))
    )

    const editor = authors[0]
    const editorImage = seoData[0].image
    const otherAuthors = authors.slice(1)
    const otherSeoData = seoData.slice(1)

    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '', label: 'Авторы'},
            ]}/>
            <section className={classes.wrapperMain}>
                <aside className={classes.aside}>
                    <HeadlinesBlog/>
                </aside>
                <main className={classes.main}>
                    <section className={blogClasses.container}>
                        <section className={blogClasses.content}>
                            <h1>Авторы Medblogers Base</h1>
                            <p>Контент Medblogers Base создаётся и редактируется специалистами с практическим опытом в медицине, медицинском блогинге и аналитике цифровых платформ.</p>
                            <p>Мы принципиально указываем авторство и экспертизу всех материалов, опубликованных на сайте. Для нас важно, чтобы читатели знали, кто готовит информацию для нашего портала и почему ей можно доверять.</p>

                            <h2>Главный редактор и автор проекта</h2>
                        </section>
                        <AuthorCard
                            name={editor.name}
                            slug={editor.slug}
                            image={editorImage}
                            specialityName={editor.specialityName}
                            description={editor.description}
                        />
                        <section className={blogClasses.content}>
                            <p>В рамках Medblogers Base отвечает за:</p>
                            <ul>
                                <li>формирование и развитие редакционной политики проекта;</li>
                                <li>методологию формирования и обновления базы врачей-блогеров;</li>
                                <li>финальную редактуру материалов;</li>
                                <li>соответствие публикуемого контента принципам независимости, прозрачности и ответственности.</li>
                            </ul>

                            <h2>Авторы и эксперты проекта</h2>
                            <p>Материалы Medblogers Base готовят:</p>
                            <ul>
                                <li>врачи различных специальностей, ведущие профессиональные блоги и размещённые в базе проекта;</li>
                                <li>специалисты в области медицинского маркетинга;</li>
                                <li>редакторы и аналитики Medblogers Base;</li>
                                <li>приглашённые эксперты по отдельным темам.</li>
                            </ul>
                        </section>
                        {otherAuthors.map((author, index) => (
                            <AuthorCard
                                key={author.slug}
                                name={author.name}
                                slug={author.slug}
                                image={otherSeoData[index].image}
                                specialityName={author.specialityName}
                                description={author.description}
                            />
                        ))}
                        <section className={blogClasses.content}>
                            <hr />
                            <h2>Связанные документы</h2>
                            <p>Работа авторов и редакции Medblogers Base осуществляется в соответствии с:</p>
                            <ul>
                                <li><a href="/editorial_policy"><strong>Редакционной политикой проекта</strong></a></li>
                                <li><a href="/methodology"><strong>Методологией базы врачей-блогеров</strong></a></li>
                            </ul>
                        </section>
                    </section>
                </main>
            </section>
        </section>
    )
}
