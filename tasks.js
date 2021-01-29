//        exercise 1 

/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.


let num;
let output

num = prompt('enter any number');
num = +num;
let type = typeof num;
console.log(type);
if (num){
  output = num % 2 === 0 ? 'the number is even' : 'the number is odd';
  console.log(output);
}
else if (num === 0) {
    console.log('the number is even');
}
else {
  console.log('Oops, it seems that you made a mistake');
  console.log('the type of your input is NaN');
}

*/
  

//        exercise 2
/*
Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».



let x;
let type = typeof x;
if (type === 'number'){
  console.log('x - number')
}
else if (type === 'string'){
  console.log('x - string')
}
else if (type === 'boolean'){
  console.log('x - boolean')
}
else {
  console.log('Type of x is undefined')
}

*/


//        exercise 3

//  Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
  /*
  function reverse(str){
  return str.split('').reverse().join('');
}

let result = reverse('Hello');
console.log(result); 
*/




//        exercise 4
//  Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

/*  
  function random(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  let result = random(0,100);
  console.log(result); 
*/

//      exercise 5 

/*Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/

/*  
let arr = [];
  console.log(arr.length);
    
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  };
*/
 //или 
 /*
 let arr = [];
 console.log(arr.length);
 arr.map(function(item, index, array) {

   console.log(item);

});
*/

//      exercise 6 

/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
 Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/
/*
 let arr = [];
 let first = arr[0];
 let lastIndex = arr.length - 1;
 for (let i = 0; i < arr.length; i++){
   if (arr[i] != first){
     console.log(`elements of this array are not identical`);
     break
   }
   if (i === lastIndex && arr[i] === first){
     console.log(`all elements are identical`);
   }
 } 
 */

//      exercise 7 
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */
/*

let arr = [1, 2, 2, 0, null, NaN, undefined, 'str', true, false];

function countOddEven(array) {
  let resultArr = [];
  let oddCount = 0;
  let evenCount = 0;
  resultArr = array.map(function(value, index){
    return String(value);
  });
    for (let i = 0; i < resultArr.length; i++){
      if (resultArr[i] == 0){
        console.log(`element with index - ${i} is 0`);
      }
      else if (resultArr[i] % 2 == 1){
        oddCount = oddCount + 1;
      }
      else if (resultArr[i] % 2 == 0){
        evenCount = evenCount + 1;
      }
    }
    console.log(`the number of odd elements is - ${oddCount}`);
    console.log(`the number of even elements is - ${evenCount}`);
}

countOddEven(arr);

*/

//      exercise 8 
/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/
/*
let map = new Map();

map.set(1, 'trog');
map.set('ler', 'qwe');
map.set(false, 12);

console.log(map.keys());

map.forEach(function(value, key){
  console.log(`key - ${key}, value - ${value}`)
});
*/