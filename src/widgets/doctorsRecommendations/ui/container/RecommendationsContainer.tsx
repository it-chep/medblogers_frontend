"use client"

import { FC, useEffect, useRef } from "react";
import classes from './recommendationsContainer.module.scss'
import { IRecommendation, RecommendationCard } from "@/src/entities/freelancer";

interface IProps {
    recommendations: IRecommendation[];
    setHeight: ({one, two}: {one: number, two: number}) => void;
    isMobile?: boolean;
}

export const RecommendationsContainer: FC<IProps> = ({recommendations, setHeight, isMobile}) => {

    const contentRef = useRef<HTMLDivElement>(null)

    function calculateHeights() {
        if(contentRef.current){
            const cards = contentRef.current.children;
            if(cards.length > 0) {
                const firstCard = cards[0] as HTMLElement;
                const firstCardHeight = firstCard.offsetHeight;
                
                let secondCardHeight = 0;
                if(cards.length > 2) {
                    secondCardHeight = (cards[2] as HTMLElement).offsetHeight;
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
    }, [recommendations]); // Добавьте зависимости по необходимости

    return (
        <section className={classes.container}>
            <h3>Меня могут порекомендовать</h3>
            <section ref={contentRef} className={classes.content}>
                {recommendations.map(recommendation => 
                    <RecommendationCard 
                        key={recommendation.slug}
                        recommendation={recommendation} 
                        isMobile={isMobile}
                    />
                )}
            </section>
        </section>
    )
}