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

//Lesson TMS-FE-24onl













// Practice Skills With JavaScript

//1
/* let userName = prompt('Create Name..');
let userPass = prompt('Create Password..');
const mainUser = {
    name: userName ,
    password: userPass ,
}
const confExit = confirm('Now You Exit From Account And You Repeat NAME and PASSWORD..)');
let userNameCheck = prompt('Enter Name');
let userPassCheck = prompt('Enter Password');
const treatmentUserInfo = function () {
    if (userNameCheck === mainUser.name && userPassCheck === mainUser.password) {
        alert(`Welcome ${mainUser.name}`);
        userStrForPalindrom = prompt('Okey , Now Enter Word To Checked To PALINDROM!');
        let palindromCheck = userStrForPalindrom.split('').reverse().join('');
        if (userStrForPalindrom === palindromCheck) alert(`${userStrForPalindrom} is a PALINDROM`);
        else alert(`${userStrForPalindrom} is NOT a PALINDROM`);
        mainUser.palindrom = userStrForPalindrom;
    }
    else alert('You Does Mistakes In NAME or PASSWORD');
}
treatmentUserInfo();
console.log(mainUser);

//2
function solution(str, ending){
    if(str[str.length - 2] + str[str.length - 1] == ending) return true;
    return false;
}
console.log(solution('abc' , 'c')); */

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