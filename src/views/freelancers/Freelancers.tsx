import classes from './freelancers.module.scss'
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { FiltersFreelancersLayout } from '@/src/widgets/filtersFreelancers';
import { SearchFreelancers } from '@/src/widgets/searchFreelancers';
import { filterFreelancerService, IFilterFreelancer } from '@/src/entities/filterFreelancer';
import { OpenFiltersModal } from '@/src/features/openFiltersModal';
import { StatisticsFreelancersLayout } from '@/src/widgets/statisticsFreelancers';
import { ActiveFiltersFreelancersLayout } from '@/src/widgets/activeFiltersFreelancers';
import { FreelancersAll } from '@/src/widgets/freelancers';
import { PaginationFreelancersWidget } from '@/src/widgets/paginationFreelancers';
import { BannerNewFreelancer } from '@/src/widgets/bannerNewFreelancer';
import Link from 'next/link';
import { ButtonDark } from '@/src/shared/ui/buttonDark';
import { env } from 'process';

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
                <BannerNewFreelancer />
                {
                    env.NEXT_PUBLIC_IS_FREELANCERS_DONE
                        &&
                    <Link href={'/'} className={classes.button}>
                        <ButtonDark><span className={classes.doctorsLink}>Перейти к базе врачей</span></ButtonDark>
                    </Link>
                }
                <section className={classes.filters}>
                    <FiltersFreelancersLayout forDesk={true} filters={filters} />
                </section>
            </aside>
            <main className={classes.main}>
                {/* <StatisticsFreelancersLayout /> */}
                <SearchFreelancers>
                    <OpenFiltersModal>
                        <FiltersFreelancersLayout filters={filters} forDesk={false} />
                    </OpenFiltersModal>
                </SearchFreelancers>
                <ActiveFiltersFreelancersLayout />
                <FreelancersAll />
                <PaginationFreelancersWidget />
            </main>
        </section>
    )
}