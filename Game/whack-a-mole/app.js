const square = document.querySelectorAll('.square')
const mole = document.queruSelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function ramdomSquare() {
    square.forEach(className => {
        className.classList.remove('move')
    })
    let ramdomPosition = square[Math.floor(Math.random() * 9)]
    ramdomPosition.classList.add('mole')

    // assingn the id of the ramdomPosition to hitPosition for us to use later
    hitPosition = ramdomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(ramdomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! You final score is' + result)
    }
}

let timeId = setInterval(countDown, 1000)