## project information 

a small project of web app.  
A few screeshots are provided, including login page, user updates screen and settings pop up screen. All images will be stored in the resources floder.  
Author: Pan  
Both front-end and back-end will be developed, technical stack is followed:
>react  
>react-router  
>css  
>nodejs  
>express  
>mysql  

## develop environment configuration

this app is currently developed under Ubuntu system. All instructions listed are based on that. It is similiar with Windows and MacOS.

+ server  

>apt-get install nodejs  
>apt-get install npm  
>npm install express  
>npm install express-generator  
>npm install knex  
>npm install mysql --save

+ client  

>npm install -g create-react-app  
>npm install @material-ui/core  
>npm install @material-ui/icons  
>npm install axios --save  
>npm install react-calendar

## project structure

    +resources //store documents/designs/requires
    +test-client //
     +src
      +components
       +login
       +router
       +settings
       +updates  

## debugging & deployment

+ first time running this app please using the following instruction for both sides.

>npm install  

+ Normally just simply run the following instruction in each side to start the service.

>npm start  

+ Ctrl+C will terminate the service
