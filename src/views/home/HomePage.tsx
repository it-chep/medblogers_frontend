import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { OpenFiltersModal } from '@/src/features/openFiltersModal'
import { BannerNewDoctor } from '@/src/widgets/bannerNewDoctor'
import { FiltersLayout } from '@/src/widgets/filters'
import { ActiveFiltersLayout } from '@/src/widgets/activeFilters'
import { Sort } from '@/src/features/sort'
import StatisticsLayout from '@/src/widgets/statistics'
import { PaginationWidget } from '@/src/widgets/pagination'
import { filterService, IFilter } from '@/src/entities/filter'
import { SearchDoctors } from '@/src/widgets/searchDoctors'
import Link from 'next/link'
import { ButtonDark } from '@/src/shared/ui/buttonDark'
import { env } from 'process'

const getData = async () => {
    let filters: IFilter | null = null;
    try{
        filters = await filterService.getAll()
    }
    catch(e){
        console.log(e)
    }
    return filters
}

export default async function HomePage() {

    const filters = await getData()

    if(!filters){
        return <></>
    }

    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <BannerNewDoctor />
                {
                    env.NEXT_PUBLIC_IS_FREELANCERS_DONE
                        &&
                    <Link href={'/work'} className={classes.button}>
                        <ButtonDark>Нанять фрилансеров</ButtonDark>
                    </Link>
                }
                <section className={classes.filters}>
                    <FiltersLayout forDesk={true} filters={filters} />
                </section>
            </aside>
            <main className={classes.main}>
                <StatisticsLayout />
                <SearchDoctors>
                    <OpenFiltersModal>
                        <FiltersLayout filters={filters} forDesk={false} />
                    </OpenFiltersModal>
                </SearchDoctors>
                <Sort />
                <ActiveFiltersLayout />
                <DoctorsAll />
                <PaginationWidget />
            </main>
        </section>
    )
}