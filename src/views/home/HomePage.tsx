"use client"

import { DoctorsAll } from '@/src/widgets/doctors'
import classes from './home.module.scss'
import { Filters } from '@/src/widgets/filters'
import { ActiveFilters } from '@/src/widgets/activeFilters/ui/ActiveFilters'
import { IFilter } from '@/src/entities/filter'
import { useState } from 'react'



export default function HomePage() {

    const [filters, setFilters] = useState<IFilter | null>(null)

    return (
        <section className={classes.page + ' wrapper_main'}>
            <aside className={classes.aside}>
                <Filters filters={filters} setFilters={setFilters} />
            </aside>
            <main className={classes.main}>
                <section>STATISTICS</section>
                <section>SEARCH</section>
                <ActiveFilters filters={filters} />
                <DoctorsAll />
            </main>
        </section>
    )
}