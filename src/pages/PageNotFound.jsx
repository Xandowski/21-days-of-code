import styles from '../assets/css/PageNotFound.module.css'
import errorImg from '../assets/images/404.svg'
import { Header } from '../components/Header'

export function PageNotFound() {
  return (
    <>
      <a className={styles.backBtn} href="/"> &lt; <span className={styles.text}>Voltar</span></a>

      <Header/>

      <div className={styles.wrapper}>
        <img className={styles.errorImg} src={errorImg} alt="404"/>

        <p className={styles.text}><span className={styles.code}>&lt;<span className={styles.text}>Page not found </span>/&gt;</span></p>
      </div>
    </>
  )
}