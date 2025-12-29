import classes from './newfreelancer.module.scss'
import { FreelancerForm } from '@/src/widgets/freelancerForm'

export default function NewFreelancerPage(){

    return (
        <main className={classes.wrapper}>
            <FreelancerForm />
        </main>
    )
}