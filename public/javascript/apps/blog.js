import View from '../views/base';
import BlogBrowse from '../views/blogBrowse';
import BlogArticle from '../views/blogArticle';
import _ from 'underscore';
import Backbone from 'backbone';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blog.html'), 'utf8');

const BlogApp = View.extend({

    template: _.template(template),

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.listenTo(this.appState, 'change:id', this.updateContent);
    },

    beforeClose() {
        this.app && this.app.close();
    },

    beforeRender() {
        this.app && this.app.close();
    },

    afterRender() {
        this.updateContent();
    },

    updateContent() {
        this.app && this.app.close();
        // TODO: standarized how using id/title
        const Constructor = this.appState.get('id') ? BlogArticle : BlogBrowse;
        this.app = new Constructor({
            target: this.$('.js-blogContent'),
            appState: this.appState
        });
        this.app.render();
    }
});

export default BlogApp;
