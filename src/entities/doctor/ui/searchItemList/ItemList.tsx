import { FC } from "react";
import classes from './itemList.module.scss'
import { Item } from "../searchItem/Item";
import markIcon from '@/src/shared/lib/assets/mark.png'
import specialityIcon from '@/src/shared/lib/assets/speciality.png'
import { ItemSelected } from "../searchItemSelected/ItemSelected";
import { ICityDoctor, ISpecialityDoctor } from "../../model/types";

interface IProps {
    labelName: 'Города' | 'Специальности';
    items: ICityDoctor[] | ISpecialityDoctor[];
    setOpen: (open: boolean) => void;
}

export const ItemList: FC<IProps> = ({labelName, items, setOpen}) => {

    const labelNameSlug = labelName === 'Города' ? 'cities' : 'specialities'

    return (
        <section className={classes.container}>   
            <h4>{labelName}</h4>
            {items.map((item, ind) => 
                <ItemSelected 
                    setOpen={setOpen}
                    labelUrl={labelNameSlug}
                    id={item.id}
                    key={ind}
                >
                    <Item 
                        icon={labelName === 'Города' ? markIcon.src : specialityIcon.src} 
                        item={item} 
                        label={labelNameSlug}
                    />
                </ItemSelected>
            )}
        </section>
    )
} 