"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { Bodoni_Moda } from "next/font/google";
import { duration } from "@mui/material";
export const bodoni = Bodoni_Moda({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});
export default function Header() {
  const { changeSection } = useAppContext();

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        delay: 0.5,
      },
    },
  };
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.texts}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className={`${bodoni.className} ${styles.title}`}
          variants={item}
        >
          Lautaro Aguilar
        </motion.h1>
        <motion.p className={styles.description} variants={item}>
          Desarrollador Frontend
        </motion.p>
      </motion.div>
      <motion.ul
        className={styles.links}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li
          className={styles.link}
          onClick={() => changeSection("Inicio")}
          variants={item}
        >
          Inicio
        </motion.li>
        <motion.li
          className={styles.link}
          onClick={() => changeSection("Proyectos")}
          variants={item}
        >
          Proyectos
        </motion.li>
        <motion.li
          className={styles.link}
          onClick={() => changeSection("Contacto")}
          variants={item}
        >
          Contacto
        </motion.li>
      </motion.ul>
    </header>
  );
}
