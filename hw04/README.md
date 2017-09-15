# HOMEWORK 4: WORKING WITH LIVE DATA, LOOPS, AND VARIABLES
> * Due date: Midnight on Wednesday, 9/27 (2 weeks)
> * Part I: Intended to do in class
> * Part II: Homework
> * To submit: See Part II, Step 4

## Part I (In Class): Setting Up Your GitHub

### Step 1: Fork the course repository
**NOTE**: This step should be done together in class.

1. Log into your Github account: [https://github.com/](https://github.com/)
2. Navigate to the course Github page: [https://github.com/vanwars/mmart-168-fall2017](https://github.com/vanwars/mmart-168-fall2017)
3. On the top, right-hand corner of the screen, click the "Fork" button. This should create a copy of the course homework in your Github account that is yours to edit
4. Now, open your Terminal (Mac) or GitBash (Windows), and navigate to the directory where you want to store your mmart-168-fall2017 files (using the "cd" command)
5. When you're in the directory you want to be in (verify by typing "pwd"), type the following
command: <br>`$ git clone https://github.com/{{your_github_username}}/mmart-168-fall2017.git`.<br><br> For example, because my github username is ***vanwars***, I would type: <br>`$ git clone https://github.com/vanwars/mmart-168-fall2017.git`
6. In addition, set the upstream repository (the course version of the code): <br>
`$ git remote add upstream https://github.com/vanwars/mmart-168-fall2017.git`

### Step 2: Create a new branch called homework04
**NOTE**: This step should be done together in class.

Once you have pulled down ***your version*** of the course repository, you're going to make a new branch. To do so:

1. Navigate into the mmart-168-fall2017 directory by typing: `$ cd mmart-168-fall2017`
2. Then type: `$ git branch homework04`
3. Then type `$ git branch`. You should see 2 branches. One called ***master*** and one called ***homework04***. There should be an asterik next to master, indicating that ***master*** is your current branch.
4. Switch into your ***homework04*** branch by typing: `$ git checkout homework04`. To verify that it worked, type: `$ git branch`, and there should now be an asterik next to ***homework04***.
5. Now type: `$ ls ` to list all of the files and folders inside of the mmart-168-fall2017 directory. You should see a new folder called hw04.
6. Open the hw04 folder in Atom by typing `$ atom hw04`.

### Step 3: Edit, Commit, and Push
**NOTE**: This step should be done together in class.

1. Add your name to the first line of `part1.js`, `part2.js`, and `part3.js` inside of a comment (hint: use two double slashes to comment out a line, e.g., `// Ricky Holtz` would be line one of Ricky's homework files)
2. In your Terminal, type: `$ git status`. It should tell you which file you changed.
3. To "commit" this change, type: ` $ git commit -am 'My first commit'`
4. To "push" your change to up to your github account, type: `$ git push --set-upstream origin homework04`
5. To verify that it worked, go to your github account and look for the file that you just changed on your new *homework04* branch.

## Part II: JavaScript Homework

### Step 1: If Statements
> Open the following 2 files in Atom:
>  
>  * hw04/part1.html
>  * hw04/scripts/part1.js
>
> Open `part1.html` in Chrome, and try clicking the language links. What happens?
>
> Take a look at `part1.html` and notice the three language links, and the *onClick* attribute
>
> Take a look at `part1.js` and take a look at the *setLanguage* function

Complete the following 3 tasks:

1. Using comments, edit the `part1.js` file and describe in your own words what you think the *setLanguage* function does.
2. Edit the language links in `part1.html` and replace them with different languages. To see a list of language codes, navigate here: [https://www.w3schools.com/tags/ref_language_codes.asp](https://www.w3schools.com/tags/ref_language_codes.asp).
3. Finally, in the `part1.js` file, edit the ***setLanguage*** function so that it handles the new language codes and displays the correct message to the span element (inside the h1 element).

### Step 2: Working with Live Data
> Open the following 2 files in Atom:
>  
>  * hw04/part2.html
>  * hw04/scripts/part2.js
>
> Open `part2.html` in Chrome:
>
>  * Try entering a search term and clicking the "go" button
>  * Try changing the language and searching for the term again
>  * Try searching with a different search term
>  * In each case, try and figure out what you think is going on
>
> In Atom, in the `part2.html` file, scroll down to the new tags that are used to create the form. Note the "go" button, and the *onClick* attribute
>
> In Atom, in the `part2.js` file, take a look at the *getData* function.

Complete the following 3 tasks (and 1 Extra Credit, if possible):

1. Using comments, edit the `part2.js` file and describe in your own words what you think the *getData* function does.
2. Open your JavaScript Console (right-click > inspect) and type `jsonData` into the console. You should see a JavaScript object that represents the Tweets returned by your search. To reference the status array, you can type `jsonData.statuses`. How would you reference the first status in the `jsonData.statuses` list?
3. How would you reference the `text` property for the fifth status in the `jsonData.statuses` list?
4. **Extra credit**: How would you reference the `name` property, which is inside of the `user` property for the second status in the `jsonData.statuses` list?

### Step 3: Creating DOM Elements from Live Data
> Before completing the required tasks below, do a few things to get oriented with the files.
>
> Open the following 2 files in Atom:
>  
>  * hw04/part3.html
>  * hw04/scripts/part3.js
>
> Open `part3.html` in Chrome, try the same series of steps that you did in Part 2:
>
>  * Try entering a search term and clicking the "go" button
>  * Try changing the language and searching for the term again
>  * Try searching with a different search term
>  * In each case, try and figure out what you think is going on
>
> In Atom, in the `part3.js` file, take a look at the *getData* function.

Complete the following 5 tasks:

1. Using comments, edit the `part3.js` file and describe in your own words what you think the *getData* function does.
2. Add some code to the inside of the *getData* function so that a third tweet also prints to the screen
3. Add some code to the inside of the *getData* function so that a fourth tweet also prints to the screen
4. Add some code to the inside of the *getData* function so that a fifth tweet also prints to the screen
5. Now, comment out all of your code, starting from the line after the  *clearData()* all the way down to and including the code you just wrote. Then, un-comment the code block that begins with *json.statuses.forEach...* Refresh your browser and do another search. Describe what you think the forEach code is doing (using comments)?

### Step 4: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework to GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 4 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. Submit your homework by paste a link to your branch into the Moodle.
