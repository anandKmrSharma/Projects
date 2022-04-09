const app= require("./index");
const connect= require("./config/db.js")


app.listen(2345, async function(){

    await connect();
    console.log("listen on port 2345");
});

