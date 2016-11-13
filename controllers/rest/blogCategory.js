const BlogCategoryDAO = require('../../dao/blogCategory');

const getAll = function(req, res) {
    const blogCategoryDAO = new BlogCategoryDAO();
    return blogCategoryDAO.getAll()
        .then((blogCategories) => res.send(blogCategories))
        .catch((err) => {
            console.log(err);
            res.send({blogCategories: []});
        });
};

module.exports = {
    getAll
};
