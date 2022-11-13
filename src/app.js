const express= require("express");
const hbs= require("hbs")
const app= express();

var passport = require("passport")
    LocalStrategy = require("passport-local")
    passportLocalMongoose = require("passport-local-mongoose")



const mongoose=require("mongoose")
const routes= require('./routes/main')
const Detail=require("./models/Detail")
var User = require("./models/User");


// /static/css/styles.css
app.use('/static',express.static("public"))
app.use('',routes)

//template engine

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//express-session
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
 


//db connections
mongoose.connect("mongodb://localhost/IWP_DATA",()=>{
    console.log("db connected")
    // Detail.create({
    //     brandName:"Easy Cycles",
    //     brandIconUrl:"https://cdn.vectorstock.com/i/1000x1000/17/79/ec-logo-letter-design-vector-14081779.webp",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Product",
    //             url:"/product"
    //         },
    //         {
    //             label:"Scan",
    //             url:"/scan"
    //         },
    //         {
    //             label:"Career",
    //             url:"/career"
    //         },
    //         {
    //             label:"Policies",
    //             url:"/policies"
    //         },
    //         {
    //             label:"Help",
    //             url:"/help"
    //         },
    //     ]
    // })
    
})

mongoose.connect


 


 
//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});
 
//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});
 
//Handling user logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}




app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
});