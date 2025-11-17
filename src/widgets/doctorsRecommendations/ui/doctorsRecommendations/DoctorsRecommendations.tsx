import { freelancerService, IRecommendation } from "@/src/entities/freelancer";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import classes from './recommendations.module.scss'
import { Selected } from "../selected/Selected";

interface IProps{
    slug: string;
}

const getData = async (slug: string) => {
    let recommendations: IRecommendation[] | null = null;
    try{
        recommendations = await freelancerService.getRecommendations(slug) 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return recommendations
}

export async function DoctorsRecommendations(props: IProps) {
    
    const recommendations = await getData(props.slug)
    
    if(!recommendations){
        return (
            notFound()
        )
    }
    
    if(!recommendations.length){
        return (<></>)
    }

    return (
        <section className={classes.container}>
            <Selected recommendations={recommendations} />
        </section>
    )
}