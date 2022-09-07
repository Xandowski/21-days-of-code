import styles from './Header.module.css'

export function Header() {
  return (
    <header>
      <h1 className={styles.title}>21 Days of <span className={styles.code}>&lt;<span>Code </span>/&gt;</span></h1>
    </header>
  )
}