import Image from "next/image";
import styles from "./page.module.css";
import Quiz from "@/Compoents/Quiz";


export default function Home() {
  return (
    <main className={styles.main}>
      <Quiz />
    </main>
  );
}
