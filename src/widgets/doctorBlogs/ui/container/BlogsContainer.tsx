"use client"

import { FC, useEffect, useRef } from "react";
import classes from './blogsContainer.module.scss'
import { BlogMiniature, IBlogMiniature } from "@/src/entities/blog";

interface IProps {
    blogs: IBlogMiniature[];
    setHeight: ({one, two}: {one: number, two: number}) => void;
    fullScreen: boolean;
}

export const BlogsContainer: FC<IProps> = ({blogs, setHeight, fullScreen}) => {

    const contentRef = useRef<HTMLDivElement>(null)

    function calculateHeights() {
        if(contentRef.current){
            const cards = contentRef.current.children;
            if(cards.length > 0) {
                const firstCard = cards[0] as HTMLElement;
                const firstCardHeight = firstCard.offsetHeight;
                
                let secondCardHeight = 0;
                if(cards.length > 2) {
                    secondCardHeight = (cards[1] as HTMLElement).offsetHeight;  // это высота 2 карточки в мобиле (2 строки)
                }
                
                setHeight({one: firstCardHeight, two: secondCardHeight});
            }
        }
    }

    useEffect(() => {
        calculateHeights();
        
        const resizeObserver = new ResizeObserver(calculateHeights);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }
        
        return () => {
            resizeObserver.disconnect();
        };
    }, [blogs]); // Добавьте зависимости по необходимости

    return (
        <section className={classes.container + (fullScreen ? ` ${classes.fullScreen}` : '')}>
            <h3>Читать статьи врача</h3>
            <section ref={contentRef} className={classes.content}>
                {blogs.map(blog => 
                    <BlogMiniature 
                        key={blog.slug}
                        blog={blog} 
                    />
                )}
            </section>
        </section>
    )
}