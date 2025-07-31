"use client"

import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { Filters, IFilter } from '@/src/widgets/filters'
import { ActiveFilters } from '@/src/widgets/activeFilters/ui/ActiveFilters'
import { useState } from 'react'
import { Statistics } from '@/src/widgets/statistics'
import { SearchDoctors } from '@/src/features/searchDoctors'



export default function HomePage() {

    const [filters, setFilters] = useState<IFilter | null>(null)

    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <Filters filters={filters} setFilters={setFilters} />
            </aside>
            <main className={classes.main}>
                <Statistics />
                <SearchDoctors />
                <ActiveFilters filters={filters} />
                <DoctorsAll />
            </main>
        </section>
    )
}