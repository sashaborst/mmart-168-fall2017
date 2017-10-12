# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/11 (1 week)
> * Part I: Using Github because no pain, no gain
> * Part II: Homework
> * To submit: See Part III, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 6: `$ git branch homework06`
5. Checkout your new branch: `$ git checkout homework06`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterisk next to it).

## PART II: Reading response

I've read "WebGL and Javascript: Drawing Simple 3D Shapes using Three.js" (https://wowmoron.wordpress.com/2013/10/21/webgl-and-javascript-drawing-simple-3d-shapes-using-three-js/). Wowmoron.wordpress.com just seems like a very credible source. :)

I wasn't sure what the difference between WebJL and Three.js was. According the article, WebJL allows you to render 3D graphics in the browser and Three.js is a JavaScript library that makes is easier to write a WebGL code. "While it might take a lot of code for even the simplest of things in WebGL, the three.js library makes things really easy and compact"- the author says.

When creating 3D graphics on a computer screen, we need to set up 3 basic things first - Scene, Camera and Renderer. Pretty cool, this material will go well with my video production class. The canvas for the graphics goes in HTML.

Then I watched a youtube tutorial "THREE.js Part 2: Basic Scene" (https://www.youtube.com/watch?v=biZgx45Mzqo) showing how to set up the basic scene with a basic rotating cube. Besides Canvas and Camera settings, the important things to take in consideration were the Material of the object, AmbientLight and PointLight of the scene, and Rotation by x and y axes (it's possible to add z).

Since Sarah suggested to use WebGl and Three.js for my individual project, I think I could implement this knowledge into a simple animation that I wanted to create for about a year now. And do it in the browser! I'm exited.

## Part III: JavaScript Homework

Twitter used to have a star to show that users had "favorited" a tweet. They changed it to a heart at some point, but, honestly, it's easier to make a star in Illustrator, so we're making our Twitter with stars.

Hearts and stars aside, this is an important feature of tweets - either the tweet is "liked" or it isn't - and, when it's clicked, that state will switch. It's like a light switch (on/off) or a door (open/closed). We can write a `toggle` function to help us switch between those two states in Javascript, and use CSS to show the user what the current state is.

At the end of this exercise, we should have a clickable star. By default, it's grey. If we click it, it should turn gold. If we click it again, it should go back to grey.

### Toggle the Like Button
> Open the following 2 files in Atom:
>  
>  * hw06/index.html
>  * hw06/scripts/toggle.js

Complete the following 2 tasks:

1. Write an arrow function called `toggleLike`. It takes no parameters. `toggleLike` should find the DOM element with the id `like`. Now, write a conditional statement. It should check to see if the classList of the element contains the `active` class. If it does, remove the 'active' class. If it doesn't, add the 'active' class.

> HINT: You will find the [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) documentation very useful for this homework

2. Write an arrow function called `toggle` that takes no parameters. It should find a DOM element with the id `like`. without writing a conditional statement, use the classList to toggle the `active` class.

#### Extra Credit
There's a wonderful world of CSS animations out there. Using only CSS, can you animate the transition of the star element? For example, maybe it could grow before settling back to regular size, or spin when it's clicked. (:


### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which files you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Complete homework 6'`
3. To "push" your change to up to your github account, type: `$ git push origin <branch-name>`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
