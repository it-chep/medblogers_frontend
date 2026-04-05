import { IPromoOfferCategory, promoOffersService } from '@/src/entities/promoOffer';
import { FilterCategoryRow } from '@/src/features/filterCategoryRow';
import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'

const getData = async () => {
    let categories: IPromoOfferCategory[] | null = null;
    let allCount: number | null = null;
    try{
        const {cooperationTypes: categoriesRes, all: allCountRes} = await promoOffersService.getCategories()
        categories = categoriesRes;
        allCount = allCountRes;
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return {categories, allCount}
}

export default async function FilterPromoOffers() {

    const {categories, allCount} = await getData()

    if(!categories || (allCount === null)){
        return <></>
    }

    return (
        <FilterCategoryRow
            all={allCount} 
            categories={categories.map(c => ({...c, count: c.offersCount}))} 
            labelSearchParams='coop_type'
        />
    )
}