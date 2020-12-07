
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const insertToDoc = document.querySelector('#ingredients')

//  const htmlCode = function(arr){
  
//     for(let i = 0; i < arr.length; i += 1){
//         const elementsCreation = document.createElement('li')
        
//         elementsCreation.append(arr[i])
//          console.log( elementsCreation)
//         insertToDoc.appendChild(elementsCreation)
       
//     }
 
// }



// htmlCode (ingredients)



const htmlCode = ingredients.map((item)  => {
  const elementsCreation = document.createElement('li')
  
  elementsCreation.append(item)

  console.log( elementsCreation)

  insertToDoc.appendChild(elementsCreation)

})



//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего 
//   вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().