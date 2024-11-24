const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
require("./db/conn")

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(cors({
    origin: ["https://foodsys.onrender.com", "http://localhost:3000", "http://localhost:5173", "*"],
    methods: ["GET", "POST"],
    credentials: true
}));

dotenv.config({path : 'config.env'})
const port = process.env.PORT || 3001

app.get('/', (req, res)=>{
    res.send("hello")
});

app.listen(port, ()=>{
    console.log("App Started at port : " + port);
})