/* //Task 1
let str = 'true';
let bool = false;
let num = 17;
let nothing = undefined;
let zero = null;
console.log(typeof str , typeof bool , typeof num , typeof nothing , typeof zero);

//Task 2
let height = 15;
let width = 20;
if (height > width) {
    console.log(height);
}else {
    console.log(width);
}

//Task 3
for (let i = 1; i <= 20;i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let  shouldGoToWork;
if (key && documents && pen && (apple || orange) ) {
    shouldGoToWork = true;
}else {
    shouldGoToWork = false;
}
console.log(shouldGoToWork);

//Task 5

let earth = 1;
let moon = 2;
let marc = 1;
let answer
if (earth && marc === 1 && moon === 3) {
    answer = true;
}else {
    answer = false;
}
console.log(answer);

let animal = 'null';
console.log(animal ?? 'лось');

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log(typeof object); */