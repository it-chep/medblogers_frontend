import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { SearchDoctors } from '@/src/features/searchDoctors'
import { OpenFiltersModal } from '@/src/features/openFiltersModal'
import { BannerNewDoctor } from '@/src/widgets/bannerNewDoctor'
import { FiltersLayout } from '@/src/widgets/filters'
import { ActiveFiltersLayout } from '@/src/widgets/activeFilters'
import { Sort } from '@/src/features/sort'
import StatisticsLayout from '@/src/widgets/statistics'
import { PaginationWidget } from '@/src/widgets/pagination'


export default function HomePage() {

    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <BannerNewDoctor />
                <section className={classes.filters}>
                    <FiltersLayout />
                </section>
            </aside>
            <main className={classes.main}>
                <StatisticsLayout />
                <SearchDoctors>
                    <OpenFiltersModal>
                        <FiltersLayout />
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