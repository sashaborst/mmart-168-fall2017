# Homework 2: Intro to the DOM
> * Due date: Midnight on Wednesday, 9/6
> * To submit: See instructions in Part III


## PART I: SETUP & DRAWING

### 1. Clone the homework from GitHub
Open the Terminal:
```
$ git clone https://github.com/vanwars/mmart-168-fall2017.git
$ cd mmart-168-fall2017/hw02 #navigate to your hw02 directory
$ ls #list the files
$ open index.html #will open index.html in your default browser
```
### 2. Draw the DOM
Draw a picture (a.k.a “tree diagram” or “schema”) of the DOM for the index.html file, using the same kind of tree structure that you used last week.




[PASTE DRAWING HERE]





## PART II: MAKE CHANGES TO MAIN.JS
### 1. Modifying InnerHTML
Update the ***modifyText*** function so that it:
* Changes the text of message2 (by setting the innerHTML property)
* Changes the username of link2 and user2 (by setting the innerHTML property) to spell Beyonce’s username correctly.

### 2. Modifying Attributes: Part I
Update the ***changeLinkAndImageAttributes*** function so that it:
* Sets the href attribute for link1 to point to: https://twitter.com/mmart168
* Sets the href attribute for link2 to point to: https://twitter.com/beyonce
* Sets the src attribute for the beyonce image to point to:
http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg

### 3. Modifying Attributes: II
Update the ***changeClassAttribute*** function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.

### 4. Appending Elements
Update the appendElements function so that it adds the following elements to the bottom of tweet1:
* An “a” element (a link) that links to our course website (https://f17.ebook.mmart.us/) and has a link text that say “Intro to JavaScript.”
* An “img” element (an image) that points to an image of your choice, symbolizing something about the course.

### 5. EXTRA CREDIT: Manipulating the DOM Using Data
You can also modify the DOM by reading from data. If you finished the required homework and feel like doing a bit more, open example.html and try the following:
* switch out the tweet index numbers and see how things change
* try to complete the tweet2() and tweet3() functions
* try to make a loop and output all of the Tweets (if you are familiar w/loops)

## PART III: SUBMIT
You may submit the homework in one of two ways:

### 1. Using GitHub (extra credit):
Commit your updated files to your local repo
Push your local commit to your remote repository
Paste a link to your updated files on GitHub in the Moodle

- OR -

### 2. Through Moodle
Zip all of your files and upload to the Moodle
