// ! SPLICE
/* 
3 KAAM KRTA HAI
1-> ADD KRNA
2-> DELETE KRNA
3-> REPLACE KRNA
? OR KHIN SE BHI KR SKTA HAI
? YE RETURN MEN DELETED ELEMENTS DETA HAI
*/
// !TYPES OF METHODS
/*
THERE ARE 3 TYPES OF METHODS
1-> WO METHOD JO GLOBALLY AVAILABLE HOTE HEN. JESE ALERT() , PROMPT()
2-> KUCH HOTE HEN JO KISI K SAATH ATTACH HOTE HEN WO USI K SAATH HI MILTE HEN JESE K 'ARRAY K METHODS' ARRAY K SAATH HI MILENGE OTHERWISE NHI MILGENE.
3-> WO METHODS JO HAM KHUD BANATE HEN
*/

// !LOOP
/*
Q -> WHY DO WE USE LOOP
 1-> ITERATION K LYE
 2-> SEARCHING K LYE
 
 
? HOW TO PRACTICE LOOP
1 - PAHARE PRINT KRO 2 K
2 - USER SE POOCHO K KONSA PAHARA PRINT KRNA HAI
3 - USER SE POOCHO KHAN TAK PRINT KRWANA HAI
4 - ARRAY KO PRINT KRWANA LENGTH K ZARIE SE
5 - LENGTH KO SAMAJHNA
6 - USER KO FIND KRNA HAI ARRAY MEN SE 
7 - FLAG KA USE KRNA HAI
8 - BREAK KA KEYWORD 
9 - NESTED LOOP
10 - NESTED LOOP CHALA K i , j KO CONSOLE KR K RESULT CHECK KRO 
11 - ARRAY MEN SE DUPLICATE VLAUES KO DELETE KRNA HAI 
12 - INDEX OF PARNA HAI
13 - PALINDROM WORDS KO CHECK KRNA HAI WO WORD JO ULTA KRNE PER BHI SAME REHTE HEN
*/

// ! CHANGING CASES OF STRING
/*
Q => WHY DO WE CHANGE THE CASE OF STRING
A => ISKI ZARURAT YE HAI K AP NE APNI APP MEN JIS CASE KO FOLLOW KYA HIA FOR EXAMPLE LOWERCASE KO TO USER K INPUT KO AP USE CASE MEN CHANGE KR SKEN CHAHE USER KISI BHI CASE MEN DATA DE.
FOR EXAMPLE-> AGAR USER CAMPLE CASE MEN, CAPITAL LETTERS MEN, YA AIK LETTER BARA AIK CHOTA KR K INPUT KRE TO AP USKE INPUT KO APNE HISAB SE CHANGE KR SKTE HEN CHAEHN TO SAB KO UPPERCASE MEN CONVERT KR DEN YA LOWERCASE MEN KR DEN APKI MARZI HAI.

?NOTE => YE METHODS RETURN MEN UPDATED VALUE DETE HEN ORIGINAL VALUE KO KUCH NHI KRTE
*/

//! FINDING SEGMENT

// var arr = [
//   "apple",
//   "barry",
//   "mango",
//   "apple",
//   "grapse",
//   "banana",
//   "mango",
//   "banana",
// ];
// var value = prompt();
// const index = arr.indexOf(value);
// if (index != -1) {
//   console.log("ARR =>", index, arr[index]);
//   console.log("INDEX =>", index);
// } else {
//   console.log("Value not foud");
// }

/*
1 ==> INDEXOF()
YE ARRAY OR STRING DONO PER CHALTA HAI
YE VALUE MILNE PER USKA INDEX RETURN KRTA HAI
OR VALUE NA MILNE PER YE -1 RETURN KRTA HAI.


2 ==> LASTINDEXOF()
YE BHI INDEXOF KI TARAH HAI BAS YE LAST MEN SE VALUE KO DHOONDHTA HAI
OR YE BHI RETURN MEN VALUE KA INDEX RETURN KRTA HAI.
*/
// var string = "muhammad sanaullah";
// console.log("STRING =>", string.length);
//! REPLACING CHARACTORS
/*
LOOP K ZARIE WORD KO DHOONDHNA HAI STRING MEN SE
USE REPLACE KRNA HAI NEW WORD SE
*/

