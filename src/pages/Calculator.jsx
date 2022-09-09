import { useState } from 'react'
import styles from '../assets/css/Calculator.module.css'

export function Calculator() {
  const [visorValue, setVisorValue] = useState(0)

  const handleClickC = () =>{
    setVisorValue(0)
  }

  const handleClickNumber = (e) => {
    if(visorValue === 0) {
      setVisorValue(e.target.value)
    }else{
      setVisorValue(visorValue + e.target.value)
    }
  }

  const isLastItemAnOperation = (value) => {
    const operations = ['+', '-', 'x', '÷', '%']
    const lastItem = value.split('').pop()
    return operations.some((operator) => {
      return operator === lastItem
    })
  }

  const removeLastItemIfItIsAnOperator = (value) => {
    if (isLastItemAnOperation(value)) {
      return value.slice(0, -1)
    }
    return value
  }

  const handleClickOperation = (e) => {
    const value = removeLastItemIfItIsAnOperator(visorValue)
    setVisorValue(value + e.target.value)
  }

  const handleClickEqual = () => {
    setVisorValue(removeLastItemIfItIsAnOperator(visorValue))
    const allValues = visorValue.match(/\d+[+x÷-]?/g)
    setVisorValue(allValues.reduce(calculateAllValues))
  }

  const calculateAllValues = (accumulated, actual) => {
    const firstValue = accumulated.slice(0, -1)
    const operator = accumulated.split('').pop()
    const lastValue = removeLastItemIfItIsAnOperator(actual)
    const lastOperator = getLastOperator(actual)
    return doOperation(operator, firstValue, lastValue) + lastOperator
  }

  
  function getLastOperator(value) {
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doOperation(operator, firstValue, lastValue) {
    switch (operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
      case '%':
        return Number(firstValue) % Number(lastValue);
    }
  }

  return (
    <div className={styles.calculatorWrapper}>
      <div className={styles.container}>
      <div className={styles.screen} data-js="screen">
        <input className={styles.visor} type="text" value={visorValue} readOnly data-js="visor"/>
      </div>

    <div className={styles.operationsWrapper}>
      <div className={styles.otherOperations}>
        <button className={`${styles.btn} ${styles.c}`} onClick={handleClickC}>C</button>
        <button className={styles.btn} data-js="button-operator">( )</button>
        <button className={styles.btn} onClick={handleClickOperation} value="%">%</button>
      </div>

      <div className={styles.numbers}>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="1">1</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="2">2</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="3">3</button>

        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="4">4</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="5">5</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="6">6</button>

        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="7">7</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="8">8</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="9">9</button>

        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value=""></button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value="0">0</button>
        <button className={`${styles.btn} ${styles.btnNumbers}`} onClick={handleClickNumber} value=".">.</button>
      </div>

      <div className={styles.mathOperators}>
        <button className={styles.btn} onClick={handleClickOperation} value="÷"> ÷ </button>
        <button className={styles.btn} onClick={handleClickOperation} value="x"> X </button>
        <button className={styles.btn} onClick={handleClickOperation} value="-"> - </button>
        <button className={styles.btn} onClick={handleClickOperation} value="+"> + </button>
        <button className={styles.btn} value="=" onClick={handleClickEqual}> = </button>
      </div>
    </div>
  </div>
    </div>
  )
}