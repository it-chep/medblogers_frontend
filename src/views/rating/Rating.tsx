import classes from './rating.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { RatingTable } from '@/src/widgets/ratingTable'

export default function RatingPage() {
    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '', label: 'Рейтинг'},
            ]} />
            <main className={classes.main}>
                <h1 className={classes.title}>Рейтинг врачей MEDBLOGERS</h1>
                <RatingTable />
            </main>
        </section>
    )
}
