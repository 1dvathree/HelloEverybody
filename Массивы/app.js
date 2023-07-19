/* Теория
const array = [1, 2, 3 , 5 , 20, 42, 111]
//const arrayStrings = ["b", "c", "null"]
//const array = new Array(1, 2, 3 , 5 , 20, 42)

//console.log(array.length)
console.log(array[0]) // указываем позицию необходимого отсчет начинается с 0
console.log(array[array.length - 1]) // получаем последний элемент массива
array[0] = 'Privet!'
console.log(array) */

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//console.log(inputElement.value)

//const notes = ['записать блок про массивы' , 'расскзать теорию объектов']

//*function render () {  
  //  for (let i = 0; i < notes.length; i++) {
    //    listElement.insertAdjacentHTML( 'beforeend', getNoteTemplate(notes[i]))//циклы
// }
//for (let note of notes){  //современный формат циклов
    //listElement.insertAdjacentHTML( 'beforeend', getNoteTemplate(note))//современный формат циклов
//}
//   }




//render ()


//createBtn.onclick = function () {   
//    if (inputElement.value.length === 0) {
//        return 
 //   }     
    // listElement.innerHTML =  ` 
 //      listElement.insertAdjacentHTML(
 //       'beforeend',  
 //       getNoteTemplate(inputElement.value)
 //                  )
 //      inputElement.value = ''
//}

//*function getNoteTemplate(title) {
  //  return `
  //  <li
//class="list-group-item d-flex justify-content-between 
//align-items-center"
//>
//<span>${title}</span>
//<span>
//<span class="btn btn-small btn-success">&check;</span>
//<span class="btn btn-small btn-danger">&times;</span>
//</span>
//</li>
//`
//}

/* Теория Объектов 
 *  
 
const person = {   //здесь описываются свойства объекта (строковые, числовые, булеан, массивы, функции)
    firstName: "Sergey", 
    lastName: "Sakov",
    year: 1994,
    hasGirlfriend: true,
    languages: ["ru", 'en', ],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }

}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true // можем легко менять значения
person.getFullName()// теперь выдает нам полное имя из функции
// console.log(typeof notes)
*/

const notes = [ // здесь записаны заметки
    {
    title: 'записать блок про массивы', // объект 1
    completed: false, // проверка выполнили мы эту заметку или нет и по умолчанию будет false
     },
     {
        title: 'рассказать теорию объектов ', // объект 2
        completed: true,
     },
     ]

     function render () {  
        listElement.innerHTML = ''
        if(notes.length === 0) {
            listElement.innerHTML = '<p>Нет элементов</ p>'
        }
          for (let i = 0; i < notes.length; i++) {
              listElement.insertAdjacentHTML( 'beforeend', getNoteTemplate(notes[i], i))//циклы
       }
          }
          render()
          //for (let note of notes) { //современный формат циклов
        //listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))//современный формат циклов
    //}

          createBtn.onclick = function () {   
        if (inputElement.value.length === 0) {
       return 
    }    
    const newNote = {
title: inputElement.value,
completed: false,
    }
    notes.push(newNote)
    render()
       inputElement.value = ''
        }

        listElement.onclick = function(event) { // обработчик события по какому элементу был произведен клик
        if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type =  event.target.dataset.type

        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed // ! - противоположное значение
        } else if (type === 'remove') {
            notes.splice(index, 1) // строчка для удаления кнопки (метод)
        
        }
        render()
    }
        } 
// если функция выполняется, то зачеркивается строчка  (6 строчка снизу отсюда)
          function getNoteTemplate(note, index) {
            return `
            <li
            class="list-group-item d-flex justify-content-between 
            align-items-center"      >
            <span class ="${note.completed ? 'text-decoration-line-through' : '' }">${note.title} 
                </span> 
            <span> 
            <span class="btn btn-small btn-${note.completed ? 'warning' : 'success' 
        }" data-index="${index}" data-type="toggle">&check;</span> 
            <span class="btn btn-small btn-danger" data-type="remove"
            data-index="${index}">&times;</span>
            </span>
            </li>
         `
        }
        // строка для понимания по какому элементу был сделан клик 6 сверху отсюда