// var sentence =
//   "<b>Hamza</b> aur <b>Sanaullah</b> ek café mein baithay gupshup kar rahe thay. <b>Hamza</b> ne hasi mazak mein kaha, Bhai, tu backend developer ban gaya hai, magar mujhe lagta hai front-end bhi seekhna padega, warna mujhe har dafa teri madad leni paregi! <b>Sanaullah</b> hans kar bola, Haan bhai, seekh le warna har project pe mujhe tag karna parega! Dono hansne lage aur apni coding struggles aur future projects ke baare mein baat karne lage.";
// var value = "sanaullah";
// if (value != "") {
//   for (var i = 0; i < sentence.length; i++) {
//     if (value == sentence.slice(i, i + value.length)) {
//       sentence =
//         sentence.slice(0, i) + "Chacha" + sentence.slice(i + value.length);
//     }
//   }
// }
// SCOP
// block

// if (true) {
//   const hamza = "my name is funny";
//   console.log("hamza =>", hamza);
// }
// const hamza = "my name is funny";
// console.log("hamza =>", hamza);

//! VAR
//! let
//! const
// const userName = "sanaullah";
//! RANDOM NUMBERS
// const num = Math.round(Math.random() * 10000);
// const num = 3.2;
// console.log(Math.ceil(num));

// console.log("VU" + num);
/*
MATH.RANDOM()
1=> PASSWORD GENERATOR
2=> HEAD TAILS

PARSINT && PARSEFLOAT
IN MEN DIFFERENCE YE HAI K PARSEINT STRING MEN MOJOOD DECIMALS KO REMOVE KR K JUST INTEGER KO RETURN KRTA HAI NUMBER MEN CONVERT KR K.
OR PARSEFLOAT AS IT IS WITH DECIMALS STRING KO NUMBERS MEN CONVERT KRTA HAI.
*/

//! WEBSITES TO PRACTICE
/*
1=> FREE CODE CAMP
2=> LEET CODE
3=> HACKER RANK

*/

// value k saath + ka sign laga dene se wo value number men convert ho jati hai

// 2nd tareeqa ye hai k javascript k 2 methods hen
// 1 - parseInt
// 2 - parseFlout
// in k andar wrape krne se value number men convert ho jati hai

/*
ParseInt or parseFlout men ye faraq hai k parseInt decimal values ko hata deta hai or khalis integer value ko rehne deta hai

jabke parseFlout decimal value ko bhi parse kr deta hai
*/

// parse ka mtlab hai string ko number men convert krna.

// integer hole number ko kehte hen 8,9,2,10
// decimal number wo hote hen jo k hole number k baad point k baad likhe jate hen jese 8.8, 2.10 in examples men . k baad wale numer decimals hen

// Number

// parseFlout method
// parseInt method
// Numebr method
// + ka sign
// const age = Number(prompt("Enter your age"));
/*
+ = concatinate jore degi
- = minus hoga
* = multiply hoga
/ = divide hoga
*/

// let dob = new Date("5 Jan 2000");
// let date = new Date();
// let diff = date - dob;
// let seconds = diff / 1000;
// let mints = (diff / 1000) * 60;

// let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
// console.log(diff);
// console.log(seconds);
// console.log(mints);

const calcDisplay = document.getElementById("display");
console.log(calcDisplay);
function abc(e) {
  if (e.target.localName == "div") {
    console.log("e.target.innerHTML", e.target.innerHTML);
  } else {
    console.log("e.target.value", e.target.value);
  }
  if (e.target.value == "AC") {
    calcDisplay.innerHTML = "";
  } else if (e.target.value != "AC" && e.target.value != "CE") {
    calcDisplay.innerHTML += e.target.value;
  }
  if (e.target.value == "CE") {
    calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1);
  }
}
