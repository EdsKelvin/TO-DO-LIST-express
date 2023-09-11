const express = require('express');
const checkLists = require('./src/routes/checklist');

const app = express();
app.use(express.json());



app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})