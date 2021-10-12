// LoopsExercise

// #1
for (i = 1; i <= 7; i++){
    console.log(i);
  }

// #2
for (i = 5; i <= 25; i += 4){
    console.log(i);
  }

// #3a
const wizards =
['Harry Potter',
'Hermione Granger',
'Ron Weasley'];

// #3b
for (Items of wizards){
console.log(Items);
}

// #4a
let harryPotterMovies = 0;

// #4b,4c
let number = 0;
while (number <= 8) {
  console.log(number);
  number++;
}



// Bonus
//#5a
const hogwartsHouses = [
    "Gryffindor", 
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
];
for (category of hogwartsHouses){
    for(Char of hogwartsHouses){
     console.log(Char);
    }
}
const quote =["yer", "A", "wizard",
"Harry"]
