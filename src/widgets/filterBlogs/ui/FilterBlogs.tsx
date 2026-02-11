import { isDynamicServerError } from 'next/dist/client/components/hooks-server-context'
import { blogService, IBlogCategory, IBlogMiniature } from '@/src/entities/blog';
import { FilterBlogsSelect } from '@/src/features/filterBlogsSelect';

const getData = async () => {
    let categories: IBlogCategory[] | null = null;
    try{
        categories = await blogService.getCategories()
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return categories
}

export default async function FilterBlogs() {

    const categories = await getData()

    if(!categories){
        return <></>
    }

    return (
        <FilterBlogsSelect categories={categories} />
    )
}