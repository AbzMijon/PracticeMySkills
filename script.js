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



//Homework

//Task 1
const person = {
    name: 'John' ,
    age: 22
}
delete person.age;
delete person.name;
console.log(person);

//Task 2
const carTools = {
    wheels: 4 ,
    seats: 5
}
console.log('wheels' in carTools);

//Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
console.log(Object.keys(student)); //Намного проще)
console.log(Object.values(student));

//Или

for (const key in student) {
    console.log(key);
}
for (const key in student) {
    console.log(student[key]);
}

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
}
console.log(colors['ru pum pu ru rum'].red , colors['ru pum pu ru rum'].blue);

//Task 5
const salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}

const generatorMiddleSalaries  = function () {
    const valuesInSalaries = Object.values(salaries);
    let middleSalaries = null;
    for (let i = 0; i < valuesInSalaries.length; i++) {
        middleSalaries = (middleSalaries + valuesInSalaries[i]);
    }
    console.log(middleSalaries / valuesInSalaries.length);
}
generatorMiddleSalaries();

//Task 6
let userName = prompt('Create Your Name!');
let userPass = prompt('Now , create Your Password!');
const userInfo = {
    Name: userName ,
    Password: userPass
}
let userNameAgain = prompt('Repeat Your Name..');
let userPassAgain = prompt('Repeat Your Password..');
if (userNameAgain === userInfo.Name && userPassAgain === userInfo.Password) alert(`Добро Пожаловать ${userInfo.Name}!`);
else alert('Неверный Логин или Пороль!');

//Advanced Level ========================

//Task 2
const student1 = {
    name: 'Polina',
    age: 27,
}
const student2 = {
    name: 'Polina',
    age: 27,
}
const firstFunction = Object.keys(student1) + Object.values(student1);
const secondFunction = Object.keys(student2) + Object.values(student2);
if (firstFunction === secondFunction) console.log(true);
else console.log(false);


///////practice

//1
const myOBJ2 = {
    name: prompt('Enter your nick..') ,
    age: +prompt('Enter your age..') ,
    adminChecking: function () {
        if (this.name === 'administrator' && this.age === 19) alert('Welcome ' + this.name + '!');
        else alert(this.name + ' you Are NOT a Administrator');
    }
}
console.log(myOBJ2.adminChecking());

//2
const constructure = function(name , age , work) {
    const obj = {
        name: name ,
        age: age ,
        work , work
    }
    if (work === 'web developer') {
        for (let i = 0; i <= work.length; i++) {
            console.log(`In this work ${work.length} words. They are ${work[i]}`);
        }
    }
}
console.log(constructure('Egor' , 18 , 'web developer'));

//3
const workers = {
    vlad: 200,
    egor: 350,
    artem: 120,
    danik: 650,
    adel: 1000
}
const middleRubles = function () {
    const value = Object.values(workers);
    let result = null;
    for (let i = 0; i < value.length; i++) {
        result = result + value[i];
    }
    console.log(result / value.length);
}
middleRubles();

//4
const bigObj = {
    mainUser: {
        mainInformation: {
            name: 'Олег' ,
            surname: 'Лавров' ,
            age: 21 ,
            isWife: true
        } ,
        progremmerSkills: {
            javaScript: {
                swiperJS: true ,
                basics: true ,
                frameworks: false
            } ,
            css: {
                flexbox: true ,
                gridLayuot: true ,
                floats: false
            } ,
            html: {
                allSkills: true
            }
        } ,
        contacts: {
            tel: +3753295720 ,
            inst: '@oleg.mangol' ,
            mail: 'oleg228.gmail.com'
        }
    }
}
if (bigObj.mainUser.progremmerSkills.html.allSkills === true) console.log(`${bigObj.mainUser.mainInformation.name} - agree`);
else console.log(`${bigObj.mainUser.mainInformation.name} - disagree`);