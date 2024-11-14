"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import Typewriter from "../Typewriter";
export const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
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
  const words = ["Desarrollador Frontend", "Diseñador Web", "Autodidacta"];

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.texts}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className={`${anton.className} ${styles.title}`}
          variants={item}
        >
          <Typewriter words={words} />
        </motion.h2>
        <motion.p className={styles.description} variants={item}>
          Lautaro Aguilar
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
          whileHover={{
            translateX: 5,
            textShadow: "0 0 15px rgba(255, 255, 255, 1)",
            transition: { duration: 0.5 },
          }}
        >
          Inicio
        </motion.li>
        <motion.li
          className={styles.link}
          onClick={() => changeSection("Proyectos")}
          variants={item}
          whileHover={{
            translateX: 5,
            textShadow: "0 0 15px rgba(255, 255, 255, 1)",
            transition: { duration: 0.5 },
          }}
        >
          Proyectos
        </motion.li>
        <motion.li
          className={styles.link}
          onClick={() => changeSection("Contacto")}
          variants={item}
          whileHover={{
            translateX: 5,
            textShadow: "0 0 15px rgba(255, 255, 255, 1)",
            transition: { duration: 0.5 },
          }}
        >
          Contacto
        </motion.li>
      </motion.ul>
    </header>
  );
}
