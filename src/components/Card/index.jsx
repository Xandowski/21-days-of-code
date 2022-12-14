import styles from './Card.module.css'
import { Button } from '../Button'
import { AnimatedButton } from '../Button/AnimatedButton'
import { ThemeSwitchButton } from '../Button/ThemeSwitchButton'
import HTMLLOGO from '../../assets/images/stack/html5.svg'
import CSSLOGO from '../../assets/images/stack/css3.svg'
import JSLOGO from '../../assets/images/stack/js.svg'
import GITLOGO from '../../assets/images/stack/git.svg'
import GITHUBLOGO from '../../assets/images/stack/github.svg'
import GlassmorphismBg from '../../assets/images/tim-foster-unsplash.jpg'
import { useState, useEffect } from 'react'

let countdownTimeout

export function Card({challengeId, challengeTitle, challengeDescription, challengeStack, link, button}) {
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function startStopCount() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive && counter >= 0) {
      countdownTimeout = setTimeout(() => {
        setCounter(counter + 1)
      }, 1000)
    }
  }, [isActive, counter])

  function resetCount() {
    setIsActive(false)
    setCounter(0)
    clearTimeout(countdownTimeout)
  }

  return (
    <>
      {
        challengeId  === '#06' ? (
          <div className={`${styles.card} ${styles.cardGlass} `}>
            <img src={GlassmorphismBg} alt="" className={styles.glassBg}/>
            <p className={`${styles.challengeId} ${styles.glass}`}>{challengeId}</p>

            <div className={`${styles.projectInfo} ${styles.glass} ${styles.glassInfo}`}>
              <h2>{challengeTitle}</h2>

              <p>{challengeDescription}</p>
            </div>

            <footer className={styles.cardFooter}>
              <div className={`${styles.stackGlass} ${styles.glass}`}>
                {challengeStack.map((tool, index) => {
                  return (
                    tool === 'html5' && <img key={index} src={HTMLLOGO} alt={`${tool} logo`}/>
                    || tool === 'css3' && <img key={index} src={CSSLOGO} alt={`${tool} logo`}/>
                    || tool === 'js' && <img key={index} src={JSLOGO} alt={`${tool} logo`}/>
                    || tool === 'git' && <img key={index} src={GITLOGO} alt={`${tool} logo`}/>
                    || tool === 'github' && <img key={index} src={GITHUBLOGO} alt={`${tool} logo`}/>
                  )
                })}
              </div>
              {button ? button == 'animated'&& ( <AnimatedButton/>) 
                || button == 'switch' && ( <ThemeSwitchButton/>) : 
                link && <Button link={link}/>
              }
            </footer>
          </div>
        ) : challengeTitle === 'Counter' ? (
          <div className={styles.card}>
            <p className={styles.challengeId}>{challengeId}</p>

            <div className={styles.projectInfo}>
              <h2>{challengeTitle}</h2>

              <p>{challengeDescription}</p>
              <p>{counter}</p>
            </div>

            <footer className={styles.cardFooter}>
              <div className="stack">
                {challengeStack.map((tool, index) => {
                  return (
                    tool === 'html5' && <img key={index} src={HTMLLOGO} alt={`${tool} logo`}/>
                    || tool === 'css3' && <img key={index} src={CSSLOGO} alt={`${tool} logo`}/>
                    || tool === 'js' && <img key={index} src={JSLOGO} alt={`${tool} logo`}/>
                    || tool === 'git' && <img key={index} src={GITLOGO} alt={`${tool} logo`}/>
                    || tool === 'github' && <img key={index} src={GITHUBLOGO} alt={`${tool} logo`}/>
                  )
                })}
              </div>
              <div className={styles.buttonsContainer}>
                <button onClick={startStopCount} className={styles.startCount}>Start</button>
                <button onClick={resetCount} className={styles.resetCount}>Reset</button>
              </div>
            </footer>
          </div>
        ): (
          <div className={styles.card}>
            <p className={styles.challengeId}>{challengeId}</p>

            <div className={styles.projectInfo}>
              <h2>{challengeTitle}</h2>

              <p>{challengeDescription}</p>
            </div>

            <footer className={styles.cardFooter}>
              <div className="stack">
                {challengeStack.map((tool, index) => {
                  return (
                    tool === 'html5' && <img key={index} src={HTMLLOGO} alt={`${tool} logo`}/>
                    || tool === 'css3' && <img key={index} src={CSSLOGO} alt={`${tool} logo`}/>
                    || tool === 'js' && <img key={index} src={JSLOGO} alt={`${tool} logo`}/>
                    || tool === 'git' && <img key={index} src={GITLOGO} alt={`${tool} logo`}/>
                    || tool === 'github' && <img key={index} src={GITHUBLOGO} alt={`${tool} logo`}/>
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
    </>
  )
}