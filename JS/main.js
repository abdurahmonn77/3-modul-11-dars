
// var clientAge = prompt("Yoshingizni kiriting")

// if (clientAge >= 0 && clientAge <= 5) {
//     console.log("chaqaloq");
// }
// else if(clientAge <= 0) {
//     console.log("0 dan kattaroq son kiriting");
// }
// else if (clientAge >= 6 && clientAge <= 15) {
//     console.log("yosh bola");
// }
// else if (clientAge >= 16 && clientAge <= 25) {
//     console.log("O'smir");
// }
// else if (clientAge >= 26 && clientAge <= 35) {
//     console.log("O'rta yosh");
// }
// else if (clientAge >= 36 && clientAge <= 50) {
//     console.log("Katta odam");
// }
// else if (clientAge >= 51 && clientAge <= 75) {
//     console.log("Otaxon");
// }
// else if (clientAge >= 76) {
//     console.log("Nuroniy");
// }



// 1-masala

// var givenNumber = prompt("Max 4 xonali son kiriting")

// if (givenNumber / 1000  >= 10) {
//     console.log("bu son 4 xonadan katta");
// }
// else if(givenNumber / 1000 >= 1) {
//     console.log("bu son 4 xonali");
// }
// else if (givenNumber / 100 >= 1) {
//     console.log("bu son 3 xonali");
// }
// else if (givenNumber / 10 >= 1) {
//     console.log("bu son 2 xonali");
// }
// else if (givenNumber / 1 >= 1) {
//     console.log("bu son 1 xonali");
// }
// else if (givenNumber == 0) {
//     console.log("bu son 1 xonali");
// }
// else {
//     console.log("bu son 4 xonadan katta yoki 0");
// }

// 2-MASALA

// var a = prompt("ixtiyori son kiriting")
// if (a % 2 == 0) {
//     console.log("bu son juft");
// }
// else {
//     console.log("bu son toq");
// }

// 3-MASALA 


// var givenNumber = prompt("Max 4 xonali son kiriting")

// if (givenNumber / 1000  >= 10) {
//     console.log("bu son 4 xonadan katta");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 0) {
//     console.log("bu son 4 xonali va juft");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 1) {
//     console.log("bu son 4 xonali va toq");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 0) {
//     console.log("bu son 3 xonali va juft");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 1) {
//     console.log("bu son 3 xonali va toq");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 0) {
//     console.log("bu son 2 xonali va juft");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 1) {
//     console.log("bu son 2 xonali va toq");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 0) {
//     console.log("bu son 1 xonali va juft");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 1) {
//     console.log("bu son 1 xonali va toq");
// }
// else if (givenNumber == 0 && givenNumber % 2 == 0) {
//     console.log("bu son 1 xonali va juft");
// }
// else if (givenNumber == 0 && givenNumber % 2 == 1) {
//     console.log("bu son 1 xonali va toq");
// }
// else {
//     console.log("bu son 4 xonadan katta yoki 0");
// }

// 4-MASALA

// var a = prompt("Ixtiyoriy 3ta son kiriting")
// // 456
// var b = a % 10  // 6
// var c = ((a % 100) - b) / 10 //5
// var d = (a - (a % 100)) / 100 //4
// if (b > c && c > d) {
//     console.log("" + d + c + b);
// }
// else if (c > b && b > d) {
//     console.log("" + d + b + c);
// }
// else if (d > b && b > c) {
//     console.log("" + c + b + d);
// }
// else if (d > c && c > b) {
//     console.log("" + b + c + d);
// }
// else if (b > d && d > c) {
//     console.log("" + c + d + b);
// }
// else if(c > d && d > b) {
//     console.log("" + b + d + c);
// }

// 5-MASALA

