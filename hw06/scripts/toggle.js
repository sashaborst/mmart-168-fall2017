// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const toggleLike = () => {
  if (document.getElementById('like').classList.contains('active','spin')) {
    //remove the active class
    document.getElementById('like').classList.remove('active','spin')
  }
  else {
  //add the active class
  document.getElementById('like').classList.add('active','spin')
}
}

// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'
const toggle = () => {
  document.getElementById('like2').classList.toggle('active')
}

// () => {
//   document.getElementsByClass('like').onClick.classList.add('spin')
// }

// document.getElementsByClass('like').onClick = () => {
//   document.getElementsByClass('like').classList.add('spin')
// }
