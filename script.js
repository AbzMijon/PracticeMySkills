const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        OnlyInViewport:true,
    },
    slidesPerView: 3,
});


const personExample = (name , workplace , country , send) => {
    this.name = name;
    this.workplace = workplace ;
    this.country = country;
    this.send = send;
    let sendingLetterInput = {
        name: name,
        workplace: workplace,
        country: country,
        letter: send,
    }
    console.log(sendingLetterInput);
    const thx = alert('Thanks For Your Letter! Wait some minutes and we will answering your quastion!');
}
personExample('egor' , 'backend developer' , 'Russia' , 'I can write nice code and kwon VUE.JS');

const someObj = {
    name: 'LOLLY',
}

const test = () => (someObj.name === 'lolly') ? true :(someObj.name === 'LOLLY') ? console.log('UPPERCASE!!!!!!!') : false;
console.log(test);

//Constructure
const someFunc = function (name , age , workplace) {
    this.name = name;
    this.age = age;
    this.workplace = workplace;
    this.isLead = false;
}
console.log(someFunc.age);

const newUser = new someFunc('Egor' , 16 , 'Front-End Developer')
console.log(newUser.name);

//Hometask

//1 ---------------------------------- About ForEach
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => {
    console.log(element);  
});

fibonacci.forEach(function (element) {
    console.log(element);
})

//2 ---------------------------- About Map
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

//3 ------------------------------- About Filter
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter( num => num >= 0 );
console.log(positiveNumbers);

//4 ------------------------------ About Reduce

//5 ---------------------------------- About Find
const listNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(listNumbers.find(num => num % 2 === 0));

//6 -------------------------------------- Big Construcure

//7 ------------------ Trolls
let commStr = 'This website is for losers LOL!';
let newCommStr = commStr.replace( /[aeouyi]/gi , '#' );
console.log(commStr);
console.log(newCommStr);

//8 ----------------------------------------- Map

//9 -------------------------------------- Doint Any Way
let highAndLow = ("1 2 3 4 5"); // return "5 1"
let splitHighAndLow = highAndLow.split(' ');
let arr = [];
arr.push(Math.max(...splitHighAndLow));
arr.push(Math.min(...splitHighAndLow));

console.log(arr);

//Egor Doing This You Will CAN!!!!!!!

const testArr = [1, 2, 3, 4, 5, 111]
for (const iterator of testArr) {
    console.log(iterator);
}

let defoltStr = 'abcdeou';
let upgrateDefoltStr = defoltStr.replace(/[^abcd]/gi, '');
console.log(upgrateDefoltStr);

const firstFunc = (name , callback) => {
    alert(`We need kill ${name}!`);
    callback();
}
const callbackFunc = () => alert('Mission complete! Person was died!');
firstFunc('Влад' , callbackFunc)

let someArr = ['Vlad', 'Egor', 'Eror 404', undefined , null];
let someArrFilter = someArr.filter((num) => typeof num === typeof 'string');
console.log(someArrFilter);

//Методы
let arrForMetods = [10, 22, 31, 467, 6, 7, 8, 123];
let arrMap = arrForMetods.map((multiplay) => `Number:${multiplay}`);
console.log(arrMap);

let arrForEach = arrForMetods.forEach((elem , i) => {
    console.log(`${i}: ${elem}`);
})

let arr1 = [[1,3],[2,4]];
let arr2 = [[5,6],[10,120]];
let con = arr1[0].concat(arr1[1] , arr2[0] , arr2[1]);
console.log(con);