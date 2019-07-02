# Finstagram

## About
The goal for this project was to create an app similar to something like instagram where users can post pictures and like pictures. The level of complexity I originally wanted only really works with user authentication and I really struggled to set that up within the timeframe for this project so I had to scrap the project and essentially restart to meet my deadline.

## Technologies Used
- Rails
- React
- PostgreSQL
- Heroku
- CSS Flexbox
- CSS Grid

I created an API server using Rails and PostgreSQL. I then pushed the API up to Heroku and used it as the backend for my React app. The React application was then used as my frontend and allowed me to interact with the backend by pulling and storing data from that server.

## Struggles
So many struggles... I struggled with the database most of all. The boolean values of liked in my database were displaying as 't' and 'f' which caused me to have to change the way my app read the boolean which was an easy enough fix, but I made a silly typing error where a missed a single ' and it broke my update and delete routes. I had assumed that the routes were still working because I had tested them before and they were working so I thought the problem was related to the 't' and 'f' boolean values in my table. The only error I was receiving was an internal server error 500, which is a blanket error code saying "something is wrong with your server..."

Next I struggled with deploying my api to heroku because when you deploy the api, it doesn't deploy with the database, table, and data. I found a couple of solutions that I tried including migrating the database and using an external application to manipulate the database, but I was overcomplicating the problem. I ended up being able to manipulate the database using heroku commands in the command line. This didn't work initially, but it worked after I cleared my heroku database and restarted it.

## Improvements
There are many things I would like to add to make this project more presentable. The CSS is rough and not mobile responsive. User authentication is by far the number one thing for this project because everything else that the app is supposed to do relies on users and sessions. I would like to add functions that allow users to follow other users, functions to search for other users, a function to show your liked posts, edit your profile and edit your posts. So many things could make this app great and I plan to make those changes when I get a free moment.



Link to our project hosted on Heroku: https://paws-and-find-front.herokuapp.com/
