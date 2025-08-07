
import { WelcomeWidget } from '@/src/widgets/welcome'
import classes from './welcome.module.scss'

export default function WelcomePage() {


    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}> 
                <WelcomeWidget />
            </main>
        </section>
    )
}