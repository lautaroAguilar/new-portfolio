"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Section.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
export default function Section() {
  const { sectionState, isExiting } = useAppContext();
  const [animationClass, setAnimationClass] = useState("");
  const [currentSection, setCurrentSection] = useState(null);

  /* falta ajustar para que en la primer carga no me haga la animacion */
  useEffect(() => {
    if (isExiting) {
      setAnimationClass(styles.fade_out_left);
      setTimeout(() => {
        setCurrentSection(null); // Limpia la sección durante la animación de salida
      }, 500);
    } else if (sectionState) {
      const timer = setTimeout(() => {
        setCurrentSection(sectionState);
        setAnimationClass(styles.fade_in_right);
      }, 100); // Un pequeño retraso antes de aplicar la animación de entrada
      return () => clearTimeout(timer);
    }
  }, [sectionState, isExiting]);
  return (
    <>
      {currentSection === "Inicio" && (
        <div className={`${styles.container} ${animationClass}`}>
          <p className={` ${styles.description}`}>
            Hola soy Lautaro, crecí en Buenos Aires. Cuando era chico me
            gustaban los videojuegos de resolver misterios, ahora de alguna u
            otra forma juego a resolver problemas desarrollando proyectos en la
            web.
          </p>
        </div>
      )}
      {currentSection === "Proyectos" && (
        <div className={`${styles.container} ${animationClass}`}>
          <ProjectsSection/>
        </div>
      )}
      {currentSection === "Contacto" && (
        <div className={`${styles.container} ${animationClass}`}>
          <Link
            className={`${styles.description} ${styles.shining}`}
            target="_blank"
            href={
              "mailto:eley.aramis@gmail.com?subject=Contacto desde el portfolio de Lautaro&body=Escriba su mensaje aquí"
            }
          >
            Lautaro Aguilar
          </Link>
        </div>
      )}
    </>
  );
}
