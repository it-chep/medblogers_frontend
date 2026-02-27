"use client"

import { OpenContainer } from "@/src/features/openContainer";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { BlogsContainer } from "../container/BlogsContainer";
import classes from './selected.module.scss'
import { IBlogMiniature } from "@/src/entities/blog";

interface IProps {
    blogs: IBlogMiniature[];
    fullScreen: boolean;
}

export const Selected: FC<IProps> = ({blogs, fullScreen}) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [speedSec, setSpeedSec] = useState<number>(0);
    const [heights, setHeights] = useState<{one: number, two: number}>({one: 0, two: 0});

    const shouldUseContainer =  fullScreen ? blogs.length > 3 : blogs.length > 2;
    const speed = (blogs.length * 1.2) / 20;
    
    const containerHeight = (
        heights.one > 0 
            ? 
        heights.one + (isMobile && heights.two && window ? ((window.innerWidth / 100 * 2) + heights.two) : 0) + 70
            : 
        0
    )
    
    const margin = speed ? '20px' : 0;

    useLayoutEffect(() => {
        function checkMobile() {
            setIsMobile(window.innerWidth < 490);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if(heights.one){
            setSpeedSec(isMobile ? speed * 3 : speed)
        }
    }, [heights])

    return (
        <section 
            className={classes.container} 
            style={{
                height: speedSec ? 'auto' : 0, 
                margin: speedSec ? margin : 0,
                opacity: speedSec ? 1 : 0
            }}
        >
            {
                shouldUseContainer 
                    ? 
                <OpenContainer
                    heightConst={containerHeight} 
                    darkenHeightConst={0} 
                    speedSec={speedSec}
                >
                    <BlogsContainer
                        setHeight={setHeights}
                        blogs={blogs} 
                        fullScreen={fullScreen}
                    />
                </OpenContainer>
                    : 
                <BlogsContainer 
                    setHeight={setHeights}
                    blogs={blogs} 
                    fullScreen={fullScreen}
                />
            }
        </section>
    );
};