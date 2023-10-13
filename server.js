const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser'); // Ajout du middleware body-parser
const bcrypt = require('bcrypt');
const cors = require('cors'); // Importez le package cors
const {Pool} = require("pg")
require('dotenv').config();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}));

let dataSelectionGods = []
let dataGods = []
let dataProducts = []

app.use(bodyParser.json()); // Utilisation du middleware body-parser pour analyser les données JSON
// app.options('*', cors()); 

// Appel de la base de donnée 
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5434,
    password: "1234",
    database: "postgres"
});

app.get("/selectionGods", (req, res) => {
    res.send(dataSelectionGods)
})

app.get("/Gods", (req, res) => {
    res.send(dataGods)
})

app.get("/products", (req, res) => {
    res.send(dataProducts)
})


// Route pour gérer la soumission du formulaire POST
app.post("/inscription", (req, res) => {
    // Récupérez les données du corps de la requête
    const { name, email, password } = req.body;

    // Vérifiez si les champs sont vides ou nuls
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Tous les champs doivent être renseignés" });
    }

    // Générez un sel pour le hachage (plus le nombre de tours, plus c'est sécurisé mais plus c'est lent)
    const saltRounds = 10;

    // Utilisez bcrypt pour hacher le mot de passe
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Erreur lors du hachage du mot de passe" });
        } else {
            // Maintenant, "hash" contient le mot de passe haché, vous pouvez l'insérer dans la base de données
            pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hash], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Erreur lors de l'inscription" });
                } else {
                    res.status(200).json({ message: "Inscription réussie" });
                }
            });
        }
    });
});

pool.query(`SELECT * FROM selection_gods`, (err, res) => {
    if(!err){
        dataSelectionGods = res.rows
        //console.log(dataSelectionGods,"dataSelectionGods")
    }
    else{
        console.log(err.message)
        res.status(500).send("Erreur lors de la récupération des données depuis la base de données");
    }
})

pool.query(`SELECT * FROM gods`, (err, res) => {
    if(!err){
        dataGods = res.rows
        //console.log(dataGods,"dataGods")
    }
    else{
        console.log(err.message)
        res.status(500).send("Erreur lors de la récupération des données depuis la base de données");
    }
})

pool.query(`SELECT * FROM products`, (err, res) => {
    if(!err){
        dataProducts = res.rows
        //console.log(dataGods,"dataGods")
    }
    else{
        console.log(err.message)
        res.status(500).send("Erreur lors de la récupération des données depuis la base de données");
    }
})

setTimeout(() => {
    // console.log(dataSelectionGods, "dataSelectionGods")
    // console.log(dataGods, "dataGods")
    console.log(dataProducts, "dataProduits")
    console.log("Le délai de 1 seconde est écoulé.");
  }, 1000);

// Lancer le serveur
http.listen(3000, () => {
    console.log('Le serveur est lancé sur le port 3000');
});