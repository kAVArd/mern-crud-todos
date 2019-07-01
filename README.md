<h1 align="center">
MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone
```terminal
$ git clone https://github.com/kAVArd/mern-crud-todos.git
```
## download all packages
```terminal
$ cd react
$ npm i
$ cd ../backend
$ npm i
```

## project structure
```terminal
react/
   package.json
backend/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequirements
- MongoDB
- Node
- npm
- Nodemon

notice, you need front-end and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd react   // go to client folder
$ npm i       // npm install pacakges
$ npm start // run it locally
```

## Server-side usage(PORT: 4000)
First you need to run Mongo
```terminal
$ sudo mongod //'sudo' needs if you have some trobles with access
```
Next open new terminal and continue
```terminal
$ cd backend   // go to server folder
$ npm i       // npm install pacakges
$ nodemon server // run it locally
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.19.0 | body-parser: ^1.19.0
bootstrap: ^4.3.1| cors: ^2.8.1
prop-types: ^15.7.2 | express: ^4.17.1
react: ^16.8.6 | mongoose: ^5.6.1
react-dom: ^16.8.6 | 
react-redux: ^7.1.0 |
react-router-dom: ^5.0.1 | 
redux: ^4.0.1 |
redux-thunk: ^2.3.0 |
redux-devtools-extension: ^2.13.8 |
react - scripts: ^3.0.1 |

# Screenshots of this project

### Todo list

![Todo list](https://i.imgur.com/zZi416J.png)

### Create todo

![Create todo](https://i.imgur.com/6XINhgf.png)

### Edit todo

![Edit todo](https://i.imgur.com/VFVCQyL.png)

## Author
[kAVArd](https://github.com/kAVArd/)
