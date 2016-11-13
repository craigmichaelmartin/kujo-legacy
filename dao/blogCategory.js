const blogCategories = require('../fixtures/blogCategories.json');

/*
 * The abstraction for retrieving blog category data from the persistence mechinism.
 */

module.exports = class blogCategory {

    getAll() {
        return Promise.resolve(blogCategories);
    }

};
