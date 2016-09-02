import BaseCollectionView from './collection';
import BlogSidebarItem from './blogSidebarItem';
import 'bootstrap/dist/js/bootstrap.min.js';
import _ from 'underscore';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogSidebar.html'), 'utf8');

const BlogSidebarView = BaseCollectionView.extend({

    template: _.template(template),

    initialize({target, collection}) {
        this.views = [];
        this.target = target;
        this.collection = collection;
        this.render();
    },

    createItemView({model}) {
        return new BlogSidebarItem({model});
    },

    appendItem({html}) {
        this.$('.js-blogFilterItems').append(html);
    }

});

export default BlogSidebarView;
