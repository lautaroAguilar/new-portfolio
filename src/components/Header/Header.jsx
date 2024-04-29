"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Header.module.css";
import { Playfair_Display } from "next/font/google";
export const playfair = Playfair_Display({
  weight: ["400", "700", "900",],
  subsets: ["latin"],
});
export default function Header() {
  const { changeSection } = useAppContext();
  return (
    <header className={styles.header}>
      <div className={styles.texts}>
        <h1 className={`${playfair.className} ${styles.title}`}>Lautaro Aguilar</h1>
        <p className={styles.description}>WEB DEVELOPER</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.link} onClick={() => changeSection("Inicio")}>
            INICIO
          </li>
          <li className={styles.link} onClick={() => changeSection("Contacto")}>
            CONTACTO
          </li>
          <li
            className={styles.link}
            onClick={() => changeSection("Proyectos")}
          >
            PROYECTOS
          </li>
        </ul>
      </div>
    </header>
  );
}
