



// a. Create a variable called dayOfWeek assign it a value of the string ‘Monday’. 
let dayOfWeek = 'Monday'

// b. Print this variable to the console 

console.log(dayOfWeek)

// On a following line, change the value of dayOfWeek so that it has the value ‘Friday’.
dayOfWeek = 'Friday'



// Put down a breakpoint on the first line of your code in the browser and run your code with the debugger. 
// Use the Step Into button to go from line to line. 
// Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed.
// Print the statement ‘I can’t wait for Friday!” using the dayOfWeek variable
console.log(`I cant wait for ${dayOfWeek}` )



// Create a variable called animalInput and set it equal to the input function call with the phrase ‘What is your favorite animal?’

let animalInput = prompt('What is your favorite animal?')

// Create another variable called colorInput and set it equal to the input function call with the phrase ‘What is your favorite color?
let colorInput = prompt("What is your favorite color?")

// Combine these two variables within a string so you can print the phrase “I’ve never seen a <color> <animal>!”
console.log(`I've never seen a ${colorInput} ${animalInput}`)

// home_fries
// chicken_sandwich
// honey_chicken_four_cheese_mac

// Create a variable called timeOfDay and give it the value 130
let timeOfDay ='ao'

// Below that, create another variable. This time, you choose the name.
// This variable will end up holding the value of one of the meals you have previous chosen. But right now,
// you don’t know which it will hold! What would be a good name to use for a variable that might end up with any of those three values?

let favoriteMeal 

//  Now create a conditional with three parts: if timeOfDay has a value of less than 1200, 
// assign your own variable the value of the breakfast you chose.

if (timeOfDay<1200 ) {
    favoriteMeal = 'home_fries'
}

// If timeOfDay is between 1200 and 1700, assign your variable the lunch you chose
else if (timeOfDay >= 1200 & timeOfDay<=1700) {
    favoriteMeal = 'chicken_sandwich'
    
}

// If timeOfDay is greater than 1700, assign your variable the dinner you chos
else if (timeOfDay >1700) {
    favoriteMeal = 'honey_chicken_four_cheese_mac'
    
} 

// After these conditionals, print your variable to the console. What value do you expect it to show?
console.log(favoriteMeal)


//Go back to the line where you created timeOfDay and change its value twice so that you are able to see the other two meals print when you run the code.


// Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error. 
// Think about how the variable is being used and what types of values would not make sense to be used that way. 
// Run the code again to see the error get thrown.

// Declare a variable to store a random number between 0 and 10. 
// You will need to do some research to determine how to generate a random number in JavaScript.

let randomNumber = Math.floor(Math.random()*10)
console.log(randomNumber)


// a. A good search term to use: “random number JavaScript”

// b. If the number is between 0 and 2, print to the console “Beatles”

// c. If the number is between 3 and 5, print to the console “Stones”

// d. If the number is between 6 and 8, print to the console “Floyd”

// e. If the number is equal to 9 or 10, print to the console “Hendrix”

if (randomNumber <=2) {
    console.log('Beatles')
}
else if (randomNumber>= 3 & randomNumber<=5 ) {
    console.log('Stones')
}
else if (randomNumber>= 6 & randomNumber<=8 ) {
    console.log('Floyd')
}
else if (randomNumber>= 9 & randomNumber<=10 ) {
    console.log('Hendix')
}


// Write your own for loop that will display the message “JavaScript is cool!” 7 times.

for (let index = 0; index < 7; index++) {
    console.log('JavaScript is cool!')

}

// Write your own for loop that will display the numbers 0-10, one number per loop. 
// You will need to utilize a variable for this!

for (let index = 0; index < 11; index++) {
    console.log(index)
    
}



// Write a for loop that will print the following sequence: odd = hello even = goodbye
for (let index = 0; index < 11; index++) {
    if (index%2===0) {
        console.log('hello')
    }
    else{
        console.log('goodbye')

    }
    
}



// 1. Favorite Movie (void functions)
// a. Create an appropriately named variable and assign it the value of the name of your favorite movie.
function favorite_movie() {
    my_favorite_movie = 'seven'
    console.log(my_favorite_movie)
    
} 

favorite_movie()




// Favorite Band (return functions)

// a. Write a function that asks a user to enter their favorite band

// b. On the next line, the function should return the user’s response

// c. When you call the function, save the returned result as a new variable. 

// d. After the function is called, print the returned result.

function favoriteBand() {
    let users_favorite_band = prompt('Enter your favorite band: ')
    return users_favorite_band
}

my_band=favoriteBand()

console.log(my_band)


// Create a new function called concertDisplay. This function should have one parameter called musicalAct 

function concertDisplay(musicalAct) {
    // Inside the function, ask the user to enter the street they live on and save it as a variable called myStreet.
    let users_street = prompt('enter the street you live on : ')

    // Print a string that combines the variable that holds the user’s response along with the musicalAct parameter. 
    // The message should end up saying “It would be great if < musicalAct> played a show on <myStreet>!” 
    console.log(`It would be great if ${musicalAct} played a show on ${users_street}!`)
}



wish=concertDisplay('kendrick')
console.log(wish)

// Desktop Items

// a. Create a new variable called desktopItems. Establish this variable as an array by setting it equal to a pair of square bracket [].
// b. Between the brackets, add a few strings to describe three items you see around you in your workspace
// d. What index values do these 3 items have?

// e. Print to the console the item that resides in index 1.
desktopItems = ['desk','chair','window']

console.log(desktopItems[1])

// On a new line, use the JavaScript array method that allows you to add new things to an existing array to add the string ‘Infinity Gauntlet’ to your desktopItems array.
desktopItems.push('strom')
// Now, utilize a for loop to iterate over your array and print out each item one at a time
for (let index = 0; index < desktopItems.length; index++) {
    console.log(desktopItems[index]);
}




// Create a variable called magicNumber and give it an initial value of 50
let magicNumber = Math.floor(Math.random()*100)
// Create a variable called guess and give it an initial value of 0
let guess = 0

// Create a while loop that will allow a user to continue to input a guess until they correctly choose the magic number.
while (guess != magicNumber) {
    guess = prompt('Guess the magic number: ')

    if (guess == magicNumber) {
        console.log('Congratulations')
        break
        
    }
// f the number is correctly guessed, instead of “Getting warmer!”, print the magic number along with a congratulations message and break the loop. 
   else if (guess> (magicNumber-10) && guess<(magicNumber+10) ) {
console.log('Getting warmer!')
   }


    else if (guess<magicNumber) {
        console.log('Too low!')
        
    }
    else if (guess > magicNumber) {
        console.log('Too high!')
        
    }
    
}