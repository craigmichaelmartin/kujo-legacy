const homePageRoutes = require('./home');

const configureForRouter = function (router) {
    homePageRoutes.configureForRouter(router);
};

module.exports = {
    configureForRouter
};
