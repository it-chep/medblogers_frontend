"use client"

import { IRecommendation } from "@/src/entities/freelancer";
import { OpenContainer } from "@/src/features/openContainer";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { RecommendationsContainer } from "../container/RecommendationsContainer";
import classes from './selected.module.scss'

interface IProps {
    recommendations: IRecommendation[];
}

export const Selected: FC<IProps> = ({recommendations}) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [speedSec, setSpeedSec] = useState<number>(0);
    const [heights, setHeights] = useState<{one: number, two: number}>({one: 0, two: 0});

    const shouldUseContainer =  recommendations.length > 4;
    const speed = (recommendations.length * 1.2) / 30;
    
    const containerHeight = (
        heights.one > 0 
            ? 
        heights.one + (isMobile && heights.two && window ? ((window.innerWidth / 100 * 2) + heights.two) : 0) + 70
            : 
        0
    )
    
    const margin = speed ? (isMobile ? '20px 10px' : '20px') : 0;

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
            setSpeedSec(isMobile ? speed * 4: speed)
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
                    <RecommendationsContainer  
                        setHeight={setHeights}
                        recommendations={recommendations} 
                        isMobile={isMobile || false}
                        
                    />
                </OpenContainer>
                    : 
                <RecommendationsContainer 
                    setHeight={setHeights}
                    recommendations={recommendations} 
                    isMobile={isMobile || false}

                />
            }
        </section>
    );
};