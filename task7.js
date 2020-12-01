const fontSizeRef = document.getElementById('font-size-control');
// console.dir(fontSizeRef)


// console.log(`${fontSizeRef.valueAsNumber}`)

const textRef = document.getElementById('text')
// console.dir(textRef)


fontSizeRef.addEventListener('input', e=>{
    // console.dir(e.target.valueAsNumber)
   
    textRef.style.fontSize = `${e.target.valueAsNumber}px`

    

})