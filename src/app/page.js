"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Section from "@/components/Section/Section";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import ImageModal from "@/components/ImageModal/ImageModal";
import { useAppContext } from "@/context/appContext";
import Loading from "@/components/Loading/Loading";
export default function Home() {
  const { isOpen, images, closeModal } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className={`${styles.main}`}>
          <BackgroundAnimation />
          <Header />
          <section className={`${styles.section}`}>
            <Section />
          </section>
          <SocialMedia />
          {isOpen && <ImageModal images={images} onClose={closeModal} />}
        </main>
      )}
    </>
  );
}
