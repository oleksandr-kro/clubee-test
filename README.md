## Api
To create a simple api I used node js framework - **expressJS**. Api responds to only one query **/articles** and returns an array of all articles as an json file.

For api, I additionally installed a **nodemon** for easy startup and restart of the project.

## Front-end
To create the front-end part, First I ran the command 
#### `create next-app`
With this command node js will automatically create the **next JS** project, install all the necessary packages and prepare the project for work
The second step was to install additional packages for project development.
Since this project does not require complex functionality and global state monitoring - I installed only **@material-ui/core**. This package allows me to use materialUI components.
In the next step, I created common components, such as Header, Footer, CommonHead, and put them in a separate folder.
Then I made two pages of Articles and NewArticle and adjusted the connection between them using Route and buttons.

The Articles page contains functionality that queries Api and renders components with articles.
Additionally, here I implemented loading tracking.

The NewArticle page contains a form to create a new article.
In addition, I implemented validation of form fields.
The Save button is inactive until all form fields are filled in correctly. The email form also has an additional validator that checks if the typed text is a mail.
After filling in the fields, you can click the save button. The entered data will be displayed in the console as an object.
The forms were written using matetrialUI components.

All additional styles were added using the modular style system **style.module.css**

## Installation
In order to successfully run the project on your machine, you need to run the front end and api separately

Firstly go to the **clubee-api** directory and enter to the command line
####`yarn install` 

Then run the project using 
#### `yarn start` 

To start the front-end part, first go to the **clubee-front** directory and enter the command, to install all modules
#### `yarn install`
You can start the project with 
#### `yarn dev`
The project will be available on **localhost: 3000**
