const home = require('../../controllers/pages/home');
const routes = require('../configuration').routes;

const configureForRouter = function (router) {
    router.get(routes.app, home.renderPage);
};

module.exports = {
    configureForRouter
};
