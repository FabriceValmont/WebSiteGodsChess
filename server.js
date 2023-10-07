const express = require('express');
const app = express();
const http = require('http').Server(app);
const {Client} = require("pg")

let dataSelectionGods = []
let dataGods = []

app.get("/selectionGods", (req, res) => {
    res.send(dataSelectionGods)
})

app.get("/Gods", (req, res) => {
    res.send(dataGods)
})

// Appel de la base de donnée 
const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5434,
    password: "1234",
    database: "postgres"
})

client.connect()

client.query(`SELECT * FROM selection_gods`, (err, res) => {
    if(!err){
        dataSelectionGods = res.rows
        //console.log(dataSelectionGods,"dataSelectionGods")
    }
    else{
        console.log(err.message)
        res.status(500).send("Erreur lors de la récupération des données depuis la base de données");
    }
})

client.query(`SELECT * FROM gods`, (err, res) => {
    if(!err){
        dataGods = res.rows
        //console.log(dataGods,"dataGods")
    }
    else{
        console.log(err.message)
        res.status(500).send("Erreur lors de la récupération des données depuis la base de données");
    }
    client.end()
})

setTimeout(() => {
    console.log(dataSelectionGods, "dataSelectionGods")
    console.log(dataGods, "dataGods")
    console.log("Le délai de 3 secondes est écoulé.");
  }, 3000);

// Lancer le serveur
http.listen(3000, () => {
    console.log('Le serveur est lancé sur le port 3000');
});