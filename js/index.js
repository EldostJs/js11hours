//---------------------
// ---- создаем переменную и можем создать его копию и вставить и изменить в нем любые элементы -----

// const num = {
//     a : 22, 
//     b : true
// }

// const copynum = num

// copynum.a = `aabbcc`

// copynum.c = 2344,

// console.log(num);


//-----------------------
//можем создавать одну переменную и добавлять в нее несколько переменных а так же вызывать в консоль отдельную часть переменной

// const myCity = {
//     city : `Baku`,
//     age : 1000 , 
//     population : `2million people`
// }

// console.log(myCity.age);


//---------------------
// с помощью точки можно добовлять из вне новые переменные 

// const aboutMe = {
//     name : `Eldost`
// }

// aboutMe.age = 22 

// aboutMe.secondName = `Mirzeyev`

// console.log(aboutMe);


//----------------------
// с помощью delete можно удалить переменную

// const myCity = {
//     city : `Baku`,
//     age : 1000 , 
//     population : `2million people`
// }

// delete myCity.age

// console.log(myCity);


//-------------------------
// так же мы можем добавить несколько скобок 

// const myCity = {
//     city : `Baku`,
//     info : {
//         age : 1000 , 
//          population : `2million people`
//     }
// }

// console.log(myCity);


//----------------------------
// можно создать переменные и данные из них вставить в новую переменную можно с запятой или же написать название переменных

// const name = `Eldost`

// const age = 22

// const city = `Baku`

// const info = {

//     name ,
//     age,
//     city : city
// }

// console.log(info);


//-------------------------------

//           ФУНКИЦИИ FUNCTION                

//------------------------------

// function myNum(a,b){
//      let c 
//      c = a + b
//      return c
// }

// console.log(myNum(10,12));

//--------------------------

// const people = {
//     name : `Eldsot` , 
//     age : 22
// }

// function arr(person) { // здесь мы создаем функцию с новой переменной
//     person.age += 1 // здесь добовляем += 1 что бы добовлял плюс к возврасту
//     return person // и возвращаем к person 
// }

// arr(people) // здесь мы вызываем функию без нее не будет работать 
// console.log(people.age); // здесь выводим функицию в консоль

//---------------------------

// function myN() {

//     console.log(`Ekdost`);
// }

// setTimeout(myN,30) // этот тег вызывает функицию через некоторое время , можно управлять колличеством времени

//--------------------------

// const info = {
//     name: `Eldost`,
//     fname: `Mirzeyev`,
//     age: 22,
//     personalData:{
//         city: `Azerbaijan`,
//         gender: `Male`,
//     }
// }



// const arr = Object.entries(info)

// for(const [key,values]of arr){
//     console.log(key,values);
// }

// const arr2 = Object.entries(info.personalData)

// for(const[key,values] of arr2){
//     console.log(key,values);
// }

// const arr3 = Object.keys(info)

// for( const a of arr3){
//     console.log(a);
// }

// const arr4 = Object.values(info)

// for(const a of arr4){
//     console.log(a);
// }



//--------------DOM JS------------------

// let ul = document.createElement('ul')

// let li = document.createElement('li')

// let li1 = document.createElement('li')

// let h = document.querySelector('#hh')

// let text = document.createTextNode(`Salam-Bir`)
// li.innerText = 'salam'
// li1.innerText = `Sssss`
// h.appendChild(ul)
// ul.appendChild(li)
// ul.appendChild(li1)

//---------------------------------------
// let div = document.createElement('div')

// let ul = document.createElement('ul')

// let li = document.createElement('li')

// document.body.appendChild(div)

// div.appendChild(ul)

// ul.appendChild(li)

// let arr = [`bir`, `iki`, `uc`, `dord`, `bes`, `alti`]

// for (let i = 0; i < arr.length; i++) {

//     li.innerHTML += `<li>${arr[i]}</li>`
// }

//---------------------------------------


// let mothetDiv = document.createElement('div')

// let childDiv = document.createElement('div')

// //

