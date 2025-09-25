import { IFilterFreelancer } from '@/src/entities/filterFreelancer/model/types';
import classes from './freelancers.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { filterFreelancerService } from '@/src/entities/filterFreelancer/api/FilterFreelancerService';
import { FiltersFreelancersLayout } from '@/src/widgets/filtersFreelancers';

const getData = async () => {
    let filters: IFilterFreelancer | null = null;
    try{
        filters = await filterFreelancerService.getAll()
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return filters
}

export default async function FreelancersPage() {

    const filters = await getData()

    if(!filters){
        return <></>
    }

    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <section className={classes.filters}>
                    <FiltersFreelancersLayout forDesk={true} filters={filters} />
                </section>
            </aside>
            <main className={classes.main}>
             
            </main>
        </section>
    )
}