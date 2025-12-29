import classes from './blogs.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { blogService, IBlogMiniature } from '@/src/entities/blog';
import { BlogsWidget } from '@/src/widgets/blogs';
import { Breadcrumbs } from '@/src/widgets/breadcrumbs';

const getData = async () => {
    let blogs: IBlogMiniature[] | null = null;
    try{
        blogs = await blogService.getAll()
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blogs
}

export default async function BlogsPage() {

    const blogs = await getData()

    if(!blogs){
        return <></>
    }

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
                <BlogsWidget blogs={blogs} />
            </main>
        </section>
    )
}