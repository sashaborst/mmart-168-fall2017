# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/4 (1 week)
> * Part I: Using Github like the cool kids we are
> * Part II: Homework
> * To submit: See Part II, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 5: `$ git branch homework05`
5. Checkout your new branch: `$ git checkout homework05`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterik next to it).

## PART II: Reading response
This summer one of my clients asked me to make him a logo for his website and business cards. His idea for the logo was to make a flower of life pattern inside of dodecahedron. We agreed on the compensation for my work and as soon as I started working - he called me and asked me if I could create it in 3D and make it rotate on his website.

I thought it was a ridiculous idea, especially including the fact that I have no experience working with 3D programs. I tried to figure out how to make that in blender and Photoshop using 3d tool there, but decided that it's not worth my time for the money he was willing to spend on it.

But recently I came across WebGL and Three.js, started reading about it and I was amazed by all the staff that you could do with it. On top of that, they already have huge open source libraries of objects. And I found a 3D Geometry Primitives for WebGL that had dodecahedron already in it (https://github.com/nickdesaulniers/prims). That's really cool, I'm surprised I never knew about it earlier. It seems like it has been around for a while. I guess next time I could mess around with it and see if I could figure it out.

Another cool thing I've noticed by browsing the https://threejs.org/ library is that you could create 360 interactive immersive websites using React.js (https://facebook.github.io/react-vr/). That's bad ass!

## Part III: JavaScript Homework

### Step 1: Reverse a tweet
> Open the following 2 files in Atom:
>  
>  * hw05/part1.html
>  * hw05/scripts/part1.js

Complete the following 2 tasks:

1. Write a function called "reverseText" that takes a single string as an input. It should return that string with all characters reversed (`e.g., "Hello, world" will return "dlrow ,olleH"`).You can test this in the browser by updating the forEach function to reverse every tweet's text
> HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem.

Once you've written your reverse text function, write a comment describing how it works.

2. Now, write a function called "reverseTweet" that takes a single string as an input. If the string contains a hashtag (#), it should return the string. If it doesn't contain a hashtag, it should return the string with all characters reversed. Update the forEach function so that it reverses tweets that don't have hashtags
> HINT: Strings have a useful function called [indexOf]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)) that you may find useful
> HINT: You already have a reverseText function laying around...

### Step 2: Filtering Data
> Open the following 2 files in Atom:
>  
>  * hw05/part2.html
>  * hw05/scripts/part2.js

Complete the following task:

1. Create a new variable called tweetsWithHashtags
2. Call the "filter" function on the json.statuses array. The filter function returns an array, so you can assign the resulting array to the `tweetsWithHashtags` variable. Read more about filter here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
3. Write an anonymous function that checks each tweet's text, and filters out tweets that do NOT have hashtags.
4. Update the forEach function so that it runs on the new tweetsWithHashtags array

### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 5 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
