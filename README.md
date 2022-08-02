12-6-2022 - 

-----Recap: 
Introduction to Jaacript which provides functionality to the web page
Use:
	- wihint the HTML page <script>
	- external JS file include it in the HTML file

	-By using Node.js as a platform to run JS

How to get data from HTML to js file and send it back to HTML

getElementById()
console.log()
document.write() > display the data in the browser itself.


--------------------------------
Todays Agenda:
	- Git
	- Operators 
	- Conditional constructs (if-else and switch)
	- loops 
		-while
		-do while
		-for
	- functions
	- storage in HTML 5 (Local storage and session storage)
	- callback functions
-------------------------------------------------------------

Version control system
	- It is used by the developers to manage projects and efficiency of th code.
	
	Git:
		- open source 
		-scalable
		-secure
		-speed 
	
	GitHub/BitBucket/ Git Lab: these are the consumers of Gits
	** Git can survive without GitHub but it does not work the other way around

1. Install Git in the machine
2. Create a Git Repository in the local machine
3. Open the CMD/Terminal for the Git repository folder
4. Initialize the Git Repository
	$git init (The folder will be converted to a git repo)
5. Keep the files/foler in the repository
6. See the status of the git repository
	- If any files/folder added 
	- if any files/folder updated
	
	$git status
7. To add any files/folder in the Git useL
	$ git add <file-name>  ==> for one file only
	$ git add .  ==> will add all the files in the current directory
	$ git add *.html ==>  add all the html files

8. After adding the files/folder in the git, finally commit to the repository
 	$ git commit -m "commiting HTML files"

----------------
Remote Repository:

 Github can work as a remote repository for us:
	- public Repo: [ Anyone can see]
	- Private Repository [Specific to the user] //commercial

9.1. open an account in GitHub
9.2 Create a repo in github
9.3 Connect the local repo with the remote repo   [only one time]
	$ git remote add origin https://github.com/FatimaAbdelMagid/Java-fullstack-repo.git
	$ git branch -M main 
9.4 push the changes in the github
	$ git push -u origin master


10. read about markdown language 













