import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Section from "@/components/Section/Section";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import StickyManAnimation from "@/components/StickMan/StickMan";
export default function Home() {
  return (
    <main className={`${styles.main} ${styles.background}`}>
      <BackgroundAnimation/>
      <Header />
      <section className={`${styles.section}`}>
        <Section/>
      </section>
      <SocialMedia/>
      {/* <StickyManAnimation/> */}
    </main>
  );
}
