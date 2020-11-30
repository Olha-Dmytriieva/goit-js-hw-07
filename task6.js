
const validationRef = document.getElementById('validation-input')

const inputRef = document.querySelector('input')


inputRef.addEventListener('change', (e) => {

    if (validationRef.dataset.length == e.target.value.length){
            validationRef.classList.toggle('valid')
    }
     else if (validationRef.dataset.length !== e.target.value.length){
        validationRef.classList.toggle('invalid')
     }
     else  validationRef.classList.remove('valid')
} 


)














