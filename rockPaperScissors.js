function getComputerChoice()
{
  /* Selects a random number between 0 and 2 */
  /**
   * Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). For example, it might produce a number like 0.7313746124020116.
   * 
   * The generated random number is then multiplied by 3 using the * operator. This will give a new random number between 0 (inclusive) and 3 (exclusive). For example, the result might be 2.1941238372060348.
   * 
   * Math.floor() is used to round down the resulting number to the nearest integer. In this case, it will convert the number 2.1941238372060348 to 2.
   */
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) 
  {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}


/**
 * the User's choice
 * the user inputs either rock, paper or scissors in the prompt.
 */
let playerSelection = String(prompt("Rock, Paper, Scissors, Shoot!!!: ")); 

/**
 * the Computer's choice
 * the computer randomly generates either rock, paper or
 * scissors with the help of getComputerChoice().
 */
let computerSelection = getComputerChoice();



/**
 * playRound: function that takes user and computer input
 * and declares winner. 
 * 
 * playerSelection: User's input.
 * computerSelection: Randomly generated selection.
 */
function playRound(playerSelection, computerSelection) 
{
  /* for RockxRock, PaperxPaper and ScissorsxScissors = this makes a DRAW */
  if (playerSelection.toLowerCase() == computerSelection)
  {
    return "Draw!, you played " + playerSelection + " and computer played " + computerSelection;
  }

  /* User plays ROCK!!! */
  /* For RockxPaper = this makes a LOSE */
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper")
  {

  }
  /* For RockxScissors = this makes a WIN */
  else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")
  {

  }

  /* User plays PAPER!!! */
  /* For PaperxRock = this makes a WIN */
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")
  {

  }
  /* For PaperxScissors = this makes a LOSE */
  else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")
  {

  }

  /* User plays SCISSORS!!! */
  /* For ScissorsxRock = this makes a LOSE */
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")
  {

  }
  /* For ScissorsxPaper = this makes a WIN */
  else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
  {

  }
}



console.log(playRound(playerSelection, computerSelection));