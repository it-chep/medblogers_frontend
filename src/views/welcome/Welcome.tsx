
import { WelcomeWidget } from '@/src/widgets/welcome'
import classes from './welcome.module.scss'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'

export default function WelcomePage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '', label: 'Размещение в базе'},
            ]} />
            <main className={classes.main}> 
                <WelcomeWidget />
            </main>
        </section>
    )
}