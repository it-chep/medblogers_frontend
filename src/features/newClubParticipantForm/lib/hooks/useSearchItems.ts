import { useMemo } from "react";



export const useSearchItems = (value: string, items: string[], selectedItems: string[]) => {
    const filteredItems = useMemo(() => {
        if (!value) return [];
        
        const targetItems = items.filter(item => 
            item.toLowerCase().includes(value.toLowerCase()) && 
            !selectedItems.includes(item)
        );
        return targetItems;
    }, [value, items, selectedItems]);
    
    return filteredItems
}
