const express = require('express');
const hbs     = require('hbs');

var app = express(); 
hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs'); 


app.get('/', (req, res) => {
    res.render('home.hbs', {
        PageTitle: 'Home Page'
    });
});

app.listen(3000, () => console.log('Server is runung on http://localhost:3000'));