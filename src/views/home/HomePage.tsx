import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { Filters } from '@/src/widgets/filters'



export default function HomePage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <Filters />
            </aside>
            <main className={classes.main}>
                <section>STATISTICS</section>
                <section>SEARCH</section>
                <DoctorsAll />
            </main>
        </section>
    )
}