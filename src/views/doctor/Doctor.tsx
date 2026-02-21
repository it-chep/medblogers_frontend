import DoctorDetail from '@/src/widgets/doctorDetail'
import classes from './doctor.module.scss'
import { Suspense } from 'react'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { SearchDoctors } from '@/src/widgets/searchDoctors'
import { DoctorBlogs } from '@/src/widgets/doctorBlogs'
import { doctorService } from '@/src/entities/doctor'
import { DoctorDetailMiniature } from '@/src/widgets/doctorDetailMiniature'
import { LoaderContainer } from '@/src/shared/ui/loaderContainer'

interface IProps {
    slug: string
    title?: string;
}

export default async function DoctorPage(props: IProps) {

    const reqDoctor = doctorService.get(props.slug)
    const reqDoctorVip = doctorService.getVip(props.slug)

    return (
        <section className={classes.page + ' wrapper_main'}>
            <section className={classes.wrapper}>
                <SearchDoctors />
                {
                    props.title
                        &&
                    <Breadcrumbs breadcrumbs={[
                        {path: '/', label: 'Вернуться к базе'},
                        {path: '', label: props.title},
                    ]} />
                }
                <section className={classes.container}>
                    <aside>
                        <Suspense 
                            fallback={
                                <section className={classes.loader}>
                                    <LoaderContainer />
                                </section>
                            }
                        >
                            <DoctorDetailMiniature 
                                reqDoctor={reqDoctor}
                                reqDoctorVip={reqDoctorVip}
                            />
                        </Suspense>
                    </aside>
                    <main>
                        <Suspense 
                            fallback={
                                <section className={classes.loader}>
                                    <LoaderContainer />
                                </section>
                            }
                        >
                            <DoctorDetail 
                                reqDoctor={reqDoctor}
                                reqDoctorVip={reqDoctorVip}
                            />
                        </Suspense>
                        <Suspense   
                            fallback={
                                <section className={classes.loader}>
                                    <LoaderContainer />
                                </section>
                            }
                        >
                            <DoctorBlogs 
                                slug={props.slug} 
                            />
                        </Suspense>
                    </main>
                </section>
            </section>
        </section>
    )
}