import { Header } from './components/Header'
import styles from './App.module.css'
import { Card } from './components/Card'
import {challenges} from './21-days-challenges.json'
import { ThemeSwitchContext, ThemeSwitchProvider } from './contexts/ThemeSwitchContext'
import { useContext } from 'react'

export const App = () => {
  const theme = useContext(ThemeSwitchContext)

  return (
    <div className={styles.wrapper} data-theme={theme}>
      <Header/>

      <div className={styles.cards}>
        {challenges.map((challenge) => {
          return (
            <Card
              key={challenge.challengeId}
              challengeId={challenge.challengeId}
              challengeTitle={challenge.challengeTitle}
              challengeDescription={challenge.challengeDescription}
              challengeStack={challenge.challengeStack}
              link={challenge.link}
              button={challenge.button}
            />
          )
        })}
      </div>  
    </div>
  )
}