import { FC } from "react";
import classes from './choose.module.scss'

interface IProps {
    setAgencyRepresentative: (agencyRepresentative: boolean) => void;
    agencyRepresentative: boolean;
}

export const Choose: FC<IProps> = ({agencyRepresentative, setAgencyRepresentative}) => {


    return (
        <section className={classes.container}>
            <section 
                className={classes.button + (!agencyRepresentative ? ` ${classes.active}` : '')}
                onClick={() => setAgencyRepresentative(false)} 
            >
                Фрилансер
            </section>
            <section 
                className={classes.button + (agencyRepresentative ? ` ${classes.active}` : '')}
                onClick={() => setAgencyRepresentative(true)} 
            >
                Представитель агенства
            </section>
        </section>
    )
}