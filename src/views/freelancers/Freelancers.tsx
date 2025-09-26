import classes from './freelancers.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { FiltersFreelancersLayout } from '@/src/widgets/filtersFreelancers';
import { SearchFreelancers } from '@/src/widgets/searchFreelancers';
import { filterFreelancerService, IFilterFreelancer } from '@/src/entities/filterFreelancer';
import { OpenFiltersModal } from '@/src/features/openFiltersModal';

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
                <SearchFreelancers>
                    <OpenFiltersModal>
                        <FiltersFreelancersLayout filters={filters} forDesk={false} />
                    </OpenFiltersModal>
                </SearchFreelancers>
            </main>
        </section>
    )
}