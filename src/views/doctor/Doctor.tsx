import DoctorDetail from '@/src/widgets/doctorDetail'
import classes from './doctor.module.scss'
import { Suspense } from 'react'

interface IProps {
    slug: string
}

export default async function DoctorPage(props: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                <Suspense fallback={<>Loading...</>}>
                    <DoctorDetail slug={props.slug} />
                </Suspense>
            </main>
        </section>
    )
}