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
import { IS_FREELANCERS_DONE } from '@/src/app/env/env'
import { BlogsTopLayout } from '@/src/widgets/blogsTop'
import { FAQ } from '@/src/widgets/FAQ'
import { CheckBlacklist } from '@/src/features/checkBlacklist'
import { Banner10 } from '@/src/widgets/banner'

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
            <Banner10 />
            <section className={classes.content}>
                <aside className={classes.aside}>
                    <BannerNewDoctor />
                    {
                        IS_FREELANCERS_DONE
                            &&
                        <Link href={'/helpers'} className={classes.button}>
                            <ButtonDark><span className={classes.helpersLink}>Перейти к базе помощников</span></ButtonDark>
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
            <section className={classes.checkBlacklist}>
                <section id="blacklist"></section>
                <CheckBlacklist />
            </section>
            <section className={classes.blogsTop}>
                <h2 className={classes.blogs}>Полезные статьи для блога</h2>
                <BlogsTopLayout />
            </section>
            <FAQ />
        </section>
    )
}