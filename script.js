var makePolitician = function (color) {
  var politician = {};
  politician.color = color;
  politician.electionResults = null;
  politician.name = "";
  politician.votes = 0;

  politician.tally = function () {
    this.votes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
     this.votes = this.votes + this.electionResults[i];
      console.log(this.votes);
    }
    return this.votes;
  };
  return politician;
};

var HalleBerryAsCatwoman = makePolitician([132, 17, 11]);
HalleBerryAsCatwoman.name = "Halle Berry As Catwoman!";
var MachoManRandySavage = makePolitician([245, 141, 136]);
MachoManRandySavage.name = "Macho Man Randy Savage!";

var stateResults = document.getElementById("stateResults");
var stateRow = stateResults.children[0].children[0].children;

var HallesRow = stateResults.children[1].children[0].children;
HallesRow[0].innerText = HalleBerryAsCatwoman.name;

var RandysRow = stateResults.children[1].children[1].children;
RandysRow[0].innerText = MachoManRandySavage.name;

var WinnersRow = stateResults.children[1].children[2].children;

var setStateResults = function (state) {
  if (HalleBerryAsCatwoman.electionResults[state] > MachoManRandySavage.electionResults[state]) {
    theStates[state].winner = HalleBerryAsCatwoman;
  } else if (HalleBerryAsCatwoman.electionResults[state] == MachoManRandySavage.electionResults[state]) {
    theStates[state].winner = null;
  } else {
    theStates[state].winner = MachoManRandySavage;
  }

  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = theStates[state].winner.color;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
  stateRow[0].innerText = theStates[state].nameFull;
  stateRow[1].innerText = "(" + theStates[state].nameAbbrev + ")";

  HallesRow[1].innerText = HalleBerryAsCatwoman.electionResults[state];

  RandysRow[1].innerText = MachoManRandySavage.electionResults[state];

  if (theStates[state].winner === null) {
    WinnersRow[1].innerText = "It's a tie!";
  } else {
    WinnersRow[1].innerText = theStates[state].winner.name;
  }
};

HalleBerryAsCatwoman.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2]

MachoManRandySavage.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1]

HalleBerryAsCatwoman.tally();
MachoManRandySavage.tally();

//console.log(MachoManRandySavage);
//console.log(HalleBerryAsCatwoman);

var winner;
if (HalleBerryAsCatwoman.votes > MachoManRandySavage.votes) {
  winner = HalleBerryAsCatwoman;
} else if (MachoManRandySavage.votes == HalleBerryAsCatwoman.votes) {
  winner = {};
  winner.name = "It's a draw!";
} else {
  winner = MachoManRandySavage;
}

var countryResults = document.getElementById("countryResults");
var countryRow = countryResults.children[0].children[0].children;
countryRow[0].innerText = HalleBerryAsCatwoman.name;
countryRow[1].innerText = HalleBerryAsCatwoman.votes;
countryRow[2].innerText = MachoManRandySavage.name;
countryRow[3].innerText = MachoManRandySavage.votes;
countryRow[5].innerText = winner.name;

console.log("And the winner is ... " + winner.name);
