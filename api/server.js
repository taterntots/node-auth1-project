const express = require('express'); //importing a CommonJS module
const helmet = require('helmet'); //yarn add helmet
const session = require('express-session'); //imports the session support module
const loginRouter = require('../routers/login-router');
const logoutRouter = require('../routers/logout-router');
const registerRouter = require('../routers/register-router');
const usersRouter = require('../routers/users-router');
const server = express(); //creates the server

//session support middleware
const sessionConfig = {
  name: "cookieMonster",
  secret: process.env.SESSION_SECRET || "keep it a secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60 * 10, //10 minutes in milliseconds
    secure: false, //set to true in production, only send cookies over HTTPS
    httpOnly: true //JS cannot access the cookies on the browser
  },
  resave: false,
  saveUninitialized: true //read about it for GDPR compliance
}

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server
server.use(session(sessionConfig)); //turns on sessions

//endpoints
server.get('/', (req, res) => {
  res.send(`Welcome to the Danger Zone!`);
});

//routes
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);
server.use('/api/logout', logoutRouter);

module.exports = server