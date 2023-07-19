const names = ["Сергей", "Данил", "Ксения", "Екатерина"]

// names.push('Алена') // добавление и выведение Алена в конце списка имен
//names.unshift('Алена') // добавление и выведение в начале списка имен
// const name = names.shift() // удаляет 1 элемент из массива
//const name = names.pop() // забирает последний элемент 
// console.log('Names: ', names, name)

//console.log(names.reverse()) // мметод обратный когда все переменные меняются наоборот (порядок)
//const reversed = names.toReversed()
//console.log(reversed)// трансформирует в новую но не меняет оригинал
//const letters = ['e', 'b', 'c', 'd', 'a'] 
//console.log(letters.sort ())// выводит по алфавитному порядку
//console.log(letters)

console.log(names.splice(2, 1))// порядковый номер 2(Ксения) удаляется , 1 - это количество элементов которые мы хотим удалить
console.log(names)

    