import styles from './Button.module.css'
import { Link } from "react-router-dom"

export function Button({link}) {
  return (
    <>
      {link.includes("https") ? (
        <a className={styles.link} href={`${link}`} target="blank">View</a>
      ) : (
        <Link className={styles.link} to={`/${link}`}>View</Link>
      )}
    </>
  )
}

