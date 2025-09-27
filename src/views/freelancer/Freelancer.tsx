import { Suspense } from 'react'
import classes from './freelancer.module.scss'
import { LoaderSpinner } from '@/src/shared/ui/loaderSpinner'
import { FreelancerDetail } from '@/src/widgets/freelancerDetail'


interface IProps {
    slug: string
}

export default async function FreelancerPage(props: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                <Suspense fallback={<section className={classes.loader}><LoaderSpinner /></section>}>
                    <FreelancerDetail slug={props.slug} />
                </Suspense>
            </main>
        </section>
    )
}