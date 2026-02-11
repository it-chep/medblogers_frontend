"use client"

import { FC, useEffect, useState } from "react";
import classes from './filterBlogs.module.scss'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IBlogCategory } from "@/src/entities/blog";

interface IProps {
    categories: IBlogCategory[];   
}

type TFullCategory = IBlogCategory & {selected: boolean}

export const FilterBlogsSelect: FC<IProps> = ({categories}) => {
    
    const searchParams = useSearchParams()
    const getCategoryIds = () => searchParams.getAll('category').map(c => +c)

    const setCategoriesSelect = (ids: number[]) => {
        if(ids.length){
            return [
                {
                    id: '0',
                    name: 'Все',
                    bgColor: '',
                    fontColor: '',
                    selected: false,
                }, ...categories.map(category => ({...category, selected: ids.includes(+category.id)}))
            ]
        }
        else{
            return [
                {
                    id: '0',
                    name: 'Все',
                    bgColor: '',
                    fontColor: '',
                    selected: true,
                }, ...categories.map(category => ({...category, selected: false}))
            ]
        }
    }

    const [fullCategories, setFullCategories] = useState<TFullCategory[]>(setCategoriesSelect(getCategoryIds()))

    const pathname = usePathname()
    const router = useRouter()

    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const onClick = (selected: TFullCategory) => {
        const newParams = new URLSearchParams(searchParams)

        if((+selected.id !== 0)){ 
            if(!selected.selected) // добавить категрию
                newParams.append('category', String(selected.id))
            else{
                newParams.delete('category', String(selected.id))
            }
        }
        else{
            newParams.delete('category')
        }
        setNewUrl(newParams)
    }

    useEffect(() => {
        const ids = searchParams.getAll('category').map(c => +c)
        setFullCategories(setCategoriesSelect(ids))
    }, [searchParams])

    return (
        <ul className={classes.list}>
            {fullCategories.map(category => 
                <li
                    key={category.id}
                    className={classes.item + (category.selected ? ` ${classes.selected}` : '')}         
                    onClick={() => onClick(category)}           
                >
                    {category.name}
                </li>
            )}
        </ul>
    )
}