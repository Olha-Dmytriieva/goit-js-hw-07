
const validationRef = document.getElementById('validation-input')

const inputEl = document.querySelector('.task6')


inputEl.addEventListener('change', (e) => {

    if (validationRef.dataset.length == e.target.value.length){
            validationRef.classList.toggle('valid')
    }
      if (validationRef.dataset.length !== e.target.value.length){
        validationRef.classList.toggle('invalid')
     }
     if (validationRef.dataset.length === "0"){
         validationRef.classList.remove('valid');   
         validationRef.classList.remove('invalid');
     }
     
     
} 


)














