# Add-Me-Friend-Me-If-You-Wanna-Reach-Me
A NoSQL social network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
I created a blogging app to give developers a platform to write, publish, and comment on articles. The app requires users to log in to view their user dashboard, view posts and comments, and add posts and comments. Users are also able to edit and delete their own posts.

This project was extremely challenging, partly because I was building this app completely from scratch, and partly because it was the first time I used Handlebars and fetch requests outside of small class activities. I was also writing my own routes for one of the first times.

Link to deployed app: https://tech-writers-unite.herokuapp.com/

![Preview](./public/images//Tech%20Writers%20Unite.gif)

## Installation
1. Copy the SSH key in my GitHub repo and paste `git clone <SSHKEY>` in your terminal to create a local copy on your computer\
OR
2. Download the zip file and manually copy the files to your computer
3. Install node by copying and pasting the code `npm init -y` in your terminal
4. Run `npm i` to install the necessary applications 
5. Create a .env file with the following information, using your MySQL password:\
`DB_NAME='techBlog_db'
DB_USER='root'
DB_PW='YOURPASSWORD'`

## Usage
1. Open the index.js file in your terminal
2. Install Express by running `npm i express`
3. Install Mongoose by running `npm i mongoose`
4. Run `npm run watch` to connect to the server


## Credits 
I created this app using JavaScript, Node.js, Express.js, MongoDB, and Mongoose.

- [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)


## License
MIT License

