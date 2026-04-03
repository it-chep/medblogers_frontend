import { TitlePage } from '@/src/shared/ui/titlePage'
import classes from './promoOffers.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { Suspense } from 'react'
import { LoaderContainer } from '@/src/shared/ui/loaderContainer'
import { FilterPromoOffers } from '@/src/widgets/filterPromoOffers'
import { PromoOffers } from '@/src/widgets/promoOffers'
import { PromoOfferLoader } from '@/src/entities/promoOffer'

interface IProps {
    ids: number[];
}

export default async function PromoOffersPage({ids}: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <section className={classes.breadcrumbs}>
                <Breadcrumbs breadcrumbs={[
                    {path: '/', label: 'Вернуться к базе'},
                    {path: '/promotional_offers', label: 'Рекламные предложения'},
                ]} />
            </section>
            <main className={classes.main}>
                <section className={classes.title}>
                    <TitlePage 
                        sign={"Как этим пользоваться?"}
                        title={"Рекламные предложения"}
                        subTitle={
                            <section className={classes.subTitle}>
                                Врач может сделать отклик на любое рекламное объявление, чтобы получить вознаграждение за интеграцию
                            </section>
                        }
                    />
                </section>
                <section className={classes.filter}>
                    <Suspense 
                        fallback={
                            <section className={classes.loaderFilter}>
                                <LoaderContainer />
                            </section>
                        }
                    >
                        <FilterPromoOffers />
                    </Suspense>
                </section>
                <section className={classes.offers}>
                    <Suspense 
                        fallback={<PromoOfferLoader />}
                    >
                        <PromoOffers ids={ids} />
                    </Suspense>
                </section>
            </main>
        </section>
    )
}