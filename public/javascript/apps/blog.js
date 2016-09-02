import View from '../views/base';
import BlogHeader from '../views/blogHeader';
import BlogCollectionView from '../views/blogCollection';
import BlogSidebar from '../views/blogSidebar';
import BlogCollection from '../collections/blog';
import BlogFilters from '../collections/blogFilters';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blog.html'), 'utf8');

const BlogApp = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.blogCollection = new BlogCollection([{num: 1}, {num: 2}]);
        this.blogFilters = new BlogFilters([{num: 3}, {num: 4}]);
    },

    closeViews() {
        while (this.views.length > 0) {
            this.views[0].close();
            delete this.views[0];
            this.views.shift();
        }
    },

    beforeClose() {
        this.closeViews();
    },

    beforeRender() {
        this.closeViews();
    },

    beforeAttach() {
        this.views = [
            new BlogHeader({target: this.$('.js-blogHeader')}),
            new BlogCollectionView({target: this.$('.js-blogCollection'), collection: this.blogCollection}),
            new BlogSidebar({target: this.$('.js-blogSidebar'), collection: this.blogFilters})
        ];
    }

});

export default BlogApp;
