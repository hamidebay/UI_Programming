// Aufgabe 1: change first Chars to Uppercase
let myName = new String("hamide bay");
let newStrings = myName.split(" ");
let firstName = newStrings[0];
let vorname = firstName[0].toUpperCase() + firstName.slice(1);
let lastName = newStrings[1];
let nachname = lastName[0].toUpperCase() + lastName.slice(1);
let vullName = vorname + " " + nachname;
console.log(vullName);
alert(vullName);

// Aufgabe 2: Sifirdan 100 e kadar olan sayilari (10x10) seklinde yazdir

let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i + 1);
}
//console.log(numbers);

let myRows =
  numbers.slice(0, 10) +
  "\n" +
  numbers.slice(10, 20) +
  "\n" +
  numbers.slice(20, 30) +
  "\n" +
  numbers.slice(30, 40) +
  "\n" +
  numbers.slice(40, 50) +
  "\n" +
  numbers.slice(50, 60) +
  "\n" +
  numbers.slice(60, 70) +
  "\n" +
  numbers.slice(70, 80) +
  "\n" +
  numbers.slice(80, 90) +
  "\n" +
  numbers.slice(90, 100);

console.log(myRows);
alert(myRows);

//Aufgabe 3: asal sayilar

let primeNumbers = [];
for (var counter = 1; counter <= 100; counter++) {
  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    primeNumbers.push(counter);
  }
}

// Aufgabe 4: password generator

let passwortLength = Math.floor(Math.random() * 9) + 8;;
var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|<>#+*~-_!?§$%&/()=@';
   var charactersLength = characters.length;
   for ( var i = 0; i < passwortLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
 
console.log("result: "+ result);
alert("Passwort: " + result);


//Aufgabe 5 create sterne
let stern = "";
for (let i = 1; i < 6; i++) {
  for (let j = i; j < i + 1; j++) {
    stern += "*";
  }
  console.log(stern);
  alert(stern);
}

