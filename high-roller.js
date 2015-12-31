var DiceInstance = require('./dice.js');
var playerOne = new DiceInstance(6, 2);
var playerTwo = new DiceInstance(6, 2);
var playerThree = new DiceInstance(6, 2);

function HighRoller(numberOfPlayers, numberOfTurns) {
  this.numberOfPlayers = numberOfPlayers || 2;
}
HighRoller.prototype = {
  play: function () {
    if(arguments.length != this.numberOfPlayers) return 'All players must roll';

    var score = {}
    var highScore = 0;
    var winner;

    for(var i = 1; i <= arguments.length; i++) {
      score[i] = arguments[i-1][0][0] + arguments[i-1][0][1];
    }
    for (key in score) {
      if(score[key] > highScore) {
        highScore = score[key];
        winner = key;
      }
    }
    return [score, winner];
  }
}

var gameInstance = new HighRoller(3);
console.log(gameInstance.play(playerOne.roll(), playerTwo.roll(), playerThree.roll()));


