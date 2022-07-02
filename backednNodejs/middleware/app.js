const express= require("express");

const app= express();

app.use(express.json());

//middlewrare function
const logger= (req,res,next)=>{
    console.log("before")
    next();
    console.log("after")
}

//middlewrare function
const auth= (req,res,next)=>{
    console.log("auth before")
    next();
    console.log("auth after")


}
//middlewrare function accepting arguments

const authentication=(permission)=>{
    return (req,res,next)=>{
    console.log("authentication", permission)
}
}

const users= 
    [
        {
            "id": 1,
            "name": "anand",
            "email" :"anand31397@gmail.com"
        },
        {
            "id": 2,
            "name": "kumar",
            "email" :"kumar31397@gmail.com"
        },{
            "id": 3,
            "name": "sharma",
            "email" :"sharma31397@gmail.com"
        },{
            "id": 4,
            "name": "shubham",
            "email" :"shubham31397@gmail.com"
        },{
            "id": 5,
            "name": "abhi",
            "email" :"abhi31397@gmail.com"
        },
    ]
 // not require authentication

app.get("/users",logger,(req,res)=>{
    console.log("all users")
      res.send(users)

})

// require authentication
// app.use(auth); removed from global scope
app.post("/users",auth,authentication("editor"),(req,res)=>{
    console.log("inside post users");
})

// not requires aurthentication
app.get("/users/:email", (req,res)=>{
   
 const singleUsers= users.filter((user)=> user.email=== req.params.email)
 console.log("single users");
 res.send(singleUsers);
})

app.listen(2345, ()=>{
    console.log("liestening on port 2345");
})
