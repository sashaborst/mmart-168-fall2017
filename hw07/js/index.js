//------------------------------------------------------------------
// PART I
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):

// document.getElementById('output').append['<li>Hello!</li>']
const addLiElement = (message) => {
// Create a <li> node
const element = document.createElement('li')
// Create a text node
const textnode = document.createTextNode(message)
// Append the text to <li>
element.appendChild(textnode)
// Append <li> to <ul>
const ul = document.getElementById('output')
ul.appendChild(element)
}
//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
for (let i = 1; i <= 100; i++ ) {
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
if ( i % 3 === 0 && i % 5 === 0) {
  addLiElement('FizzBuzz')
}
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
else if ( i % 5 === 0) {
  addLiElement('Buzz')
}
else if (i % 3 === 0)   {
addLiElement('Fizz')
}
else { addLiElement(i)}
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list

}
