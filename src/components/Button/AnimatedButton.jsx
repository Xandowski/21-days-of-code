import styles from './AnimatedButton.module.css'
import { useState} from 'react'

export function AnimatedButton() {
  const [circle, setCircle] = useState(`${styles.circle}`)
  const [isClicked, setIsClicked] = useState(false)

  const handleAnimate = () => {
    if(isClicked) {
      setCircle(`${styles.circle} ${styles._circleRight} `)
      setIsClicked(false)
    }else {
      setCircle(`${styles.circle} ${styles._circle}`)
      setIsClicked(true)
    }
  }

  return (
    <button onClick={handleAnimate} className={styles.animatedBtn} data-js="animate-btn">
      <div className={circle} data-js="circle"></div>
    </button>
  )
}