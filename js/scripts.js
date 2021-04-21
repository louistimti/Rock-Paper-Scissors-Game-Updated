let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let roundNumberPara = document.querySelector('.round-number-para');
let roundMessage = document.querySelector('.round-message-para');
let npcMove = document.querySelector('.npc-move-para');
let playerScore = document.querySelector('.player-score-box-para');
let npcScore = document.querySelector('.npc-score-box-para');

let roundCount = 0;
let playerScoreCount = 0;
let npcScoreCount = 0;

btnRock.addEventListener('click', function () {
  if (roundCount < 5) {
    roundCount++;
    roundNumberPara.textContent = roundCount;
    let computerArray = ['Rock', 'Paper', 'Scissors'];
    npcMove.textContent =
      computerArray[Math.floor(Math.random() * computerArray.length)];
    if (npcMove.textContent === 'Rock') {
      roundMessage.textContent = 'Tie!';
      // console.log('Its a tie for the both of you!');
    } else if (npcMove.textContent === 'Paper') {
      //   console.log('You lost! You were wrapped up :(');
      roundMessage.textContent = 'Fuck!';
      npcScoreCount++;
      npcScore.textContent = npcScoreCount;
    } else {
      //   console.log('You won!! You broke that scissors for real!');
      roundMessage.textContent = 'Yay';
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
    }
  }
  finalRoundAssessment();
});

btnPaper.addEventListener('click', function () {
  if (roundCount < 5) {
    roundCount++;
    roundNumberPara.textContent = roundCount;
    let computerArray = ['Rock', 'Paper', 'Scissors'];
    npcMove.textContent =
      computerArray[Math.floor(Math.random() * computerArray.length)];
    if (npcMove.textContent === 'Paper') {
      roundMessage.textContent = 'Tie!';
      // console.log('Its a tie for the both of you!');
    } else if (npcMove.textContent === 'Scissors') {
      //   console.log('You lost! You were wrapped up :(');
      roundMessage.textContent = 'Fuck!';
      npcScoreCount++;
      npcScore.textContent = npcScoreCount;
    } else {
      //   console.log('You won!! You broke that scissors for real!');
      roundMessage.textContent = 'Yay';
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
    }
  }
  finalRoundAssessment();
});

btnScissors.addEventListener('click', function () {
  if (roundCount < 5) {
    roundCount++;
    roundNumberPara.textContent = roundCount;
    let computerArray = ['Rock', 'Paper', 'Scissors'];
    npcMove.textContent =
      computerArray[Math.floor(Math.random() * computerArray.length)];
    if (npcMove.textContent === 'Scissors') {
      roundMessage.textContent = 'Tie!';
      // console.log('Its a tie for the both of you!');
    } else if (npcMove.textContent === 'Rock') {
      //   console.log('You lost! You were wrapped up :(');
      roundMessage.textContent = 'Fuck!';
      npcScoreCount++;
      npcScore.textContent = npcScoreCount;
    } else {
      //   console.log('You won!! You broke that scissors for real!');
      roundMessage.textContent = 'Yay';
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
    }
  }
  finalRoundAssessment();
});

function finalRoundAssessment() {
  if (roundCount === 5) {
    roundNumberPara.style.color = 'red';
    if (playerScoreCount > npcScoreCount) {
      roundMessage.style.color = 'green';
      roundMessage.textContent =
        'Man you fried him ' + playerScoreCount + ' to ' + npcScoreCount + '!!';
    } else if (playerScoreCount === npcScoreCount) {
      roundMessage.style.color = 'gray';
      roundMessage.textContent =
        "Y'all had a tie of " +
        playerScoreCount +
        ' to ' +
        npcScoreCount +
        '..';
    } else {
      roundMessage.style.color = 'red';
      roundMessage.textContent =
        'Man you lost to him ' +
        npcScoreCount +
        ' to ' +
        playerScoreCount +
        '!!';
    }
  }
}
