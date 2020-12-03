


const decrementRef = document.querySelector('button[data-action="decrement"]')  
const incrementRef = document.querySelector('button[data-action="increment"]') 

const valueRef = document.getElementById('value')
let clickClick = 0;



decrementRef.addEventListener('click', ( )=>{

    valueRef.innerHTML = (clickClick -= 1)
}
)


incrementRef.addEventListener('click', ( )=>{

    valueRef.innerHTML = (clickClick += 1)
}
)






// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса