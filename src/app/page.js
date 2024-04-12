import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <Header />
      <section className={styles.section}>
        <h1>otros contenidos</h1>
      </section>
    </main>
  );
}
