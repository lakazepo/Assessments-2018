// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var a = function(b){
	if (b % 3 === 0) {
		return b + " is divisible by three"
	} else {
		return b + " is not divisble by three"
	}
}


// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.
var joseph = ["tall", "male", "coder"]

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var joseph = ["tall", "male", "coder", "psycho"]
x = joseph.pop(); //"psycho"
joseph[0] // "tall"


// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	return str.split("").reverse().join("")

	return str;
}

// keep this function call here

AlphabetSoup(readline());

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

var h = function(){
	if (nums.length > nouns.length){
		return nouns.length
	} else {
		return nums.length
	}
}

for (i=0; i<h(); i++){
	console.log(nums[i] + " " + nouns[i])
}



// output of the first function should be: "1 ducks"
