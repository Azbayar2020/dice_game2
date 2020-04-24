// Тоглогчийн ээлжийг хадгалсан хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;


//Тоглогчдийн цуглуулсан оноог хадгалсан хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль ч талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утга

var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
// window.document.querySelector('#score-1').innerHTML = "<em>haha</em>";
document.querySelector(".dice").style.display = "none";
console.log("Шоо: " + dice);