import { FC, Suspense } from "react";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import classes from './blogRecommendations.module.scss'
import BlogRecommendations from "./BlogRecommendations";
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";

interface IProps {
    slug: string;
}

export const BlogRecommendationsLayout: FC<IProps> = ({slug}) => {

    return (
        <section className={classes.wrapper}>
            <Suspense fallback={<section className={classes.loader}><LoaderContainer /></section>}>
                <BlogRecommendations slug={slug} />
            </Suspense>
            <section className={classes.button}>
                <Link href={'/blogs'}>
                    <MyButton>
                        Больше полезных статей
                    </MyButton>
                </Link>
            </section>
        </section>
    )
}
