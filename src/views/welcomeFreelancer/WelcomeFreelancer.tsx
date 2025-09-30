
import classes from './welcome.module.scss'
import { WelcomeWidgetFreelancer } from '@/src/widgets/welcomeFreelancer'

export default function WelcomeFreelancerPage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}> 
                <WelcomeWidgetFreelancer />
            </main>
        </section>
    )
}