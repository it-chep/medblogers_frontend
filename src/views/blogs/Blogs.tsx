import { LoaderContainer } from '@/src/shared/ui/loaderContainer';
import classes from './blogs.module.scss'
import { BlogsWidget } from '@/src/widgets/blogs';
import { Breadcrumbs } from '@/src/widgets/breadcrumbs';
import { FilterBlogs } from '@/src/widgets/filterBlogs';
import { Suspense } from 'react';
import { LoaderSpinner } from '@/src/shared/ui/loaderSpinner';

export default function BlogsPage({ids}: {ids: number[]}) {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <main className={classes.main}>
                <section className={classes.breadcrumbs}>
                    <Breadcrumbs breadcrumbs={[
                        {path: '/', label: 'Вернуться к базе'},
                        {path: '', label: 'Статьи'},
                    ]} />
                </section>
                <h1>
                    Полезные статьи для медблога
                </h1>
                <section className={classes.sign}>
                    Есть идея для статьи? <a href='https://t.me/m/FIqVfvb9ZmEy' target="_blank">Напишите нам</a>
                </section>
                <section className={classes.filter}>
                    <Suspense 
                        fallback={
                            <section className={classes.loaderFilter}>
                                <LoaderContainer />
                            </section>
                        }
                    >
                        <FilterBlogs />
                    </Suspense>
                </section>
                <Suspense 
                    key={ids.toString()} 
                    fallback={
                        <section className={classes.loaderBlogs}>
                            <LoaderSpinner />
                        </section>}
                    >
                        <BlogsWidget ids={ids} />
                </Suspense>
            </main>
        </section>
    )
}