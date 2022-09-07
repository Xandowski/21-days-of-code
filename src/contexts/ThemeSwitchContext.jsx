import { createContext, ReactNode, useState, useLayoutEffect } from 'react'
import { darkTheme, lightTheme } from '../theme'

export const ThemeSwitchContext = createContext({
  light: false,
  toggle: () => {}
})

export function ThemeSwitchProvider({ children }) {
  const [light, setLight] = useState(false)

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('lightTheme');
    
    if (lastTheme === 'true') {
      setLight(true);
      applyTheme(lightTheme);
    }

    if (!lastTheme || lastTheme === 'false') {
      setLight(false);
      applyTheme(darkTheme);
    } 
  }, [light])

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }

  const toggleTheme = () => {
    setLight(!light);
    window.localStorage.setItem('lightTheme', !light);
  }

  return (
    <ThemeSwitchContext.Provider
      value={{
        light, toggleTheme
      }}
    >
      {children}
    </ThemeSwitchContext.Provider>
  )
}