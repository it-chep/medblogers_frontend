import classes from './rating.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { RatingHeader } from '@/src/widgets/ratingHeader'
import { RatingTable } from '@/src/widgets/ratingTable'

export default function RatingPage() {
    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '', label: 'Рейтинг врачей MEDBLOGERS'},
            ]} />
            <main className={classes.main}>
                <RatingHeader />
                <RatingTable />
            </main>
        </section>
    )
}
