import classes from './blog.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { Blog, blogService, getShortTitle, IBlogDetail, ShareBlog } from '@/src/entities/blog';
import { Breadcrumbs } from '@/src/widgets/breadcrumbs';
import { notFound } from 'next/navigation';
import { Share } from '@/src/features/share';
import { BlogsTopLayout } from '@/src/widgets/blogsTop';
import { MyButton } from '@/src/shared/ui/myButton';

const getData = async (slug: string) => {
    let blog: IBlogDetail | null = null;
    try{
        blog = await blogService.get(slug)
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blog
}

interface IProps {
    slug: string
}

export default async function BlogPage(props: IProps) {

    const blog = await getData(props.slug)

     if(!blog || blog.code === 2){
        return (
            notFound()
        )
    }

    return (
        <section className={classes.page + ' wrapper_main'}>
            <Breadcrumbs breadcrumbs={[
                {path: '/', label: 'Вернуться к базе'},
                {path: '/blogs', label: 'Статьи'},
                {path: '', label: blog.title},
            ]} />
            <main className={classes.main}>
                <Blog blog={blog} >
                    <Share>
                        <ShareBlog isBlue />
                    </Share>
                </Blog>
                <section className={classes.share}>
                    <Share>
                        <ShareBlog />
                    </Share>
                </section>
            </main>
            <section className={classes.blogsTop}>
                <h2 className={classes.other}>Читать другие статьи</h2>
                <BlogsTopLayout />
            </section>
        </section>
    )
}