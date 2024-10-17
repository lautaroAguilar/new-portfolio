"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import { AnimatePresence, motion } from "framer-motion";

export default function Section() {
  const { sectionState, isExiting } = useAppContext();
  const [currentSection, setCurrentSection] = useState(null);

  const container = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isExiting) {
      setCurrentSection(null);
    } else if (sectionState) {
      setCurrentSection(sectionState);
    }
  }, [sectionState, isExiting]);
  return (
    <>
      <AnimatePresence>
        {currentSection === "Inicio" && (
          <motion.div
            className={`${styles.container}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <p className={` ${styles.description}`}>
              Hola soy Lautaro, crecí en Buenos Aires. Cuando era chico me
              gustaban los videojuegos de resolver misterios, ahora de alguna u
              otra forma juego a resolver problemas desarrollando proyectos en
              la web.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentSection === "Proyectos" && (
          <motion.div
            className={`${styles.container}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ProjectsSection />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentSection === "Contacto" && (
          <motion.div
            className={`${styles.container}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Link
              className={`${styles.description} ${styles.shining}`}
              target="_blank"
              href={
                "mailto:eley.aramis@gmail.com?subject=Contacto desde el portfolio de Lautaro&body=Escriba su mensaje aquí"
              }
            >
              Lautaro Aguilar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
