import { FC, Suspense } from "react";
import Statistics from "./Statistics";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import classes from './statistics.module.scss'


export const StatisticsFreelancersLayout: FC = () => {

    return (
        <Suspense fallback={<section className={classes.loader}><LoaderContainer /></section>}>
            <Statistics />
        </Suspense>
    )
}