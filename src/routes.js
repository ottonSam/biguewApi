const express = require('express');

const LogonController = require('./controllers/Logon')


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send(
        '<h1 style="text-align: center; margin-top: 49vh; color: red;">API-STATUS: ON</h1>'
    );    
});
//User routes
routes.post('/register', LogonController.register);
routes.post('/validEmail', LogonController.validEmail);
routes.post('/login', LogonController.login);

module.exports = routes;