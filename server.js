 const express = require("express");

 const mysql = require ("mysql");

const body = require ("body-parser");

 const cors = require ("cors");

 const app = express();

 app.use(cors());
 app.use(express.json());

 app.listen(3000,(err)=>{
    
    if(err) throw err;

    console.log("server connected verygood");

 })
 
 const conn = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"logon"
 })


 if (conn){
    console.log("database connection succesfully !");
 }

 else {

    console.log ("something went wrong ?");
 }

 app.post('/insert', (req, res) => {
    const { email, username, password } = req.body  ;
    conn.query(
      "INSERT INTO data_p(email,username,password) VALUES (?,?,?)",[ email, username, password],(err, result) => {
        if (err) {
          console.log("Error:", err);
           } else {
          res.status(200).send("Values inserted successfully");
        }
      }
    );
   });    