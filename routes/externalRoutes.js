module.exports = (

function() {
    let externalRoutes = require('express').Router();
    
    externalRoutes.get('/', (req, res) => {
        res.render('index');
    });

    externalRoutes.get('/generate', (req, res) => {
        res.render('generate');
    })
    
    return externalRoutes;

})();