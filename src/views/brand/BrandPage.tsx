import classes from './brandPage.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { BrandCardWidget } from '@/src/widgets/BrandCard';
import { OffersByBrandWidget } from '@/src/widgets/offersByBrand';

interface IProps {
    slug: string;
}

export default async function BrandPage({slug}: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <section className={classes.breadcrumbs}>
                <Breadcrumbs breadcrumbs={[
                    {path: '/', label: 'Вернуться к базе'},
                    {path: '/promotional_offers', label: 'Рекламные предложения'},
                    {path: '', label: 'сделать из seo ручки title'},
                ]} />
            </section>
            <main className={classes.main}>
                <section className={classes.brand}>
                    <BrandCardWidget slug={slug} />
                </section>
                <section className={classes.offersByBrand}>
                    <OffersByBrandWidget slug={slug} />
                </section>
            </main>
        </section>
    )
}