Starting the application:
    run this command: node login.js
    login with email or sign up then login.



fonts: https://fontawesome.com/v5/search?o=r&m=free&f=classic

This is because the db keeps getting deleted.

Query:
CREATE DATABASE csc330db;

use csc330db;

CREATE TABLE accounts (
    id int not null primary key auto_increment,
    email varchar(50) not null,
    user_pass varchar(255) not null   
)

insert into accounts(email,user_pass) values("test@gmail.com","password")

insert into accounts(email,user_pass) values("test1@gmail.com","pass123")
