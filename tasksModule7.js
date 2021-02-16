// exercise 1
/* Написать, функцию, которая принимает в качестве аргумента объект и выводит
 в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

function check(a) {
    for(let key in a){
        if (a.hasOwnProperty(key)){
            console.log(key);
            console.log(a[key]);
        }
    }
}


 // exercise 2 
 /*Написать функцию, которая принимает в качестве аргументов строку и объект,
  а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

  function check(str, obj) {
      let result = str in obj;
      return result
  }

  //exercise 3
  /* Написать функцию, которая создает пустой объект, но без прототипа.*/

function createObject(){
    let a = {}
}

// exercise 4
/*Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :) */

function UserAction() {
    this.object = 'physical object'
 
 }

 function ElectricalDevices(name, company, rating, sound){
     this.name = name, 
     this.company = company,
     this.rating = rating,
     this.sound = function makeNoise(){
         alert(sound);
     },
     this.status,
     this.plugIn =  function(){
         status = true;
         return status
     },
     this.unplug = function(){
         status = false;
         return status
 
     }
 }
 
 ElectricalDevices.prototype = new UserAction();
 ElectricalDevices.prototype = new UserAction();

 const ket = new ElectricalDevices('kettle', 'Bosch', 5, 'psh!');
 const irn = new ElectricalDevices('iron', 'Braun', 4, 'ush!');
 
 console.log(ket.unplug());

// exercise 5
/* exercise 4 to class */

class UserAction{
    constructor(){
        this.object = 'physical object';
    }
}


class ElectricalDevices extends UserAction {
    constructor(name, company, rating, sound){
        super();
        this.name = name;
        this.company = company;
        this.rating = rating;        
        this.sound = sound;
        }  
    plugIn() {
        this.status = true;
        return this.status
     }
    unplug() {
        this.status = false;
        return this.status
     }
    sound() {
        alert(this.sound);
    }
}

const ket = new ElectricalDevices('kettle', 'Bosch', 5, 'psh!');
const irn = new ElectricalDevices('iron', 'Braun', 4, 'ush!');

console.log(ket.plugIn());