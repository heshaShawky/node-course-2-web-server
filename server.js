const express = require('express');
const hbs     = require('hbs');
const port    = process.env.port || 3000;

var app = express(); 
hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs'); 


app.get('/', (req, res) => {
    res.render('home.hbs', {
        PageTitle: 'Home Page'
    });
});

app.listen(port, () => console.log(`Server is runung on port ${port}`));