import classes from "./page.module.scss";
import {DoctorsAll} from "@/src/widgets/doctors";

export default function Home() {
    return (
        <section className={classes.page + ' wrapper_main'}>

            <aside className={classes.aside}>
                FILTERS
            </aside>
            <main className={classes.main}>
                <section>STATISTICS</section>
                <section>SEARCH</section>
                <DoctorsAll />
            </main>
        </section>
  );
}
