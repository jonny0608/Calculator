// What the use is currently typing (as text)
let typedNumberText = '';

// The number we store for calculations
let storedNumber = null

//The operator currently selected (+ - * /)
let currentOperator = '';

//used only for displyaong the history line
//Example" ["3", "+","4"]
let historyParts = [];

//-----------------
//Helper Functions




function pressOperator(operator) {
  console.log(operator)
}
function setStatus(message) {
  document.getElementById('statusLine').textContent = message
}
function showSymbol(op) {
  if (op === '*') return 'X';
  if (op === '/') return '÷';
  if (op === '-') return '−';
  return op
}


function updateScreen() {
  const display = document.getElementById('displayLine')
  const history = document.getElementById('historyLine')
  const status = document.getElementById('statusLine')

    if (typedNumberText !== '') {
      display.textContent = typedNumberText
    }
else {
  display.textContent = '0'
}
  display.textContent = typedNumberText

  if (historyParts.length === 0) {
    history.textContent = ''
  }
  if (historyParts.length === 1) {
    history.textContent = historyParts[0]
  }
  if (historyParts.length === 2) {
    history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1])
  }
  if (historyParts.length === 3) {
    history.textContent = historyParts[0] + ' ' + showSymbol(historyParts[1]) + ' ' + historyParts[2]
  }
  
  if (status.textContent === '') status.textContent = 'ready'

}

function pressNumber(digit) {
  setStatus('')
  if (typedNumberText === '0') {
    typedNumberText = digit;
  }
  else {
    typedNumberText = typedNumberText + digit
  }

  updateScreen()
}

function pressOperator(op) {

  setStatus('')
  if (typedNumberText === '' && storedNumber === null) {
    setStatus('Enter a number first')
    updateScreen()
  }

  if (storedNumber === null) {
    storedNumber = Number(typedNumberText)
    currentOperator = op
    historyParts = [String(storedNumber), currentOperator]
    typedNumberText = ''
    updateScreen();

  }

if (typedNumberText !== ''){
  const secondNumber = typedNumberText
  if (currentOperator === '/' && Number(secondNumber) === 0) {
    setStatus('You Honestly are actually a Dumb-dumb')
}


}

function clearAll () {
  typedNumberText = '';
  storedNumber = null;
  currentOperator = '';
  historyParts = [];
  
  setStatus('cleared')
  updateScreen()
}