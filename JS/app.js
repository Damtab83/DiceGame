let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');
let dice = document.getElementById('dice');
let scoreP1 = document.getElementById('scoreP1');
let scoreP2 = document.getElementById('scoreP2');
let currentScoreP1 = document.getElementById('currentScoreP1');
let currentScoreP2 = document.getElementById('currentScoreP2');
let de1 = document.getElementsByClassName('de1');
let de2 = document.getElementsByClassName('de2');
let de3 = document.getElementsByClassName('de3');
let de4 = document.getElementsByClassName('de4');
let de5 = document.getElementsByClassName('de5');
let de6 = document.getElementsByClassName('de6');


let img = document.getElementsByTagName('img');
let rollDiceResult;
//End of Game
if (scoreP1 === 100 || scoreP2 === 100) {
  alert('Fin de la partie')
}

//New Game Button
function reset() {
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
}
newGame.addEventListener('click', reset)

//Ajout des points aux scores
function addPointToScore(){
  let score = parseInt(scoreP1.textContent = currentScoreP1.textContent )
  if( score > 0){
    score += rollDiceResult
  }
}
hold.addEventListener('click', addPointToScore)



//Lancé de Dé
rollDice.addEventListener('click', () => {
  rollDiceResult = Math.ceil(Math.random() * 6)
  console.log(rollDiceResult)
  currentScoreP1.textContent = rollDiceResult
  console.log(typeof parseInt(currentScoreP1.textContent))

})
  



  // for(let roll of img) {
  //   if( roll == rollDiceResult){
  //     roll.classList.add('showDice')
  //   }
  //   if( roll != rollDiceResult){
  //     roll.classList.add('hiddenDice')
  //   }
  // }

