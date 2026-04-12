import classes from './blog.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { Blog, BlogCategories, BlogDoctor, blogService, getBlogJsonLd, IBlogDetail, ShareBlog } from '@/src/entities/blog';
import { Breadcrumbs } from '@/src/widgets/breadcrumbs';
import { notFound } from 'next/navigation';
import { Share } from '@/src/features/share';
import { BlogThemeProvider } from '@/src/features/switchTheme';
import { OpenerBottomFixedWrap, OpenerBottomFixedWrapMobile } from '@/src/widgets/openerBottomFixed';
import { Headlines } from '@/src/features/headlines';
import { BlogRecommendationsLayout } from '@/src/widgets/blogRecommendations';

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

    const jsonLd = getBlogJsonLd(blog)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <BlogThemeProvider>
                <section className={classes.page}>
                    <section className={classes.breadcrumbs}>
                        <Breadcrumbs breadcrumbs={[
                            {path: '/', label: 'Вернуться к базе'},
                            {path: '/blogs', label: 'Статьи'},
                            {path: '', label: blog.title},
                        ]} />
                    </section>
                    <section className={classes.wrapperMain}>
                        <aside className={classes.aside}>
                            <Headlines />
                        </aside>
                        <main className={classes.main}>
                            <section className={classes.switchTheme}>
                                <OpenerBottomFixedWrap />
                            </section>
                            <section className={classes.mobileFixed}>
                                <OpenerBottomFixedWrapMobile />
                            </section>
                            <Blog 
                                blog={blog} 
                                doctorBlog={blog.doctor.name ? blog.doctor : null}
                                categories={
                                    <BlogCategories 
                                        categories={blog.categories}
                                    />
                                }
                            >
                                <Share>
                                    <ShareBlog />
                                </Share>
                            </Blog>
                            <Share>
                                <ShareBlog />
                            </Share>
                            {
                                blog.doctor.name 
                                    &&
                                <BlogDoctor 
                                    doctor={blog.doctor}
                                />
                            }
                        </main>
                    </section>
                    <section className={classes.blogsTop}>
                        <h2 className={classes.other}>Также рекомендуем прочитать</h2>
                        <BlogRecommendationsLayout slug={blog.slug} />
                    </section>
                </section>
            </BlogThemeProvider>
        </>
    )
}
