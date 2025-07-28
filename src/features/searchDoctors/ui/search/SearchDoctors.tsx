"use client"

import { FC, useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { MyModal } from "@/src/shared/ui/myModal";
import classes from './searchDoctors.module.scss'


export const SearchDoctors: FC = () => {

    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)

    return (
        <section className={classes.wrapper}>
            <SearchInput onFocus={onOpen} />
            <MyModal open={open} setOpen={setOpen}>
                <section className={classes.list}>результаты поиска</section>
            </MyModal>
        </section>
    )
}