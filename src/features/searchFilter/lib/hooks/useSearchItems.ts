import { IItemFilter } from "@/src/entities/filter"
import { useMemo } from "react"



export function useSearchItems<T extends {name: string}> (value: string, items: T[]) {
    return useMemo(() => {
        return items.filter(item =>
                item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            )
    }, [value, items])
}