import View from '../views/base';
import BlogArticleHeader from '../views/blogArticleHeader';
// import BlogArticleBody from '../views/blogArticleBody';
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
                model: new Backbone.Model({title: 'Test Title'})
            })
            // new BlogArticleBody({
            //     target: this.$('.js-blogHeader'),
            //     model: this.appState.blogArticle
            // })
        ];
    }

});

export default BlogApp;
