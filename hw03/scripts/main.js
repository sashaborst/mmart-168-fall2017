const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = ['https://twitter.com/mmart168', 'https://twitter.com/beyonce', 'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  // Part 1.a. Changes the text of message2 to be the message of the BeyonceTweet object
  document.querySelector('#message2').innerHTML = beyonceTweet.text

  // Part 1.b. Change the text of link2 --> text of tweet
  document.querySelector('#link2').innerHTML = beyonceTweet.name
  //           Change the text of user2 --> username of tweet
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
  //           <span id="user2">@bynoce</span>


}

const changeLinkAndImageAttributes = () => {
  // YOUR CODE HERE
  document.querySelector('#message2').innerHTML = 'blah'
  console.log('changing link attribute')
}

const changeClassAttribute = () => {
  // YOUR CODE HERE
  console.log('changing class attribute')
}

const appendElements = () => {
  // YOUR CODE HERE
  console.log('appending element')
}
