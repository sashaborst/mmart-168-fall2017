const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = [
    'https://twitter.com/mmart168',
    'https://twitter.com/beyonce',
    'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg'
]

const modifyText = () => {
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  document.querySelector('#name2').innerHTML = beyonceTweet.name
  document.querySelector('#handle2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  //Sets the href attribute for link1 to point to the first element in the links array
  // Step 1: what selector?                     // #link1
  // Step 2: what do you want to change?        // href
  // Step 3: what do you want to change it to?  // the first item in the array
  document.querySelector('#link1').href = links[0]

  //Sets the href attribute for link2 to point to the second element in the links array
  document.querySelector('#link2').href = links[1]

  //Sets the src attribute for the beyonce image to point to the third element in the links array
  document.querySelector('#beyonce').src = links[2]
}

const changeClassAttribute = () => {
  //replace the “tweet” class with the “tweet-pink” class for the two tweets
  //document.querySelector('.tweet').className = 'tweet-pink'
  document.querySelector('#tweet1').className = 'tweet-pink'
  document.querySelector('#tweet2').className = 'tweet-pink'
}

const appendElements = () => {
  // Add an “a” element (a link) to the bottom of tweet1
  // that links to our course website (https://f17.ebook.mmart.us/)
  // and has a link text that says “Intro to JavaScript.”

  // Goal: <a href="https://f17.ebook.mmart.us/">Intro to JavaScript</a>


  //Option 1:
  //document.querySelector('#tweet1').innerHTML += '<a href="https://f17.ebook.mmart.us/">Intro to JavaScript</a>'

  //Option 2:
  const a = document.createElement('a')
  const newContent = document.createTextNode('Intro to JavaScript')
  a.appendChild(newContent)
  a.href = 'https://f17.ebook.mmart.us/'
  document.querySelector('#tweet1').appendChild(a)
  //add the text node to the newly created div.
}
