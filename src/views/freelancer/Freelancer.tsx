import { Suspense } from 'react'
import classes from './freelancer.module.scss'
import { LoaderSpinner } from '@/src/shared/ui/loaderSpinner'
import { FreelancerDetail } from '@/src/widgets/freelancerDetail'
import { DoctorsRecommendations } from '@/src/widgets/doctorsRecommendations'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'

interface IProps {
    slug: string
    title?: string;
}

export default async function FreelancerPage(props: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                {
                    props.title
                        &&
                    <section className={classes.breadcrumbs}>
                        <Breadcrumbs breadcrumbs={[
                            {path: '/helpers', label: 'Вернуться к базе'},
                            {path: '', label: props.title},
                        ]} />
                    </section>
                }
                <Suspense 
                    fallback={<section className={classes.loader}><LoaderSpinner /></section>}
                >
                    <FreelancerDetail slug={props.slug} />
                </Suspense>
                <Suspense 
                    fallback={<section className={classes.loader}><LoaderSpinner /></section>}
                >
                    <DoctorsRecommendations slug={props.slug} />
                </Suspense>
            </main>
        </section>
    )
}