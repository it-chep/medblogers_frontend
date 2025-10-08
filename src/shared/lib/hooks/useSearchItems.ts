import { useMemo } from "react";
import { IItem } from "../../model/types";



export const useSearchItems = (value: string, items: IItem[], selectedItems: number[]) => {
    const filteredItems = useMemo(() => {
        const targetItems = items.filter(item => 
            item.name.toLowerCase().includes(value.toLowerCase()) && 
            !selectedItems.includes(item.id)
        );
        return targetItems;
    }, [value, items, selectedItems]);
    
    return filteredItems
}
