const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require("cors")
const Formdata = require('./models/Formdata.js');
const { error } = require('console');
const { title } = require('process');

const app = express();
const port = 3000;

// Middleware
app.use(cors({origin: "*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve HTML file at /bestillTime.html
app.get('/bestillTime.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'bestillTime.html'));
});

// Handle form submission
app.post('/submit', async (req, res) => {

    await Formdata.create({
        description: req.body.beskrivelse,
        title: req.body.tittel,
        relevantInfo: req.body.relevantInfo,
        tid: new Date(req.body.tid)
    })
    console.log("data saved");
    res.send("Data saved")
});


mongoose
    .connect('mongodb://localhost:27017/teknolia-database') 
    .then(() => {
        console.log('Connnected to database')
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
          });          
    })
    .catch((error) => {
        console.log(error)
    })
