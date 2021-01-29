// exercise 1
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции
 корректное название, вызовите функцию, проанализируйте синтаксис. */


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


//exercise 2 
/* Написать функцию, которая принимает на входе любое число (но не больше 1 000),
 определяет, является ли оно простым, и выводит простое число или нет. 
 Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

let inp = prompt('enter a number less than 1000');

function getPrimeNumber(input) {
    let result;
    if (input <= 1000){
        let sRoot = Math.sqrt(input);
        let bool = Number.isInteger(sRoot);
        if (input === 0 || input === 1){
            return result = (`number ${input} is neither prime nor composite`);
        }
        else if (input === 2 || input === 3) {
            return result = (`number ${input} is prime`);
        }
        else if (!bool && input % 2 != 0 && input % 3 != 0 && input % 5 != 0 && input % 7 != 0){
            return result = (`number ${input} is prime`);
        }
        else{
            return result = (`number ${input} is not prime`);
        }
    }
    else {
        return result = (`given number is incorrect `)
    }
    
}

getPrimeNumber(inp);


// exercise 3

/* Написать функцию, которая принимает число как аргумент
и возвращает функцию, которая также принимает число как аргумент
и возвращает сумму этих двух чисел. Выведите в консоль результат. */


function first(num1){
    return function second(num2){
        let sum = num1 + num2;
        return sum;
    }
}

let a = prompt('enter the first nubmer');
let b = prompt('enter the second nubmer');
a = +a;
b = +b;
let result = first(a);
console.log(result(b));

// exercise 4

/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо
 выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число,
 начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */


 function func(){
 
    let num1 = prompt('enter the firs number');
    let num2 = prompt('enter the second number');
    num1 = +num1;
    num2 = +num2;
    const timer = setInterval(function(){
      
      if (num1 <= num2){
        console.log(num1);
        num1++;
      }
      else{
        clearInterval(timer);
      }
    }, 1000)
    
    }
    
    func()


// exercise 5 
/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
 Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */


const power = (x, n) => {
    let result = Math.pow(x, n);
    return result;
}