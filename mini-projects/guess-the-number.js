const prompt = require("prompt-sync")();
let secret= Math.floor(Math.random()*100)+1;
let attempts = 0;
let guess;

do{
  guess = Number(prompt('Guess a number between 1 to 100:'));
  attempts++;
  if(guess>secret) console.log('Too High!')
  else if (guess<secret) console.log('Too Low!');
}
while(guess!= secret);

console.log(`You did it in ${attempts} attempt/s.`)