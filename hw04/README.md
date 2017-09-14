# HOMEWORK 4: WORKING WITH LIVE DATA, LOOPS, AND VARIABLES
> * Due date: Midnight on Wednesday, 9/20
> * To submit: See instructions in Part IV

## Step 1: Fork the course repository
**NOTE**: This step should be done together in class.

1. Log into your Github account: [https://github.com/](https://github.com/)
2. Navigate to the course Github page: [https://github.com/vanwars/mmart-168-fall2017](https://github.com/vanwars/mmart-168-fall2017)
3. On the top, left-hand corner of the screen, click the "Fork" button. This should create a copy of the course homework in your Github account that is yours to edit
4. Now, open your Terminal (Mac) or GitBash (Windows), and navigate to the directory where you want to store your MAMRT168 files (using the "cd" command)
5. When you're in the directory you want to be in (verify by typing "pwd"), type the following
command: <br>`$ git clone https://github.com/{{your_github_username}}/mmart-168-fall2017.git`.<br><br> For example, because my github username is ***vanwars***, I would type: <br>`$ git clone https://github.com/vanwars/mmart-168-fall2017.git`

## Step 2: Create a new branch called homework04
**NOTE**: This step should also be done together in class.

Once you have pulled down ***your version*** of the course repository, you're going to make a new branch. To do so:

1. Navigate into the mmart-168-fall2017 directory by typing: `$ cd mmart-168-fall2017`
2. Then type: `$ git branch homework04`
3. Then type `$ git branch`. You should see 2 branches. One called ***master*** and one called ***homework04***. There should be an asterik next to master, indicating that ***master*** is your current branch.
4. Switch into your ***homework04*** branch by typing: `$ git checkout homework04`. To verify that it worked, type: `$ git branch`, and there should now be an asterik next to ***homework04***.
5. Now type: `$ ls ` to list all of the files and folders inside of the mmart-168-fall2017 directory. You should see a new folder called hw04.
6. Open the hw04 folder in Atom by typing `$ atom hw04`.

## Step 3. Make Some Edits to Three JavaScript Files
**NOTE**: Do this on your own, as homework.

### Part 1: If Statements
> Open the following 2 files in Atom:
>  
  * hw04/part1.html
  * hw04/scripts/part1.js

> Take a look at `part1.html` and notice the three language links: 

> ```html
 <ul class="nav navbar-nav navbar-right">
    <!-- Language Codes Here: https://www.w3schools.com/tags/ref_language_codes.asp -->
    <li><a href="#" onClick="setLanguage('en')">English</a></li>
    <li><a href="#" onClick="setLanguage('es')">Spanish</a></li>
    <li><a href="#" onClick="setLanguage('ru')">Russian</a></li>
</ul>
```

> Now open the `part1.js` file, and take a look at the ***setLanguage*** function

1. Using comments, describe in your own words what you think the ***setLanguage*** function does.
2. Edit the language links in `part1.html` and replace them with different languages. To see a list of language codes, navigate here: [https://www.w3schools.com/tags/ref_language_codes.asp](https://www.w3schools.com/tags/ref_language_codes.asp).
3. Finally, in the `part1.js` file, edit the ***setLanguage*** function so that it handles the new language codes and displays the correct message to the span element (inside the h1 element).