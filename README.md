# Add-Me-Friend-Me-If-You-Wanna-Reach-Me
A NoSQL social networking API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
I've used various social media networking platforms for years but have never given much thought as to how they functioned. For this project I have created the backend for a social networking API that allows you to find, create, update, and delete users and posts (referred to as "thoughts") as well as add and remove friends and comments (referred to as "reactions"). 

I definitely have a greater appreciation for social media developers after creating my own miniature network. This was the first time I have used MongoDB extensively, and it had a bit of a learning curve after working with SQL databases. I also understand now why it's useful to have controllers and routes in separate files -- separating the HTTP methods from the routes themselves makes the code much cleaner.

Link to demo: 

![Preview]()

## Installation
1. Copy the SSH key in my GitHub repo and paste `git clone <SSHKEY>` in your terminal to create a local copy on your computer\
OR
2. Download the zip file and manually copy the files to your computer
3. Install node by copying and pasting the code `npm init -y` in your terminal
4. Run `npm i` to install the necessary applications 

## Usage
1. Open the index.js file in your terminal
2. Run `npm run watch` to connect to the server
3. Test routes in Insomnia

## Credits 
I created this app using JavaScript, Node.js, Express.js, MongoDB, and Mongoose.

- [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)
- [W3schools Dates](https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp)
- [Getters](https://stackoverflow.com/questions/52867578/mongoose-date-schema)
- [Mongoose Validation](https://mongoosejs.com/docs/validation.html)
- Bootcamp tutor Dru Sanchez helped me troubleshoot my "friends" routes

## License
MIT License

