import { useMemo } from "react"


export function useSearchItems<T extends {name: string, selected?: boolean}> (value: string, items: T[]) {
    return useMemo(() => {
        return items.filter(item =>
                item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            )
    }, [value, items])
}