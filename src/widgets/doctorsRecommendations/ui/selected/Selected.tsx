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

    const [use, setUse] = useState<boolean>(true)
    const [mobile, setMobile] = useState<boolean>(false)

    const additionalPercentage = 0.2;
    const speedInit = (recommendations.length + (recommendations.length * additionalPercentage)) / 30;  

    const [height, setHeight] = useState<{one: number, two: number}>({one: 0, two: 0})
    const [speed, setSpeed] = useState<number>(0)
    
    function checkUse() {
        if(window.innerWidth < 490){
            setUse(recommendations.length > 2)
            setMobile(true)
        }
        else{
            setUse(recommendations.length > 4)
            setMobile(false)
        }
    }

    useEffect(() => {
        if(height.one){
            setSpeed(speedInit)
        }
    }, [height])
    
    useEffect(() => {
        checkUse()

        window.addEventListener('resize', checkUse)
        
        return () => {
            window.removeEventListener('resize', checkUse)
        }
    }, [])

    return (
        <section 
            className={classes.container} 
            style={{height: speed ? 'auto' : 0, margin: speed ? (mobile ? '20px 16px' : '20px') : 0}}
        >
        {
            use
                ?
            <>
                <section className={classes.desctop}>
                    <OpenContainer
                        heightConst={(height.one === 0) ? 0 : (height.one + 75)} 
                        darkenHeightConst={0} 
                        speedSec={speed}
                    >
                        <RecommendationsContainer  
                            setHeight={setHeight}
                            recommendations={recommendations} 
                        />
                    </OpenContainer>
                </section>
                <section className={classes.mobile}>
                    <OpenContainer
                        heightConst={(height.one === 0) ? 0 : ((height.one + (height.two ? 20 + height.two : 0)) + 75)} 
                        darkenHeightConst={0} 
                        speedSec={speed * 4}
                    >
                        <RecommendationsContainer  
                            setHeight={setHeight}
                            recommendations={recommendations} 
                        />
                    </OpenContainer>
                </section>
            </>
                :
            <RecommendationsContainer 
                setHeight={setHeight}
                recommendations={recommendations} 
            />
        }
        </section>
    )
}