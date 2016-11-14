const teaserController = require('../../controllers/pages/teaser');
const routes = require('../configuration').routes;

const configureForRouter = function (router) {
    router.get(routes.teaser, teaserController.renderPage);
};

module.exports = {
    configureForRouter
};
