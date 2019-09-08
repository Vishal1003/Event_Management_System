const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {addUserPage, addUser, deleteUser, editUser, editUserPage} = require('./routes/user');
const port = 5000;

// create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'user',
    password: '',
    database: 'Event'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); 
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(fileUpload()); 

// routes for the app

app.get('/', getHomePage);
app.get('/add', addUserPage);
app.get('/edit/:id', editUserPage);
app.get('/delete/:id', deleteUser);
app.post('/add', addUser);
app.post('/edit/:id', editUser);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
