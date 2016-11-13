const express = require('express');
const restRoutes = require('./rest');
const pageRoutes = require('./pages');

const configureForApp = function (app) {
    const router = express.Router();

    restRoutes.configureForRouter(router);
    pageRoutes.configureForRouter(router);

    /* Temporary catch-all-else redirecting back to home page */
    router.get('/*', (req, res) => res.redirect('/index.html'));

    app.use('/', router);
};

module.exports = {
    configureForApp
};
