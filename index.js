// Code your solutions in this file
var names= ["Ada","Brendan", "Ali"];

function printBadges(names){
  for (var counter = 0; counter<3; counter++) 
  console.log("Welcome " + names[counter] + "! "+ "You are employee #" + (counter+1) + ".");
  return names;
}

function tailsNeverFails() {
  var counter = 0;
  var number=Math.random();
  return "You got " + counter + " tails in a row!"
}
while (number>.5){
  ++counter
  number = Math.random();
}
