// let name = "Mash";

// if (name === 'Mash') {
//     let hobbies = ['Sports', 'Coding'];
//     console.log(hobbies);
// }

// function greet() {
//     let name = "Manuel";
//     let age = 30;
//     console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();

// 'use strict';

// var username = "Mash";
// console.log(username);

function getName() {
    return prompt("Your Name: ", '');
}

function greet() {
    const userName = getName();
    console.log("Hello " + userName);
}

greet();