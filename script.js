function getResult(playerchoice,aichoice)
{
    let score;
    if(playerchoice === aichoice)
        score=0;
    else if(playerchoice === 'Rock' && aichoice === 'Scissor')
        score=1;
    else if(playerchoice === 'Scissor' && aichoice === 'Rock')
        score=1;
    else if(playerchoice === 'Paper' && aichoice === 'Rock')
        score=1;
    else
        score=-1;
    return score;
}

function getAiChoice(){
    const choices = ['Rock','Paper','Scissor'];
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function showResult(score,playerchoice,aichoice){
    let playerScore = document.getElementById('playerscore');
    let hands = document.getElementById('hands');
    let results = document.getElementById('result');
    let text = document.getElementById('score');

    switch(score)
    {
        case -1:
            results.innerText = `You Lose!`;
            break;
        case 0:
            results.innerText = `It's a Draw!`;
            break;
        case 1:
            results.innerText = `You Won!`;
            break;
    }

    text.innerText = `Score: `;
    playerScore.innerText = `${Number(playerScore.innerText) + score}`;
    hands.innerText = `🤵 ${playerchoice} vs 🤖 ${aichoice}`;
}

function onClickRPS(playerchoice){
    let aichoice = getAiChoice();
    let score = getResult(playerchoice.value,aichoice);
    showResult(score,playerchoice.value,aichoice);
}

function endGame(){
    let playerScore = document.getElementById('playerscore');
    let hands = document.getElementById('hands');
    let results = document.getElementById('result');
    let text = document.getElementById('score');

    playerScore.innerText = '';
    hands.innerText = '';
    results.innerText = '';
    text.innerText = '';
}

function playgame(){
    let rpsbuttons = document.querySelectorAll('.rpsbutton');
    rpsbuttons.forEach(button => {
        button.onclick = () => onClickRPS(button);
    });

    let gameEndBtn = document.getElementById('endgame');
    gameEndBtn.onclick = () => endGame();
}
playgame()