import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { blogService, IBlogCategory } from '@/src/entities/blog';
import { FilterCategoryRow } from '@/src/features/filterCategoryRow';

const getData = async () => {
    let categories: IBlogCategory[] | null = null;
    let allBlogsCount: number | null = null;
    try{
        const {categories: categoriesRes, allBlogsCount: allBlogsCountRes} = await blogService.getCategories()
        categories = categoriesRes;
        allBlogsCount = allBlogsCountRes;
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return {categories, allBlogsCount}
}

export default async function FilterBlogs() {

    const {categories, allBlogsCount} = await getData()

    if(!categories || !allBlogsCount){
        return <></>
    }

    return (
        <FilterCategoryRow
            all={allBlogsCount} 
            categories={categories.map(c => ({...c, count: String(c.blogsCount)}))} 
            labelSearchParams='category'
        />
    )
}