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
import { BlogsTopLayout } from '@/src/widgets/blogsTop'
import { FAQ } from '@/src/widgets/FAQ'
import { CheckBlacklist } from '@/src/features/checkBlacklist'
import { Banners, BannersMobile, SwitchBanner, TouchSwitchBanner } from '@/src/features/switchBanner'

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
            <section className={classes.content}>
                <aside className={classes.aside}>
                    <BannerNewDoctor />
                    <section className={classes.filters}>
                        <FiltersLayout forDesk={true} filters={filters} />
                    </section>
                </aside>
                <main className={classes.main}>
                    <section className={classes.banners}>
                        <SwitchBanner banners={Banners} />
                    </section>

                    <section className={classes.bannersMobile}>
                        <TouchSwitchBanner banners={BannersMobile} />
                    </section>
                    <section className={classes.wrap}>
                        <section className={classes.statisticsDesk}>
                            <StatisticsLayout />
                        </section>
                        <SearchDoctors>
                            <OpenFiltersModal>
                                <FiltersLayout filters={filters} forDesk={false} />
                            </OpenFiltersModal>
                        </SearchDoctors>
                        <Sort />
                        <ActiveFiltersLayout />
                        <DoctorsAll />
                        <PaginationWidget />
                    </section>
                </main>
            </section>
            <section className={classes.checkBlacklist}>
                <section id="black_list_scroll"></section>
                <section className={classes.blacklist}>
                    <CheckBlacklist info />
                </section>
            </section> 
            <section className={classes.blogsTop}>
                <h2 className={classes.blogs}>Полезные статьи для блога</h2>
                <section className={classes.sign}>
                    Есть идея для статьи? <a href='https://t.me/m/FIqVfvb9ZmEy' target="_blank">Напишите нам</a>
                </section>
                <BlogsTopLayout />
            </section>
            <FAQ />
        </section>
    )
}