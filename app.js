// Тоглогчийн ээлжийг хадгалсан хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;


//Тоглогчдийн цуглуулсан оноог хадгалсан хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль ч талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утга


document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", shooShid);

function shooShid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        document.getElementById('current-' + activePlayer).textContent = 0;
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = "none";
        if (activePlayer === 0) {
            activePlayer = 1;

        } else {
            activePlayer = 0;
        }
    }
}