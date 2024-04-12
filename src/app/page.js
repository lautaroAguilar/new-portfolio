import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <h1>Hello i'm Lautaro</h1>
      </header>
    </main>
  );
}
