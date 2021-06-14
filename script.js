// let currentYear = 2021;
// let birthYear  = 1991;
// let age  = currentYear - birthYear;
// console.log('I am ' + age + ' or ' + (age - 1));

// let celsius = 30;
// let celsiusInF = (celsius*9)/5 + 32;
// console.log(celsius + '°C is ' + celsiusInF + '°F');
// let fahrenheit = 20;
// let fahrenheitInC = ((fahrenheit - 32)*5)/9;
// console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

// let startNumber = 0;
// let endNumber = 41;

// for(let i = Number(startNumber); i <= Number(endNumber); i++ ) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }


// let i = 0;
// let bigArray = [
//     [1, 3, 5, 6, 7],
//     [8, 9, 7, 2, 1],
//     [0, 5, 1, 7, 9],
//     [2, 8, 4, 6, 7],
// ]

// for(let i = 0; i < bigArray.length; i++) {
//     console.log(i);
//     let j = 0;
//     for(let j = 0; j < bigArray[i].length; j++) {
//         console.log(bigArray[i][j]);
//     }
// }


// let color = ["blue", "green", "red", "orange", "yellow"];
// let o = ["th", "st", "nd", "rd"];

// for(let i = 0; i < color.length; i++) {
//     if(i === 0) {
//         console.log(`${i + 1}${o[1]} choice is ${color[i]}`)
//     }
//     if(i === 1) {
//         console.log(`${i + 1}${o[2]} choice is ${color[i]}`)
//     }
//     if(i === 2) {
//         console.log(`${i + 1}${o[3]} choice is ${color[i]}`)
//     }
//     if(i >= 3) {
//         console.log(`${i + 1}${o[0]} choice is ${color[i]}`)
//     }
// }


// let hashtag = ["#", "##", "###", "####", "#####", "######", "#######"];

// for(let i = 0; i < hashtag.length; i++) {
//     console.log(hashtag[i]);
// }


for(let i = 1; i < 101; i++) {
    if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3*5 === 0) {
        console.log("FizzBuzz");
    }
    else console.log(i);
}


