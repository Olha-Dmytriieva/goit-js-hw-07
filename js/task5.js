
// const inputRef= document.getElementById('name-input')
const inputRef = document.querySelector('input');
const nameRef = document.getElementById('name-output');




inputRef.addEventListener('input', e=>
nameRef.textContent = e.target.value.trim()


)



// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка 'незнакомец'.