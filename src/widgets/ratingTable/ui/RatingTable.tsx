"use client"

import { FC, useEffect, useState } from "react"
import classes from './ratingTable.module.scss'
import { doctorService, IRatingDoctor } from "@/src/entities/doctor"
import { LoaderContainer } from "@/src/shared/ui/loaderContainer"
import Image from "next/image"
import Link from "next/link"

export const RatingTable: FC = () => {
    const [doctors, setDoctors] = useState<IRatingDoctor[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const data = await doctorService.getRating()
                setDoctors(data.doctors ?? [])
            } catch (e) {
                console.error(e)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [])

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <section className={classes.headerPlace}>#</section>
                <section className={classes.headerPhoto}>Врач</section>
                <section className={classes.headerName}></section>
                <section className={classes.headerCoins}>MBC</section>
            </section>
            {
                isLoading
                    ?
                <section className={classes.loader}>
                    {[1, 2, 3, 4, 5].map(i => <LoaderContainer key={i} />)}
                </section>
                    :
                doctors.length === 0
                    ?
                <section className={classes.empty}>
                    Рейтинг пока пуст
                </section>
                    :
                doctors.map((doctor, index) => {
                    const isTop3 = index < 3
                    return (
                        <section
                            key={doctor.slug}
                            className={
                                classes.row + (isTop3 ? ` ${classes.rowTop3}` : '')
                            }
                        >
                            <section className={
                                classes.place + (isTop3 ? ` ${classes.placeTop3}` : '')
                            }>
                                {index + 1}
                            </section>
                            <section className={classes.photo}>
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={360}
                                    height={360}
                                    quality={90}
                                    style={{ objectFit: 'cover' }}
                                />
                            </section>
                            <section className={classes.info}>
                                <Link
                                    href={`/doctors/${doctor.slug}`}
                                    className={classes.name}
                                >
                                    {doctor.name}
                                </Link>
                                <section className={classes.meta}>
                                    {doctor.speciality?.name && (
                                        <span className={classes.speciality}>{doctor.speciality.name}</span>
                                    )}
                                    {doctor.speciality?.name && doctor.city?.name && (
                                        <span className={classes.separator}>·</span>
                                    )}
                                    {doctor.city?.name && (
                                        <span className={classes.city}>{doctor.city.name}</span>
                                    )}
                                </section>
                            </section>
                            <section className={classes.coins}>
                                {doctor.mbcCoins}
                            </section>
                        </section>
                    )
                })
            }
        </section>
    )
}
