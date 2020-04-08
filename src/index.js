const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

//Route

app.listen(3333);