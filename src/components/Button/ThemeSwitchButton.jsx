import styles from './ThemeSwitchButton.module.css'
import { useContext, useState } from 'react'
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext'

export function ThemeSwitchButton() {
  const { light, toggleTheme } = useContext(ThemeSwitchContext)
  
  return (
    <button onClick={() => toggleTheme()} className={styles.themeSwitchBtn}>
      <img className={`${!light ? styles.sun : styles._sun}`} src="/src/assets/images/sun.svg" alt="sun"/>
      <img className={`${light ? styles._moon : styles.moon}`} src="/src/assets/images/moon.svg" alt="moon"/>
    </button>
  )
}