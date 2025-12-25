import { FC } from "react";
import classes from './title.module.scss'
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";

interface IProps {
    pathname: string;
}

export const TitleWrap: FC<IProps> = ({pathname}) => {

    const isFreelancer = (pathname.includes('helpers') || pathname.includes('freelancer')) && !(pathname.includes('blogs'))

    const isH = (pathname === '/') || (pathname === '/helpers')

    return (
        <section className={classes.mainTitle + (isFreelancer ? ` ${classes.freelancer}` : '')}>
            {
                isH
                    ?
                <>
                    <h1 className={classes.title}>
                        <Title isFreelancer={isFreelancer} />
                    </h1>
                    <h2 className={classes.desc}>  
                        <SubTitle isFreelancer={isFreelancer} />
                    </h2>   
                </>
                    :
                <>
                    <section className={classes.title}>
                        <Title isFreelancer={isFreelancer} />
                    </section>
                    <section className={classes.desc}>
                        <SubTitle isFreelancer={isFreelancer} />
                    </section>
                </>
            }
        </section>
    )
}