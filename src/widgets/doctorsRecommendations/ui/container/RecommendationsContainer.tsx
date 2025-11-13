"use client"

import { FC, useEffect, useRef } from "react";
import classes from './recommendationsContainer.module.scss'
import { IRecommendation, RecommendationCard } from "@/src/entities/freelancer";


interface IProps {
    recommendations: IRecommendation[];
    setHeight: ({one, two}: {one: number, two: number}) => void;
}

export const RecommendationsContainer: FC<IProps> = ({recommendations, setHeight}) => {

    const contentRef = useRef<HTMLDivElement>(null)

    function heightOneRow() {
        if(contentRef.current){
            const oneCard = contentRef.current.firstElementChild;
            if(oneCard){
                const oneHeightCard = oneCard.scrollHeight;
                const siblingCard = oneCard.nextElementSibling;
                
                if(siblingCard){
                    const twoHeightCard = siblingCard.scrollHeight;
                    if(twoHeightCard){
                        setHeight({one: oneHeightCard, two: twoHeightCard})
                    }
                    else if(oneHeightCard){
                        setHeight({one: oneHeightCard, two: 0})
                    }
                }
                else if(oneHeightCard){
                    setHeight({one: oneHeightCard, two: 0})
                }
            }
        }
    }

    useEffect(() => {
        heightOneRow()
        window.addEventListener('resize', heightOneRow)
        
        return () => {
            window.removeEventListener('resize', heightOneRow)
        }
    }, [contentRef.current])

    return (
        <section className={classes.container}>
            <h3>Меня могут порекомендовать</h3>

            <section ref={contentRef} className={classes.content}>
                {recommendations.map(recommendation => 
                    <RecommendationCard 
                        key={recommendation.slug}
                        recommendation={recommendation} 
                    />
                )}
            </section>
        </section>
    )
}