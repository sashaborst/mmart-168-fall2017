# HOMEWORK 4: WORKING WITH LIVE DATA, LOOPS, AND VARIABLES
> * Due date: Midnight on Wednesday, 9/20
> * To submit: See instructions in Part IV

## Part I: Fork the course repository
> NOTE: This should be done together in class:

1. Log into your Github account: [https://github.com/](https://github.com/)
* Navigate to the course Github page: [https://github.com/vanwars/mmart-168-fall2017](https://github.com/vanwars/mmart-168-fall2017)
* On the top, left-hand corner of the screen, click the "Fork" button. This
  should create a copy of the course homework in your Github account that is yours to edit
* Now, open your Terminal (Mac) or GitBash (Windows), and navigate to the directory
 where you want to store your MAMRT168 files (using the "cd" command)
* When you're in the directory you want to be in (verify by typing "pwd"), type the following
command: `$ git clone https://github.com/{{your_github_username}}/mmart-168-fall2017.git`.<br> For example, because my github username is ***vanwars***, I would type: `$ git clone https://github.com/vanwars/mmart-168-fall2017.git`

## Part II: Create a new branch
> NOTE: This should also be done together in class.

Once you have pulled down ***your version*** of the course repository, you're going to make a new branch. To do so:

1. Navigate into the mmart-168-fall2017 directory by typing: `$ cd mmart-168-fall2017`
2. Then type: `$ git branch homework4`
3. Then type `$ git branch`<br>You should see 2 branches. One called ***master*** and one called ***homework4***. There should be an asterik next to master, indicating that ***master*** is your current branch.
4. Switch into your ***homework4*** branch by typing: `$ git checkout homework4`. To verify that it worked, type: `$ git branch`, and there should now be an asterik next to ***homework4***.
5. Now type: `$ ls ` to list all of the files and folders inside of the mmart-168-fall2017 directory. You should see a new folder called hw04.
6. Open the hw04 folder in Atom by typing `$ atom hw04`.

