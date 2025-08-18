import DoctorDetail from '@/src/widgets/doctorDetail'
import classes from './doctor.module.scss'
import { Suspense } from 'react'
import { LoaderSpinner } from '@/src/shared/ui/loaderSpinner'

interface IProps {
    slug: string
}

export default async function DoctorPage(props: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                <Suspense fallback={<section className={classes.loader}><LoaderSpinner /></section>}>
                    <DoctorDetail slug={props.slug} />
                </Suspense>
            </main>
        </section>
    )
}