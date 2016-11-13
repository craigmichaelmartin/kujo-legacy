const blogCategoryRoutes = require('./blogCategory');

const configureForRouter = function (router) {
    blogCategoryRoutes.configureForRouter(router);
};

module.exports = {
    configureForRouter
};
