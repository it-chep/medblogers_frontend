import DoctorDetail from '@/src/widgets/doctorDetail'
import classes from './doctor.module.scss'
import { Suspense } from 'react'
import { LoaderSpinner } from '@/src/shared/ui/loaderSpinner'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { SearchDoctors } from '@/src/widgets/searchDoctors'
import { DoctorBlogs } from '@/src/widgets/doctorBlogs'

interface IProps {
    slug: string
    title?: string;
}

export default async function DoctorPage(props: IProps) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                <SearchDoctors />
                {
                    props.title
                        &&
                    <Breadcrumbs breadcrumbs={[
                        {path: '/', label: 'Вернуться к базе'},
                        {path: '', label: props.title},
                    ]} />
                }
                <Suspense fallback={<section className={classes.loader}><LoaderSpinner /></section>}>
                    <DoctorDetail 
                        slug={props.slug} 
                    />
                </Suspense>
                <Suspense fallback={<section className={classes.loader}><LoaderSpinner /></section>}>
                    <DoctorBlogs 
                        slug={props.slug} 
                    />
                </Suspense>
            </main>
        </section>
    )
}