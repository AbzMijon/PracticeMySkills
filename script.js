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
