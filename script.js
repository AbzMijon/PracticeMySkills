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

/* 
//Hometask

//Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);

//Task 3
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0
console.log(numbers);

//Second Way (Task 3)
console.log(numbers.splice(0 , numbers.length));

//Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.pop(); students.push('Borya');
students.shift(); students.unshift('Andrey');
console.log(students);

//Task 5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) { // For
    console.log(cats[i]);
}
for (const iterator of cats) { //For Of
    console.log(iterator);
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log('Index Of number 8 = ' + allNumbers.indexOf(8) + 'rd');

//Task 7
const binary = [0, 0, 0, 0];
console.log(String(binary).split(',').join('1'));

//Advanced Level ==================

//Task 1
const PALINDROM = function (str) {
    let comparison = str.split('').reverse().join('');
    if (str === comparison) alert('It is a Palindrom!')
    else alert('It is NOT a Palindrom!');
}
PALINDROM('лимузинизумил');

//Task 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let allNums = matrix[0].concat(matrix[1] , matrix[2] , matrix[3]);
let result = null;
for (let i = 0; i < allNums.length; i++) {
    result += allNums[i]
}
console.log(result / allNums.length);

//Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let posNum = [];
let negNum = [];
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) posNum.push(mixedNumbers[i]);
    else negNum.push(mixedNumbers[i]);
}
console.log(posNum);
console.log(negNum);

//Task 4
const randomNumbers = [2 , 1 , 10 , 1 , 2];
let mainResult = [];
for (let i = 0; i < randomNumbers.length; i++) {
    mainResult.push(randomNumbers[i]**2);
}
console.log(randomNumbers);
console.log(mainResult);

// Или же вот так что бы пользователь мог сам выбрать какие числа ему нужны)

const menuRandomNumbers = confirm('Hello! Enter 5 Numbers to order and then i will show result on your viewport!')
const randomNumbers1 = prompt('Enter 1st number');
const randomNumbers2 = prompt('Enter 2st number');
const randomNumbers3 = prompt('Enter 3st number');
const randomNumbers4 = prompt('Enter 4st number');
const randomNumbers5 = prompt('Enter 5st number');
const mainRandomNumbers = [randomNumbers1 , randomNumbers2 , randomNumbers3 , randomNumbers4 , randomNumbers5];
let mainResult2 = [];
for (let i = 0; i < mainRandomNumbers.length; i++) {
    mainResult2.push(mainRandomNumbers[i]**2);
}
alert(mainResult2);
*/

// Practice Skills With JavaScript

//1
let userName = prompt('Create Name..');
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
console.log(solution('abc' , 'c'));