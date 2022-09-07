import styles from './ThemeSwitchButton.module.css'

export function ThemeSwitchButton() {
  return (
    <button className={styles.themeSwitchBtn}>
      <img className="sun" src="/src/assets/images/sun.svg" alt="sun" data-js="sun"/>
      <img className="moon" src="/src/assets/images/moon.svg" alt="moon" data-js="moon"/>
    </button>
  )
}