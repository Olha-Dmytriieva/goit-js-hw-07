
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

// const insertToDoc = document.querySelector('#ingredients')
// const elementsCreation = document.createElement('li')
// console.log(ingredients)
// console.log(elementsCreation)

// const innerText = ingredients.map(item=> console.log(elementsCreation.appendChild((item))))

// // .forEach((el, idx) => console.log(elementsCreation.append(el))))
// console.log(innerText)

const insertToDoc = document.querySelector('#ingredients')

 const htmlCode = function(arr){
  
    for(let i = 0; i < arr.length; i += 1){
        const elementsCreation = document.createElement('li')
        
        elementsCreation.append(arr[i])
         console.log( elementsCreation)
        insertToDoc.appendChild(elementsCreation)
       
    }
 
}



htmlCode (ingredients)




//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего 
//   вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().