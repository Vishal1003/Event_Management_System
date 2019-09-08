# Event_Management_System
Event_Management_System using express and MySql


## What I Have built-

It is an application that lets you add users to a database and also display their details(events) from the database. 
You can also delete and edit users details.

### Prerequisites-

1. Node JS installed on your PC.
2. Understanding of Node JS and Express JS.
3. Knowledge of SQL, you should know and understand how to query a database.
4. Understand how to use templating engines
5. I'm going to use ejs


## Creating DataBase For the App

CREATE DATABASE USERNAME;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `eventname` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

## Run App

Check your command prompt to ensure your code has no errors, then head over to your browser and open http://localhost:5000.
