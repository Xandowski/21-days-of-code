import styles from './ThemeSwitchButton.module.css'
import { useContext, useState } from 'react'
import { ThemeSwitchContext } from '../../contexts/ThemeSwitchContext'
import SUN from '../../assets/images/sun.svg'
import MOON from '../../assets/images/moon.svg'

export function ThemeSwitchButton() {
  const { light, toggleTheme } = useContext(ThemeSwitchContext)
  
  return (
    <button onClick={() => toggleTheme()} className={styles.themeSwitchBtn}>
      {!light ? (<img src={SUN} alt="sun"/>)
        : <img src={MOON} alt="moon"/>
      }
    </button>
  )
}