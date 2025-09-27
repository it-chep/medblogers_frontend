import ReduxProvider from "@/src/app/store/StoreProvider";
import { FC } from "react";
import { ActiveFiltersLoading } from "./ActiveFiltersCheck";

export const ActiveFiltersFreelancersLayout: FC = () => {

    return (
        <ReduxProvider>
           <ActiveFiltersLoading />
        </ReduxProvider>
    )
}