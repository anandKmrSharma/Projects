
const express = require("express");

const app= express();

const users= 
    [
        {
            "id": 1,
            "name": "anand"
        },
        {
            "id": 2,
            "name": "kumar"
        },{
            "id": 3,
            "name": "sharma"
        },{
            "id": 4,
            "name": "shubham"
        },{
            "id": 5,
            "name": "abhi"
        },
    ]

//midleware
app.use(logger)
app.use(express.json())
// rest api
  // 1 get method

  app.get("/", (req,res)=>{
      console.log("home page");
      res.send("home page")
  })

  // 2 post method

  app.post("/",(req,res)=>{
      console.log("post method")
      res.status(201).json(req.body);
         
  })
  // 3 put or patch method :- to update a single Items

  app.patch("/:id",(req,res)=>{
console.log("patch request", req.params.id)

const newUsers= users.map((user)=>{
    if(user.id ==req.params.id){
        return req.body;
    }
    //optional canning
    // if(user.id=== req.params.id){
    //     if(req?.body?.first_name) user.first_name = req.body.first_name
    //     if(req?.body?.email) user.email = req.body.email
    //     if(req?.body?.last_name) user.last_name = req.body.last_name

    // }
    return user
})

res.send(newUsers)
  })




  // 4 delete method

  app.delete("/:id", (req,res)=>{

console.log("delete", req.params.id)
const newUsers= users.filter((user)=>user.id!=req.params.id)

 res.send(newUsers)
  })

  //middleware
  function logger(req,res,next){
   console.log("logger before");
   next();
   console.log("logger after")
  }

app.listen(2345,()=>{
    console.log("listen on port 2345")
})