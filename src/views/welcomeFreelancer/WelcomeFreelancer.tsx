
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import classes from './welcome.module.scss'
import { WelcomeWidgetFreelancer } from '@/src/widgets/welcomeFreelancer'

export default function WelcomeFreelancerPage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/helpers', label: 'Вернуться к базе'},
                {path: '', label: 'Размещение в базе'},
            ]} />
            <main className={classes.main}> 
                <WelcomeWidgetFreelancer />
            </main>
        </section>
    )
}