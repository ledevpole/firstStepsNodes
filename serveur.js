var express = require('express');


var app = express();


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');

})


.get('/sous-sol', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');

})


.get('/etage/:etagenum/chambre', function(req, res) {

    res.render('chambre.ejs', {etage: req.params.etagenum});

})

.get('/compter/:nombre', function(req, res) {

    var noms = ['Robert', 'Jacques', 'David'];

    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});

})



// ... Tout le code de gestion des routes (app.get) se trouve au-dessus

.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Page introuvable !');

});


app.listen(8080);