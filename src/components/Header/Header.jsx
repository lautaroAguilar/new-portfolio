"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Header.module.css";
import { Roboto} from "next/font/google";
export const roboto = Roboto({
  weight: ["100","300", "700", "900",],
  subsets: ["latin"],
  style: ["italic", "normal"]
});
export default function Header() {
  const { changeSection } = useAppContext();
  return (
    <header className={styles.header}>
      <div className={styles.texts}>
        <h1 className={`${roboto.className} ${styles.title}`}>Lautaro Aguilar</h1>
        <p className={styles.description}>Web Developer</p>
      </div>
      <div className={styles.links}>
        <ul>
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
      </div>
    </header>
  );
}
