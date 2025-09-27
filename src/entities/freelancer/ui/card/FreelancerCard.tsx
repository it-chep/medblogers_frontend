import { FC } from "react";
import classes from './freelancerCard.module.scss'
import { IFreelancer } from "../../model/types";
import { CardData } from "../cardData/CardData";


interface IProps{
    freelancer: IFreelancer;
}

export const FreelancerCard: FC<IProps> = ({freelancer}) => {
    

    return (
        <section className={classes.wrapper}>
            {
                <img 
                    className={classes.avatar} 
                    src={freelancer.image} 
                    height={300} 
                    width={300} 
                    alt="Фото врача" 
                />
            }
            <section className={classes.content}>
                <CardData freelancer={freelancer} />
            </section>
        </section>
    )
}