// var a = prompt("Ixtiyoriy 3ta son kiriting")
// // 456
// var b = a % 10  // 6
// var c = ((a % 100) - b) / 10 //5
// var d = (a - (a % 100)) / 100 //4
// if (b > c && c > d || c > b && b > d) {
//     console.log(d);
// }
// else if (c > d && d > b || d > c && c > b) {
//     console.log(b);
// }
// else if (d > b && b > c || b > d && d > c) {
//     console.log(c);
// }

// 6-MASALA

// var a = prompt("Ixtiyoriy 3ta son kiriting")
// // 456
// var b = a % 10  // 6
// var c = ((a % 100) - b) / 10 //5
// var d = (a - (a % 100)) / 100 //4
// console.log(c);

// 7-MASALA

var speed = prompt("Tezlikni kiriting:")

if (speed < 70) {
    alert("Hammasi yaxshi");
}
else{
    let point = Math.floor((speed - 70) / 5)
    if(point > 12){
        alert("Prava olindi");
    }
    else{
        alert(point);
    }
}

// 8-MASALA

// var born = prompt("Tug'ilgan yilingizni kiriting:")
// var age = 2024 - born
// alert("Siz " + age + " yoshdasiz" )
// console.log("Client is " + age +  " years old");

// 9-MASALA

// var givenNumber = prompt("Son kiriting")

// if (givenNumber / 1000  >= 10) {
//     console.log("bu son 4 xonadan katta");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 0 && givenNumber > 0) {
//     console.log("bu son 4 xonali va juft va musbat");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 0 && givenNumber < 0) {
//     console.log("bu son 4 xonali va juft va manfiy");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 1 && givenNumber > 0) {
//     console.log("bu son 4 xonali va toq va musbat");
// }
// else if(givenNumber / 1000 >= 1 && givenNumber % 2 == 1 && givenNumber < 0) {
//     console.log("bu son 4 xonali va toq va manfiy");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 0 && givenNumber > 0) {
//     console.log("bu son 3 xonali va juft va musbat");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 0 && givenNumber < 0) {
//     console.log("bu son 3 xonali va juft va manfiy");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 1 && givenNumber > 0) {
//     console.log("bu son 3 xonali va toq va musbat");
// }
// else if (givenNumber / 100 >= 1 && givenNumber % 2 == 1 && givenNumber < 0) {
//     console.log("bu son 3 xonali va toq va manfiy");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 0 && givenNumber > 0) {
//     console.log("bu son 2 xonali va juft va musbat");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 0 && givenNumber < 0) {
//     console.log("bu son 2 xonali va juft va manfiy");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 1 && givenNumber > 0) {
//     console.log("bu son 2 xonali va toq va musbat");
// }
// else if (givenNumber / 10 >= 1 && givenNumber % 2 == 1 && givenNumber < 0) {
//     console.log("bu son 2 xonali va toq va manfiy");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 0 && givenNumber > 0) {
//     console.log("bu son 1 xonali va juft va musbat");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 0 && givenNumber < 0) {
//     console.log("bu son 1 xonali va juft va manfiy");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 1 && givenNumber > 0) {
//     console.log("bu son 1 xonali va toq va musbat");
// }
// else if (givenNumber / 1 >= 1 && givenNumber % 2 == 1 && givenNumber < 0) {
//     console.log("bu son 1 xonali va toq va manfiy");
// }
// else if (givenNumber == 0) {
//     console.log("bu son 1 xonali");
// }

// 10-MASALA

// var a = prompt("Ixtiyoriy son kiriting:")

// if (a % 3 == 0 && a % 5 == 0) {
//     console.log("FizzBuzz");
// }
// else if (a % 3 == 0) {
//     console.log("Fizz");
// }
// else if (a % 5 == 0){
//     console.log("Buzz");
// }


// UY ISHI 

// var total = prompt("Mablag'ni kirit Alisher:")
// var dollar = 11000.34
// var euro = 12354.03
// var plane = 500 * dollar
// var hotel = 250 * dollar
// var fun = 120 * euro
// var spent = plane + hotel + fun
// if (total >= spent) {
//     alert("Oq yo'l Alisher.");
// }
// else {
//     alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
// }