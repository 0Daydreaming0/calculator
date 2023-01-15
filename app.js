const calcInput = document.querySelector('.calc-input');
const allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;


        if (value === '='){
            if (calcInput.innerText.includes('/')) {
                const splitstuff = calcInput.innerText.split('/');
                operate('/', splitstuff[0], splitstuff[1]);
            }
            if (calcInput.innerText.includes('-')) {
                const splitstuff = calcInput.innerText.split('-')
                operate('-', splitstuff[0], splitstuff[1]);
            }
            if (calcInput.innerText.includes('*')) {
                const splitstuff = calcInput.innerText.split('*')
                operate('*', splitstuff[0], splitstuff[1]);
            }
            if (calcInput.innerText.includes('+')) {
                const splitstuff = calcInput.innerText.split('+')
                operate('+', splitstuff[0], splitstuff[1]);
            }
        }
        calcInput.innerText += value;
        if (value === 'clear') {
            calcInput.innerText = ''
        }
    })
})

const operate = (operator, value1, value2) => {
    const number1 = Number(value1);
    const number2 = Number(value2);

    if(operator === '/'){
        calcInput.innerText = number1 / number2;
    }

    if(operator === '-') {
        calcInput.innerText = number1 - number2;
    }

    if (operator === '+') {
        calcInput.innerText = number1 + number2;
    }
    
    if(operator === '*') {
        calcInput.innerText = number1 * number2;
    }
}