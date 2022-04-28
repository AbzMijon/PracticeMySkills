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


//Hometask

// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => console.log(element)); //Arrow Function
fibonacci.forEach(function (element) {console.log(element)}); //Function Declaration

//Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
let usersMember = users.map((elem , i) => console.log(`member ${i + 1}: ${elem}`)); //Arrow Function
let usersMember2 = users.map(function (elem , i) {console.log(`member ${i + 1}: ${elem}`)}); //Function Declaration

//Task 3
const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbersPositive = numbers.filter(num => num >= 0); //Arrow Function
let numbersPositive2 = numbers.filter(function (num) {num >= 0}); //Function Declaration
console.log(numbersPositive);