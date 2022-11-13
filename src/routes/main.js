const express=require('express')
const { route } = require('express/lib/application')

const Detail = require("../models/Detail")






const routes=express.Router()



routes.get("/", async (req,res) =>{
    
    const details= await Detail.findOne({"_id":"63628354328e2be68342e9b5"}) 
    //console.log(details)
    res.render("index",{
        details:details
    })
   
})

routes.get('/about', async(req,res) =>{
    const details= await Detail.findOne({"_id":"63628354328e2be68342e9b5"}) 
    res.render("about",{
        details:details,
    });
   
});

routes.get('/career', async(req,res) =>{
    const details= await Detail.findOne({"_id":"63628354328e2be68342e9b5"}) 
    res.render("career",{
        details:details,
    });
   
});
routes.get('/help', async(req,res) =>{
    const details= await Detail.findOne({"_id":"63628354328e2be68342e9b5"}) 
    res.render("help",{
        details:details,
    });
   
});


   

module.exports=routes