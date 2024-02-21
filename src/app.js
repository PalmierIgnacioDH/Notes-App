const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public'))); 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 


const mainRouter = require('./routes/main');
app.use('/', mainRouter);

app.listen('3001', ()=>{
    console.log('Servidor corriendo en http://localhost:3001')
})

module.exports = app;
