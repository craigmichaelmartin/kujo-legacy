import View from '../views/base';
import BlogArticleHeader from '../views/blogArticleHeader';
import BlogArticleBody from '../views/blogArticleBody';
import _ from 'underscore';
import Backbone from 'backbone';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogArticle.html'), 'utf8');

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
        // const id = +this.appState.get('id');
        // const blogArticle = new Backbone.Model(_.findWhere(fakeBlogCollection, {id}));
        this.views = [
            new BlogArticleHeader({
                target: this.$('.js-blogHeader'),
                model: new Backbone.Model({title: 'The Kujo Burger'})
            }),
            new BlogArticleBody({
                target: this.$('.js-blogBody'),
                model: new Backbone.Model({
                    readTime: '3 minutes',
                    date: '9 days ago',
                    body: 'No one knows burgers like cows. And the cows have spoken. Eat more chicken. We will check how the chickens feel later. It is burger time. Ised do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                })
            })
        ];
    }

});

export default BlogApp;
