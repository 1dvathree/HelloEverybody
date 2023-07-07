//let num = 33 // присвоение переменной (= присвоение)
//let firstName = "Sergey" 
//const isProgrammer = true // 1 раз объявляем const больше не можем изменять
/*
группа 
комментариев
*/
/* Can Do (можем делать)
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' // bad (длинное  название переменной)
let myNum = 34 // good (заглавная буква на каждом слове)
let num42 = 22
*/

/* Restricted (Запрещенные переменные)
let 42num = '11'
let my-num = 1
let const (зарезервированные слова)
*/

 //firstName = 'Max'
 //isProgrammer = false // error because of const

 //alert(firstName) // (alert - показать значение переменной)
 //console.log('Test:', num, isProgrammer) /*(console log выводить в консоль переменную в скобках)
 //(операторы + - * /) */
 //console.log(num + 10) 
 //console.log(num - 10)
 //console.log(num * 10)
 //console.log(num / 10)
 //console.log(num)

 //let num2 = num + 10
 //console.log(num, num2)
 //num = num2 - num
 //num2 = num2 + 1
 //console.log(num, num2)

 //let num3 = (num + 10 * 2) / (5 - 1)
 //console.log(num3)





const resultElement = document.getElementById('result') // получение элеменетов "результат"
const input1 = document.getElementById('input1') // первая переменная в калькуляторе
const input2 = document.getElementById('input2') // вторая переменная в калькуляторе
const submitBtn = document.getElementById('submit') // ВЫчислить кнопка
const plusBtn = document.getElementById('plus') // кнопка плюс
const minusBtn = document.getElementById('minus') // кнопка минус
const ymnojitBtn = document.getElementById('ymnojit') // кнопка умножить
const delitBtn = document.getElementById('delit') // кнопка делить
let action = '+' 


 console.log(resultElement.textContent) // (показывает текст в консоли например 49 ответ в калькуляторе)
 //resultElement.textContent = (42 - 2) / num // (пример изменения значения в калькуляторе)
 
 console.log(typeof sum) 

plusBtn.onclick = function () { // обработчик события по клику +
  action = '+'
}

minusBtn.onclick = function () { // обработчик события по клику -
  action = '-'
}

ymnojitBtn.onclick = function () { // обработчик события по клику *
  action = '*'
}
delitBtn.onclick = function () { // обработчик события по клику /
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) { // функция должна вычислить значение в зависимости от action
  const num1 = Number(inp2.value)
  const num2 = Number(inp2.value)

   if (actionSymbol == '+') {
     return num1 + num2
   } 
   else if (actionSymbol == '-') {
     return num1 - num2
    }
     else if (actionSymbol == '*' ) {
      return num1 * num2
    }
      else if (actionSymbol == '/' ) {
        return num1 / num2
      }
    }

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
   if (action == '+') { // действие суммы , если делаем + то будет ....
     const sum = Number(input1.value) + Number(input2.value)  
     printResult(sum)
   } else if (action == '-') { // действие разницы если делаем - то будет...
     const sum = Number(input1.value) - Number(input2.value) 
     printResult(sum)
   }
   else if (action == '*') { // действие умножение если делаем - то будет...
    const sum = Number(input1.value) * Number(input2.value) 
    printResult(sum)
   }
   else if (action == '/')  {// действие деление если делаем - то будет...
    const sum = Number(input1.value) / Number(input2.value) 
    printResult(sum)
   }
    }
     

     
 