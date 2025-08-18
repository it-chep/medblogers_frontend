import ReduxProvider from "@/src/app/store/StoreProvider";
import { FC } from "react";
import { Filters } from "./Filters";



export const FiltersLayout: FC = () => {

    return(
        <ReduxProvider>
            <Filters />
        </ReduxProvider>
    )
}