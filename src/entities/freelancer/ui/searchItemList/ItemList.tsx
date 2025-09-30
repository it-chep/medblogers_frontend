import { FC } from "react";
import classes from './itemList.module.scss'
import { Item } from "../searchItem/Item";
import { ItemSelected } from "../searchItemSelected/ItemSelected";
import { ICityFreelancer, ISpecialityFreelancer } from "../../model/types";

interface IProps {
    labelName: 'Города' | 'Специальности';
    items: ICityFreelancer[] | ISpecialityFreelancer[];
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
                        item={item} 
                        label={labelNameSlug}
                    />
                </ItemSelected>
            )}
        </section>
    )
} 