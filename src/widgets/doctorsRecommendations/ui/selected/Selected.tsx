"use client"

import { IRecommendation } from "@/src/entities/freelancer";
import { OpenContainer } from "@/src/features/openContainer";
import { FC, useEffect, useState } from "react";
import { RecommendationsContainer } from "../container/RecommendationsContainer";
import classes from './selected.module.scss'

interface IProps {
    recommendations: IRecommendation[];
}

export const Selected: FC<IProps> = ({recommendations}) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [speedSec, setSpeedSec] = useState<number>(0);
    const [heights, setHeights] = useState<{one: number, two: number}>({one: 0, two: 0});

    const shouldUseContainer = isMobile ? recommendations.length > 2 : recommendations.length > 4;
    const speed = (recommendations.length * 1.2) / 30;
    
    const containerHeight = (
        heights.one > 0 
            ? 
        isMobile 
            ? 
        heights.one + (heights.two ? (12 + heights.two) : 0) + 75
            : 
        heights.one + 70
            : 
            0
        )

    const margin = speed ? (isMobile ? '16px' : '20px') : 0;

    useEffect(() => {
        function checkMobile() {
            setIsMobile(window.innerWidth < 490);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if(heights.one){
            setTimeout(() => setSpeedSec(isMobile ? speed * 4: speed), 0)
        }
    }, [heights])

    if(isMobile === null){
        return <></>
    }

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
                    <RecommendationsContainer  
                        setHeight={setHeights}
                        recommendations={recommendations} 
                    />
                </OpenContainer>
                    : 
                <RecommendationsContainer 
                    setHeight={setHeights}
                    recommendations={recommendations} 
                />
            }
        </section>
    );
};