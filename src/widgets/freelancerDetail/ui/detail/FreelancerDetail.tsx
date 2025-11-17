import { FreelancerCard, freelancerService, IFreelancer } from "@/src/entities/freelancer";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import classes from './detail.module.scss'
import { PriceList } from "../priceList/PriceList";

interface IProps{
    slug: string;
}

const getData = async (slug: string) => {
    let freelancer: IFreelancer | null = null;
    try{
        freelancer = await freelancerService.get(slug) 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return freelancer
}

export async function FreelancerDetail(props: IProps){

    const freelancer = await getData(props.slug)

    if(!freelancer || freelancer.code === 2){
        return (
            notFound()
        )
    }

    return (
        <section className={classes.container}>
            <FreelancerCard 
                freelancer={freelancer} 
            />
            {
                freelancer.priceList.length > 0
                    ?
                <PriceList 
                    priceCategory={freelancer.priceCategory} 
                    priceList={freelancer.priceList} 
                />
                    :
                <></>
            }
        </section>
    )
}