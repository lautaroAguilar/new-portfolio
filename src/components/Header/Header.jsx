'use client'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Lautaro Aguilar</h1>
        <p>
            Web Developer.
        </p>
      </div>
      <div className={styles.links}>
        <Link href="/">Inico</Link>
        <Link href="/about">Sorbre mí</Link>
        <Link href="/work">Trabajos</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </header>
  )
}

