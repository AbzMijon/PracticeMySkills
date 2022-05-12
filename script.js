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

//Meeting tasks

//Palindrom
let palindromStr = 'heh';
(palindromStr === palindromStr.split('').reverse().join('')) ? console.log(true) : console.log(false);

//FizzBuzz
let someNum = 15;
(someNum % 3 === 0 && someNum % 5 === 0) ? console.log('FizzBuzz') : (someNum % 3 === 0) ? console.log('Fizz') : (someNum % 5 === 0) ? console.log('Buzz') : console.log('Error!');

//Vowels
let vowelsStr = 'hello!';
let vowelsStrResult = vowelsStr.replace(/[eyuioa]/gi, '');
console.log(vowelsStr.length - vowelsStrResult.length);