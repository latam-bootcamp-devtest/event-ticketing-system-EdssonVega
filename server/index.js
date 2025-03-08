const express = require("express")
const mysql = require("mysql2")
const app = express()


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"eventticket"
})


app.get("/events",(req,res)=>{
    db.query("SELECT FROM upcomingevents ",
    (err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    } )
})

app.listen("3001",()=>{
    console.log("Running on port 3001")
})