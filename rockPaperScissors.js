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

console.log(getComputerChoice());