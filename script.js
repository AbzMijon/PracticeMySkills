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
};
console.log(colors['ru pum pu ru rum'].red , colors['ru pum pu ru rum'].blue);

//Task 5


