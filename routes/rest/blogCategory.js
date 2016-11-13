const blogCategory = require('../../controllers/rest/blogCategory');
const routes = require('../configuration').routes;

const configureForRouter = function (router) {
    router.get(routes.blogCategories, blogCategory.getAll);
};

module.exports = {
    configureForRouter
};
