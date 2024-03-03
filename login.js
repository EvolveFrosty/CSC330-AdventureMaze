const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const path = require("path");  

const app = express();
app.use("/assets", express.static("assets"));

const connection = mysql.createConnection({
    host: "34.75.169.113",
    user: "root",
    password: "password",
    database: "csc330db"
});

// connect to the database
connection.connect(function (error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});

app.get("/", function (req, res) {
    console.log("Accessing / route");
    res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    connection.query(
        "select * from accounts where email = ? and user_pass = ?",
        [username, password],
        function (error, results, fields) {
            if (results.length > 0) {
                console.log("Login successful. Redirecting to /welcome");
                res.redirect("/welcome");
            } else {
                console.log("Login failed. Redirecting to /");
                res.redirect("/");
            }
            res.end();
        }
    );
});

app.get("/register", function (req, res) {
    console.log("Accessing /register route");
    res.sendFile(__dirname + "/register.html");
});

app.post("/register", encoder, function (req, res) {
    var name = req.body.name;
    var username = req.body.username;
    var password = req.body.password;

    connection.query(
        "INSERT INTO accounts (name, email, user_pass) VALUES (?, ?, ?)",
        [name, username, password],
        function (error, results, fields) {
            if (!error) {
                console.log("Registration successful. Redirecting to /");
                res.redirect("/");
            } else {
                console.log("Registration failed. Redirecting to /register");
                res.redirect("/register");
            }
            res.end();
        }
    );
});

app.get("/welcome", function (req, res) {
    res.sendFile(__dirname + "/welcome.html");
});

app.get("/login", function (req, res) {
    console.log("Accessing /login.html route");
    res.sendFile(__dirname + "/login.html");
});

app.get("/about", function (req, res) {
    console.log("Accessing /about.html route");
    res.sendFile(__dirname + "/about.html");
});

app.get("/gallery", function (req, res) {
    console.log("Accessing /gallery.html route");
    res.sendFile(__dirname + "/gallery.html");
});

app.get("/blog", function (req, res) {
    console.log("Accessing /blog.html route");
    res.sendFile(__dirname + "/blog.html");
});

app.get("/contact", function (req, res) {
    console.log("Accessing /contact.html route");
    res.sendFile(__dirname + "/contact.html");
});

// Close the database connection when the server is stopped
process.on("SIGINT", function () {
    connection.end(function () {
        console.log("Database connection closed through app termination");
        process.exit(0);
    });
});

// set app port 
app.listen(4000, function () {
    console.log("Server is running on port 4000");
});
