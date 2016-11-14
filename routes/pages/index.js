const homePageRoutes = require('./home');
const teaserPageRoutes = require('./teaser');

const configureForRouter = function (router) {
    homePageRoutes.configureForRouter(router);
    teaserPageRoutes.configureForRouter(router);
};

module.exports = {
    configureForRouter
};
