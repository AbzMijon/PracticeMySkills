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

//hometask =================================

//Task 1
function addition(num) {
    let sum = null;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }    
    console.log(sum);
}
addition(100);

//Task 2
function percent(sumCredit) {
    let percentInYear = 0.17;
    let creaditYear = 5;
    return (sumCredit * percentInYear) * (creaditYear - 1);
}
console.log(percent(100));

//Task 3
function trimString(str , from , to) {
    str = str.split('');
    console.log(str.slice(from , to).join(''));
}
trimString('heloop', 2, 5);

//Task 4 ------
const getSumNumbers = function(num) {
    let sum = 0;
    num = String(num).split('');
    for (let i = 0; i < num; i++) {
        sum += num[i];
    }
}
console.log(getSumNumbers(2021));

//Taks 5 -------
const getSum = function (a , b) {
    for (let i = 0; i < b; i++) {
        console.log(a[i]);
    }
    if (a === b) {
        console.log('Equal..');
    }
}
console.log(getSum(1,2));

//Task 6 
const foo = function() {return console.log('foo')};
const boo = function() {return console.log('boo')};
const fooboo = function(bool , foo , boo) {
    if (bool === true) return foo()
    return boo();
    }
console.log(fooboo(false , foo , boo));


function makeNegative(num) {
    if (num === 0) return num;
      else if (num === -num) return num;
      else return -num;
    }
  console.log(makeNegative(9));