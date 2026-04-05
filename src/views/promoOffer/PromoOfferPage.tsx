import { PromoOfferDataWidget } from '@/src/widgets/promoOffer';
import classes from './promoOfferPage.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { BrandCardWidget } from '@/src/widgets/BrandCard';

interface IProps {
    slug: string;
}

export default async function PromoOfferPage({slug}: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <section className={classes.breadcrumbs}>
                <Breadcrumbs breadcrumbs={[
                    {path: '/', label: 'Вернуться к базе'},
                    {path: '/promotional_offers', label: 'Рекламные предложения'},
                    {path: '', label: 'Оффер'},
                ]} />
            </section>
            <main className={classes.main}>
                <BrandCardWidget slug={slug} byOffer />
                <PromoOfferDataWidget slug={slug} />
            </main>
        </section>
    )
}