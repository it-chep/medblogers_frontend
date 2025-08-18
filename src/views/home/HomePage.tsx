
import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { Statistics } from '@/src/widgets/statistics'
import { SearchDoctors } from '@/src/features/searchDoctors'
import { OpenFiltersModal } from '@/src/features/openFiltersModal'
import { BannerNewDoctor } from '@/src/widgets/bannerNewDoctor'
import { FiltersLayout } from '@/src/widgets/filters'
import { ActiveFiltersLayout } from '@/src/widgets/activeFilters'



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
                <Statistics />
                {/* <SearchDoctors>
                    <OpenFiltersModal>
                        <Filters mobile={true} filters={filters} setFilters={setFilters} />
                    </OpenFiltersModal>
                </SearchDoctors> */}
                <ActiveFiltersLayout />
                <DoctorsAll />
            </main>
        </section>
    )
}