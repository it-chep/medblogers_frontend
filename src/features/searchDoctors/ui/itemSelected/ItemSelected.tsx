import { FC, PropsWithChildren } from "react";
import classes from './itemSelected.module.scss'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { clearParams } from "@/src/shared/lib/helpers/clearParams";

interface IProps{
    labelUrl: 'city' | 'speciality'
    id: number;
    setOpen: (open: boolean) => void;
}

export const ItemSelected: FC<IProps & PropsWithChildren> = ({labelUrl, id, setOpen, children}) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const onSelected = () => {  
        const params = new URLSearchParams(searchParams)
        clearParams(params)
        params.set(labelUrl, String(id))
        const newUrl = `${pathname}?${params.toString()}`
        setOpen(false)
        router.push(newUrl)
    }

    return (
        <section onClick={onSelected} className={classes.wrapper}>
            {children}
        </section>
    )
}