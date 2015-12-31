function Dice(sides, numberOfDice, diceColor, numberColor) {
  this.sides = sides || 6;
  this.numberOfDice = numberOfDice || 1;
  this.diceColor = diceColor || 'white';
  this.numberColor = numberColor || 'black';
}

Dice.prototype.roll = function(numberOfRolls, numberOfDiceToRoll) {
  var resultsArray = [];
  this.numberOfRolls = numberOfRolls || 1;
  this.numberOfDiceToRoll = numberOfDiceToRoll || this.numberOfDice;
  for(var i = 0; i < this.numberOfRolls; i++) {
    resultsArray.push([])
    for(var j = 0; j < this.numberOfDiceToRoll; j++) {
      resultsArray[i].push(Math.floor(Math.random() * this.sides) + 1);      
    }
  }
  return resultsArray;
}

module.exports = Dice;


