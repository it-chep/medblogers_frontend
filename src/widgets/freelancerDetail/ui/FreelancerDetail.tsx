import { FreelancerCard, freelancerService, IFreelancer } from "@/src/entities/freelancer";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";



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

    console.log(freelancer)

    if(!freelancer || freelancer.code === 2){
        return (
            notFound()
        )
    }

    return (
        <FreelancerCard freelancer={freelancer} />
    )
}