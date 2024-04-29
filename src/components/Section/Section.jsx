"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Section.module.css";
import { playfair } from "../Header/Header";
export default function Section() {
  const { sectionState } = useAppContext();

  return (
    <>
      {sectionState === "Inicio" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            ACÁ VOY A ESCRIBIR UNAS COSAS RANDOM SOLO PARA VER COMO QUEDA LA
            TIPOGRAFIA XD
          </p>
        </div>
      )}
      {sectionState === "Proyectos" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            ACÁ VOY A ESCRIBIR UNAS COSAS RANDOM SOLO PARA VER COMO QUEDA LA
            TIPOGRAFIA XD
          </p>
        </div>
      )}
      {sectionState === "Contacto" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            ACÁ VOY A ESCRIBIR UNAS COSAS RANDOM SOLO PARA VER COMO QUEDA LA
            TIPOGRAFIA XD
          </p>
        </div>
      )}
    </>
  );
}
