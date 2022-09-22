const date = document.querySelector('.date')
const hour = document.querySelector('.hour')
const currentFullDate = new Date()

const options = {year: 'numeric', month: 'short', day:'numeric'}

setInterval(() => {
    const currentDate = new Date()

    hour.textContent = currentDate.toLocaleTimeString()

    date.textContent = currentFullDate.toLocaleDateString('pt-br', options)
}, 1000)