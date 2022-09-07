import styles from './HelloWorld.module.css'

export function HelloWorld() {
  return (
    <div className={styles.wrapperHelloWorld}>
      <a className={styles.backBtn} href="/"> &lt; <span className={styles.text}>Voltar</span></a>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  )
}