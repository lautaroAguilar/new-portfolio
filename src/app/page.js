import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Section from "@/components/Section/Section";
export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundAnimation/>
      <Header />
      <section className={styles.section}>
        <Section/>
      </section>
    </main>
  );
}
