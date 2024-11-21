'use strict'
let secretNumber=GenerateSecretNumber();
let score=Number(document.querySelector('.score').textContent);
let highScore=0;

document.querySelector('.check').addEventListener('click',function (){
  const guess=Number(document.querySelector('.guess').value);
 
    if(!guess)
        {
            console.log('😈 No number' );
        }
    else if(score==1)
        {
            displayScore(0);
            displayMessage('😞 You Lost The Game');
        }    
    else if(guess==secretNumber)
        {
            displayMessage('🎉 Correct Number');
            displaySecretNumber(secretNumber);
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            if(score>highScore)
            {
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;
            }
        }    
        else if(guess != secretNumber)
        {
            --score;
            displayScore(score);
            displayMessage(guess>secretNumber?'Too High':'Too Low');
        }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=GenerateSecretNumber();
    displayMessage('Start guessing...')
    displaySecretNumber('?');
    displayScore(score);
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
});
   function GenerateSecretNumber ()
  {
      return Math.trunc(Math.random(20)*20)+1
  }

  const displayMessage= function (message)
  {
      document.querySelector('.message').textContent=message;
  };
  const displayScore= function (score)
  {
      document.querySelector('.score').textContent=score;
  };
 const displaySecretNumber= function (number)
 {
    document.querySelector('.number').textContent=number;
 }