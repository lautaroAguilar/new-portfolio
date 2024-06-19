"use client"
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Section from "@/components/Section/Section";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import ImageModal from "@/components/ImageModal/ImageModal";
import { useAppContext } from "@/context/appContext";
export default function Home() {
  const { isOpen, images, closeModal } = useAppContext();
  return (
    <main className={`${styles.main} ${styles.background}`}>
      <BackgroundAnimation />
      <Header />
      <section className={`${styles.section}`}>
        <Section />
      </section>
      <SocialMedia />
      {isOpen && <ImageModal images={images} onClose={closeModal} />}
    </main>
  );
}
