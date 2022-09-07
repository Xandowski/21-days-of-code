import { Header } from './components/Header'
import styles from './App.module.css'
import { Card } from './components/Card'
import {challenges} from './21-days-challenges.json'

export const App = () => {
  return (
    <div className={styles.wrapper}>
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