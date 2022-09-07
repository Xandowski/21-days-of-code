import styles from './Card.module.css'
import { Button } from '../Button'
import { AnimatedButton } from '../Button/AnimatedButton'
import { ThemeSwitchButton } from '../Button/ThemeSwitchButton'

export function Card({challengeId, challengeTitle, challengeDescription, challengeStack, link, button}) {
  return (
    <div className={styles.card}>
      <p className={styles.challengeId}>{challengeId}</p>

      <div className={styles.projectInfo}>
        <h2>{challengeTitle}</h2>

        <p>{challengeDescription}</p>
      </div>

      <footer className={styles.cardFooter}>
        <div className="stack">
          {challengeStack.map((tool) => {
            return (
              <img src={`/src/assets/images/stack/${tool}.svg`} alt={`${tool} logo`}/>
            )
          })}
        </div>
        {button ? button == 'animated'&& ( <AnimatedButton/>) 
          || button == 'switch' && ( <ThemeSwitchButton/>) : 
          link && <Button link={link}/>
        }
      </footer>
    </div>
  )
}