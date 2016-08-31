import View from '../views/base';
import BlogHeader from '../views/blogHeader';
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
            new BlogHeader({target: this.$('.js-blogHeader')})
        ];
    }

});

export default BlogApp;
