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
    if (op === '-') return '&#x2212';
    return op
}


function updateScreen() {
    const display = document.getElementById('displayLine')
    const history = document.getElementById('historyLine')
    const status = document.getElementById('statusLine')

    display.textContent = typedNumberText
}

function pressNumber(digit) {
  setStatus('')
    if (typedNumberText === '0') {
    typednumberText = digit
  }
  else {
    typedNumberText = typedNumberText + digit
  }
    
    updateScreen()
}