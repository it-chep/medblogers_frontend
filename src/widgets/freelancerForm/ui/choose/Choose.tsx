import { FC } from "react";
import classes from './choose.module.scss'

interface IProps {
    setAgencyRepresentative: (agencyRepresentative: boolean) => void;
    agencyRepresentative: boolean;
    setError: () => void; 
}

export const Choose: FC<IProps> = ({agencyRepresentative, setAgencyRepresentative, setError}) => {

    const onChoose = (agencyRepresentative: boolean) => {
        setAgencyRepresentative(agencyRepresentative)
        setError()
    }

    return (
        <section className={classes.container}>
            <section 
                className={classes.button + (!agencyRepresentative ? ` ${classes.active}` : '')}
                onClick={() => onChoose(false)} 
            >
                Фрилансер
            </section>
            <section 
                className={classes.button + (agencyRepresentative ? ` ${classes.active}` : '')}
                onClick={() => onChoose(true)} 
            >
                Представитель агенства
            </section>
        </section>
    )
}