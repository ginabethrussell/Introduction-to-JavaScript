/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true 
//if age > 18 (no function required)
console.log("Task 1: Warm-up!");
console.log("Task a");
const votingAge = 18;
if (votingAge > 18) {
    console.log(true);
}
console.log();

//Task b: declare a variable and then use a conditional to change the 
//value of that variable based on the value assigned to a second variable (no function required)
console.log("Task b");
const breakpoint = 0.5;
let value = 0.3;
if (value >= breakpoint) {
    value = 1;
}else {
    value = 0;
}
console.log(value);
console.log();

//Task c: Convert string ("1999") to integer (1999)  (no function required) 
// hint look up the Number method
console.log("Task c");
let stringNum = "1999";
let num = Number(stringNum);
console.log(typeof(num));
console.log(num);
console.log()

//Task d: Write a function to multiply a*b 
console.log("Task d");
const multiply = (a,b) => a * b;

console.log(multiply(3,3));
console.log(multiply(10,5));
console.log();

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
console.log("Task 2 - Age in Dog Years\n");

const ageInDogYears = (humanAge) => humanAge * 7;
const myAge = 45;
console.log(`My age, ${myAge}, is ${ageInDogYears(myAge)} in dog years.\n`);
console.log();
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) 
//and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - 
// if your calculations are correct your result should be 0.44999999999999996
console.log('Task 3 - Dog Feeder\n')

function dogFeeder(weight, age) {
    // Calculate dry food amount per day for a puppy or a dog
    if (age < 1 ){
    return `Your ${age}-year old puppy needs ${calculatePuppyFood(weight, age)}lbs of dry dog food a day.\n`;
    }else {
    return `Your ${weight}lb dog needs ${calculateDogFood(weight)}lbs of dry dog food a day.\n`;
    }
}
function calculatePuppyFood(weight, age){
    //calculate dry food amount for puppies less than 1 year old
    if (age < 1/6){
    return (0);
    }else if (age <= 1/3) {
        return weight * 0.10;
    }else if (age <= 7/12){
        return weight * 0.05;
    }else {
        return weight * 0.04;
    }
}
function calculateDogFood(weight){
    //calculate dry food amount for dogs 1 year old or older
    if (weight <= 5){
        return weight * 0.05;
    }else if (weight <= 10) {
        return weight * 0.04;
    }else if (weight <= 15){
        return weight * .03;
    }else {
        return weight * .02;
    }
}
console.log(dogFeeder(15,1));
// console.log(dogFeeder(8, 3/4));
// console.log(dogFeeder(3, 1/12));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
console.log('Task 4 = Rock, Paper, Scissors\n')

function playRPS(userEntry){
    // convert userChoice into an integer value (0,1,2) for easier comparison with computer choice
    const userChoice = convertUserChoice(userEntry);

    // if userChoice is invalid, end the game
    if (userChoice === -1) {
        console.log(`A ${userEntry} is not a valid choice.\n`);
        return;
    }

    // generate a random integer value (0,1,2) for computer choice
    const compChoice = getCompChoice();

    // display user choice
    console.log(`You chose ${userEntry}.`);
    // use an array index to display computer's choice to user
    const compEntries = ['rock', 'paper', 'scissors'];
    console.log(`I chose ${compEntries[compChoice]}.`);  

    // determine winner and display message
    const gameMessage = compareChoices(userChoice, compChoice);
    console.log(gameMessage);
    console.log();
}

function convertUserChoice(userEntry){
    //convert userEntry into a userChoice value for comparison
    if (userEntry === 'rock') {
        return 0;
    }else if (userEntry === 'paper') {
        return 1;
    }else if (userEntry === 'scissors') {
        return 2;
    }else {
        return -1; // flag value for invalid choice
    }
}
function getCompChoice(){
    // generate a random integer (0,1,2) for computer choice
    return Math.floor(Math.random() * 3);
}

function compareChoices(userChoice, compChoice){
    //set up game logic to determine the winner  
    if (userChoice === compChoice) { // check for a tie
        return "We tied!";
    }else if (userChoice === 0){ // user chooses rock
        if(compChoice === 1){   //computer chooses paper
            return "You lose.";
        }else {                 //computer chooses scissors
            return "You win!";
        }
    }else if (userChoice === 1){ // user chooses paper
        if (compChoice === 0) {  // computer chooses rock
            return "You win!"
        }else {                  // computer chooses scissors
            return "You lose."
        }
    }else {                     //user chooses scissors
        if (compChoice === 0){  // computer chooses rock
            return "You lose."
        }else {
            return "You win!"   //computer chooses paper
        }
    } 
}
  playRPS("rock");
  playRPS("paper");
  playRPS("scissors");
  playRPS('stapler');
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

console.log("Task 5 - Metric Converter\n");
// conversion factor km to miles: 1 Kilometer (km) is equal to 0.62137119223 mile.
const kmToMi = (km) => km * 0.62137119223;

console.log(kmToMi(5));
console.log(kmToMi(10));
console.log();

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// conversion factor feet to cm: 1 foot is equal to 30.48 cm.
const ftToCm = (ft) => ft * 30.48;
console.log(ftToCm(5));
console.log(ftToCm(10));
console.log();


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log 
// (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
console.log("Task 6 - 99 bottles of soda on the wall \n");

function annoyingSong(number){
    //create a for loop to count down from the number given
    for (let i = number; i > 0; i--){
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall.`);
    }
    console.log();
}

annoyingSong(10);
// annoyingSong(0);
// annoyingSong(1);
// annoyingSong(99);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
console.log('Task 7 - Grade Calculator\n');

function assignLetterGrade(number){
    if (number >= 90){
        return 'A';
    }else if (number >= 80){
        return 'B';
    }else if (number >= 70){
        return 'C';
    }else if (number >=60){
        return 'D';
    }else {
        return 'F';
    }
}

console.log(assignLetterGrade(70));
console.log(assignLetterGrade(95));
console.log(assignLetterGrade(50));
console.log(assignLetterGrade(83));
console.log(assignLetterGrade(66));

console.log();
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
console.log('Stretch Task - Create a function that counts vowels in a string\n');

// create an array of vowels to check
const vowelArr = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

function countVowels(textString){
    const stringLength = textString.length;
    let vowelCount = 0;
    // loop through the string one character at a time, adding one to the vowel count if it's in the vowel array
    for (let i = 0; i < stringLength; i++ ){
        if (vowelArr.includes(textString[i])) {
            vowelCount++;
        }
    }
    return `The total number of vowels in \'${textString}\' is ${vowelCount}.`;
}

console.log(countVowels('Create a function that counts the number of vowels within a string.'));
// console.log(countVowels('The quick brown fox jumped over the lazy dog.'));
// console.log(countVowels('ThE quIck brOwn fOx jUmpEd OvEr thE lAzy dOg.'));
console.log();

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers scissors code below to take a prompt from a user using the window object





