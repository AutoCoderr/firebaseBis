const express = require("express");
const Account = require("./Models/Account");

const app = express();

app.get("/", (req,res) => res.send("COUCOU"));

app.listen(process.env.PORT)