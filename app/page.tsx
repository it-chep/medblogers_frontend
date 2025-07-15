import styles from "./page.module.css";
import {MyButton} from "@/src/shared/ui/myButton";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <MyButton>Подробнее</MyButton>

            </main>
        </div>
  );
}
