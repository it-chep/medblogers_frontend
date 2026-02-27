import DoctorDetail from '@/src/widgets/doctorDetail'
import classes from './doctor.module.scss'
import { Suspense } from 'react'
import { Breadcrumbs } from '@/src/widgets/breadcrumbs'
import { SearchDoctors } from '@/src/widgets/searchDoctors'
import { DoctorBlogs } from '@/src/widgets/doctorBlogs'
import { doctorService, IDoctorVip } from '@/src/entities/doctor'
import { DoctorDetailMiniature } from '@/src/widgets/doctorDetailMiniature'
import { LoaderContainer } from '@/src/shared/ui/loaderContainer'
import { MyError } from '@/src/shared/lib/error/MyError'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'

interface IProps {
    slug: string
    title?: string;
}

const getVip = async (slug: string) => {  
    // запрос на этом уровне, т.к. надо знать вип/не вип доктор до макета
    let doctorVip: IDoctorVip | null = null;
    try{
        doctorVip = await doctorService.getVip(slug)
    }
    catch(e){
        if((e instanceof MyError) && (e.status === 404)){}
        else{
            if (isDynamicServerError(e)) {
                throw e;
            }
            console.log(e)
        }
    }
    return doctorVip
}



export default async function DoctorPage(props: IProps) {

    const reqDoctor = doctorService.get(props.slug)
    const doctorVip = await getVip(props.slug)

    const isVip = Boolean(doctorVip)

    // разный дизайн для обычной и вип карточек 

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
                <section className={classes.container + (isVip ? ` ${classes.vip}` : '')}>
                    {
                        isVip
                            &&
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
                                    doctorVip={doctorVip}
                                />
                            </Suspense>
                        </aside>
                    }
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
                                doctorVip={doctorVip}
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
                                isVip={isVip}
                            />
                        </Suspense>
                    </main>
                </section>
            </section>
        </section>
    )
}