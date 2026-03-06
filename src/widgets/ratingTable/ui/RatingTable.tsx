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
                    {[1, 2, 3].map(i => 
                        <section key={i} className={classes.loaderItem}>
                            <LoaderContainer />
                        </section>
                    )}
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
                        <Link
                            href={`/doctors/${doctor.slug}`}
                            key={doctor.slug}
                            className={
                                classes.row + (isTop3 ? ` ${classes.rowTop3}` : '')
                            }
                        >
                            <section className={
                                classes.place + (isTop3 ? ` ${classes.placeTop3}` : '')
                            }>
                                {index + 1111}
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
                                <section
                                    className={classes.name}
                                >
                                    {doctor.name}
                                </section>
                                <section className={classes.meta}>
                                    {doctor.speciality?.name && (
                                        <span className={classes.speciality}>{doctor.speciality.name}</span>
                                    )}
                                    {doctor.city?.name && (
                                        <section className={classes.city}>
                                            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 6.37817C12.9935 7.62913 12.6539 8.73216 12.1132 9.77972C11.4051 11.1509 10.4411 12.3362 9.37568 13.4439C8.65174 14.1974 7.87756 14.8973 7.05406 15.5427C6.64371 15.8644 6.35804 15.869 5.94676 15.5427C4.2309 14.1789 2.69743 12.6432 1.48684 10.8106C0.811289 9.78896 0.287415 8.69795 0.0901478 7.4775C-0.202962 5.65977 0.220416 4.0103 1.33516 2.54761C2.30754 1.27261 3.59444 0.443254 5.17444 0.140914C7.59096 -0.322303 9.66692 0.358192 11.3353 2.15744C12.4491 3.3594 12.9739 4.811 13 6.37817ZM6.49203 9.32482C8.08878 9.32852 9.38777 8.04335 9.38777 6.45953C9.3887 4.87664 8.08971 3.585 6.49669 3.585C4.9111 3.585 3.61491 4.87017 3.61119 6.44566C3.60932 8.03595 4.89435 9.32112 6.49203 9.32482Z" fill="#2D99FC"/>
                                            </svg>
                                            {doctor.city.name}
                                        </section>
                                    )}
                                </section>
                            </section>
                            <section className={classes.coins}>
                                {doctor.mbcCoins}
                            </section>
                        </Link>
                    )
                })
            }
        </section>
    )
}
