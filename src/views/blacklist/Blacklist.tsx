
import classes from './blacklist.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { BlacklistWidget } from '@/src/widgets/blacklist'
import { CheckBlacklist } from '@/src/features/checkBlacklist'

export default function BlacklistPage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '', label: 'Расстрельный список'},
            ]} />
            <main className={classes.main}> 
                <CheckBlacklist titleH1 />
                <BlacklistWidget />
            </main>
        </section>
    )
}