"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Header.module.css";
import { Bodoni_Moda} from "next/font/google";
export const bodoni = Bodoni_Moda({
  weight: ["400", "700", "900",],
  subsets: ["latin"],
  style: ["italic", "normal"]
});
export default function Header() {
  const { changeSection } = useAppContext();
  return (
    <header className={styles.header}>
      <div className={styles.texts}>
        <h1 className={`${bodoni.className} ${styles.title}`}>Lautaro Aguilar</h1>
        <p className={styles.description}>Web Developer</p>
      </div>
        <ul className={styles.links}>
          <li className={styles.link} onClick={() => changeSection("Inicio")}>
            Inicio
          </li>
          <li className={styles.link} onClick={() => changeSection("Contacto")}>
            Contacto
          </li>
          <li
            className={styles.link}
            onClick={() => changeSection("Proyectos")}
          >
            Proyectos
          </li>
        </ul>
    </header>
  );
}
