
const validationRef = document.getElementById('validation-input')

const inputEl = document.querySelector('.task6')


inputEl.addEventListener('change', (e) => {

  let value = e.target.value.length;
  value!= validationRef.dataset.length
  ? validationRef.classList.toggle('invalid') 
  : validationRef.classList.toggle('valid')

    // if (validationRef.dataset.length == e.target.value.length){
    //     validationRef.classList.add('valid') || validationRef.classList.replace('invalid','valid' )
    // }
    //   else if (validationRef.dataset.length !== e.target.value.length){
    //     validationRef.classList.add('invalid') || validationRef.classList.replace('valid', 'invalid' ) 
    //  }

}
)