// let nameH1 = document.createElement('h1')

// let nameText = document.createTextNode('Eldsot Mirzeyev')

// nameH1.appendChild(nameText)

// childDiv.appendChild(nameH1)

// mothetDiv.appendChild(childDiv)

// childDiv.style.width = `50%`

// childDiv.style.marginLeft = '120px'

// childDiv.style.backgroundColor = 'gray'

// nameH1.style.textAlign = 'center'

// // 

// let bioP = document.createElement('p')

// let nameP = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .')

// bioP.appendChild(nameP)

// mothetDiv.appendChild(bioP)

// bioP.style.textAlign = 'center'

// bioP.style.paddingLeft = '10px'

// bioP.style.paddingRight = '10px'

// //

// let skilsH = document.createElement('h2')

// let h2 = document.createTextNode('Skils')

// skilsH.appendChild(h2)

// mothetDiv.appendChild(skilsH)

// skilsH.style.marginLeft = '40px'

// //

// let ul = document.createElement('ul')

// let li = document.createElement('li')

// let arr = ['Photography','Hiking','Camping','Cookong','Navigation']

// ul.appendChild(li)

// mothetDiv.appendChild(ul)

// for(let i = 0; i < arr.length; i++){
//     li.innerHTML += `<li>${arr[i]}</li>`
// }

// mothetDiv.style.marginLeft = '300px'

// mothetDiv.style.marginTop ='100px'

// mothetDiv.style.border = `solid`

// mothetDiv.style.width = '35%'

// mothetDiv.style.backgroundColor = 'lightgray'


// //


// document.body.appendChild(mothetDiv)

// //--------------------------------------

// let succes = document.querySelector('.succes')

// let danger = document.querySelector('.danger')

// let shop = document.querySelector('.shop')

// let sum = 0

// succes.addEventListener('click', function () {      
//     sum ++
//     shop.innerHTML = sum

// })

// danger.addEventListener('click', function () {

//     if (sum > 0) {
//         sum --
//         shop.innerHTML = sum
//     }

//     if (sum == 0){
//         shop.innerHTML = ''
//     }
   
// })


// let a = 10

// let b = 20 

// let sum =  0

// function add(num1, num2) {
//     console.log(num1 + num2);

// }

// function mult(a, b) {

//     console.log(a * b );

//     mult.push(sum)
// }
// add(a,b)

// mult(a,b)


//-----------------------

// let result =document.querySelector('#result')

// let numbers = document.querySelectorAll('.nums')

// let operators = document.querySelectorAll('button')

// let equalButton  = document.querySelector('.equal')

// const clearButton = document.querySelector('.delete')

// function updateDisplay(value) {
//     result.value += value;
//     console.log(value);
// }

// for (let i = 0; i < numbers.length; i++) {
    
//     numbers[i].addEventListener('click', function NumberClick(event){

//         let key = event.target.value;
    
//         switch (key) {
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8':
//             case '9':
//             case '0':
//                 updateDisplay(key)
//                 break;
    
//         }
//         console.log(key);
//     })
    
// }

// for (let j = 0; j < operators.length; j++) {

//     operators[j].addEventListener('click', function operatorsClick (event){
//         let key = event.target.value
    
//         switch (key) {
//             case '+':
//             case '-':
//             case '*':
//             case '/':
//             updateDisplay(key)
//             break;
//         }
//         console.log(key);
//     })
// }

// function calcul(num1 , operator, num2) {
//     switch(operator){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             if(num2 !== 0){
//                 return num1 / num2
//             }
//         updateDisplay(operator)
//         break;
//     }
// }
//--------------------------------------------

let result = document.querySelector('#result');
let numbers = document.querySelectorAll('.nums');

let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.delete');

function updateDisplay(value) {

    result.value += value;
}
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function nmberClick(event) {
        let key = event.target.value
        updateDisplay(key)
          
    })
}


clearButton.addEventListener('click', function () {
    result.value = ''
})

equalButton.addEventListener('click', function () {
    result.value = eval(result.value)
})


