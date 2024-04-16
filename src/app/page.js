import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundAnimation/>
      <Header />
      <section className={styles.section}>
        <h1>otros contenidos</h1>
      </section>
    </main>
  );
}
