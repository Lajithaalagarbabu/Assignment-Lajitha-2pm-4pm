//Find Highest Score

let marks = [45, 80, 60, 90];
let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Highest Score:", highest);


//Filter Passed Students

let scores = [30, 55, 70, 20, 85];

for (let score of scores) {
  if (score >= 50) {
    console.log("Passed:", score);
  }
}