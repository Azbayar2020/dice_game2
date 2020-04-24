var activePlayer;
var scores;
var roundScore;
var isNewGame;
var diceDom = document.querySelector(".dice");

initGame();

function initGame() {
    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалсан хувьсагч, 1-р тоглогч 0, 2-р тоглогч 1
    activePlayer = 0;
    //Тоглогчдийн цуглуулсан оноог хадгалсан хувьсагч
    scores = [0, 0];
    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
    // Шооны аль ч талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утга

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    diceDom.style.display = "none";

    document.getElementById('name-0').textContent = "Player -1";
    document.getElementById('name-1').textContent = "Player -2";
}

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (isNewGame) {
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + ".png";
        if (diceNumber !== 1) {
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            switchNextPlayer();
        }

    } else {
        alert("Тоглоом дууссан байна.New game товчийг дарснаар дахин тоглоно уу");
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = "Winner!!!";
        isNewGame = false;
    } else {
        switchNextPlayer();
    }
});

function switchNextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScore = 0;

    if (activePlayer === 0) {
        activePlayer = 1;

    } else {
        activePlayer = 0;
    }

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDom.style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', initGame);