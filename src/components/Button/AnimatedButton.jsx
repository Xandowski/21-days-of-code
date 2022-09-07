import styles from './AnimatedButton.module.css'

export function AnimatedButton() {
  const handleAnimate = (e) => {
    e.target.classList.toggle('_animate')
  }

  return (
    <button onClick={handleAnimate} className={styles.animatedBtn} data-js="animate-btn">
      <div className={styles.circle} data-js="circle"></div>
    </button>
  )
}