let counter = document.getElementById('counter')
let seconds = 0

function timerSet() {
  seconds++
  counter.textContent = seconds
}

let startTimer = 0
startTimer = setInterval(timerSet, 1000)

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
let flagPaused = 'resumed'

startTimer
plus.addEventListener('click', () => {
  seconds++
  counter.innerText = seconds
})

minus.addEventListener('click', () => {
  seconds--
  counter.innerText = seconds
})

pause.addEventListener('click', () => {
  if (flagPaused == 'resumed') {
    clearTimeout(startTimer)
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
    pause.textContent = 'resume'
    flagPaused = 'paused'

  } else if (flagPaused == 'paused') {
    pause.textContent = 'pause'
    flagPaused = 'resumed'
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    startTimer = setInterval(timerSet, 1000)
  }
})

let objects = []

heart.addEventListener('click', () => {
  const h1 = document.querySelector('#counter')
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  let num = parseInt(h1.innerText)
  let currentLi = document.getElementById(h1.innerText)
  
  if(currentLi === null) {
    li.innerHTML = `${num} has been liked <span>1</span> time`
    li.id = num
    li.className = '1'
    ul.appendChild(li)
  } else if(currentLi) {
    debugger    
    let timesClicked = parseInt(currentLi.className) + 1
    currentLi.className = timesClicked
    currentLi.innerText = `${currentLi.id} has been liked ${timesClicked} times`
  }
})

document.querySelector('button#submit').addEventListener('click', (e) => {
  e.preventDefault()
  let submittedContent = document.querySelector('input#comment-input').value
  let p = document.createElement('p')
  p.innerText = submittedContent

  document.getElementById('list').appendChild(p)
})