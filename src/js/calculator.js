const visor = document.querySelector('[data-js="visor"]')
const buttonsNumbers = document.querySelectorAll('[data-js="button-number"]')
const buttonsOperators = document.querySelectorAll('[data-js="button-operator"]')
const buttonEqual = document.querySelector('[data-js="button-equal"]')
const buttonC = document.querySelector('[data-js="button-c"]')

Array.prototype.forEach.call(buttonsNumbers, (button) => {
  button.addEventListener('click', handleClickNumber, false)
})

Array.prototype.forEach.call(buttonsOperators, (button) => {
  button.addEventListener('click', handleClickOperation, false)
})

function handleClickNumber() {
  visor.value += this.value
}

function handleClickOperation() {
  visor.value = removeLastItemIfItIsAnOperator(visor.value)
  visor.value += this.value
}

function handleClickC() {
  visor.value = 0;
}

function isLastItemAnOperation(number) {
  const operations = ['+', '-', 'x', '÷']
  const lastItem = number.split('').pop()
  return operations.some((operator) => {
    return operator === lastItem
  })
}

function removeLastItemIfItIsAnOperator(number) {
  if (isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number
}

function handleClickEqual() {
  visor.value = removeLastItemIfItIsAnOperator(visor.value);
  const allValues = visor.value.match(/\d+[+x÷-]?/g);
  visor.value = allValues.reduce((accumulated, actual) => {
    const firstValue = accumulated.slice(0, -1);
    const operator = accumulated.split('').pop();
    const lastValue = removeLastItemIfItIsAnOperator(actual);
    const lastOperator = isLastItemAnOperation(actual) ? actual.split(
      '').pop() : '';
    switch (operator) {
      case '+':
        return (Number(firstValue) + Number(lastValue)) + lastOperator
      case '-':
        return (Number(firstValue) - Number(lastValue)) + lastOperator
      case 'x':
        return (Number(firstValue) * Number(lastValue)) + lastOperator
      case '÷':
        return (Number(firstValue) / Number(lastValue)) + lastOperator
    }
  })
}

buttonC.addEventListener('click', handleClickC, false)
buttonEqual.addEventListener('click', handleClickEqual, false)


