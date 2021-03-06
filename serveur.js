var express = require('express');


var app = express();


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');

});


app.get('/sous-sol', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');

});


app.get('/etage/:etagenum/chambre', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);

});


// ... Tout le code de gestion des routes (app.get) se trouve au-dessus

app.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Page introuvable !');

});


app.listen(8080);