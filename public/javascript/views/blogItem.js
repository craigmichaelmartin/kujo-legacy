import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogItem.html'), 'utf8');

const BlogItem = BaseView.extend({

    template: _.template(template),

    events() {
        return {
            'click .js-readMore': 'openBlogItem'
        };
    },

    initialize({target, appState}) {
        this.target = target;
        this.appState = appState;
    },

    openBlogItem() {
        this.appState.set({
            activeApp: true,
            id: this.model.get('id'),
            title: this.model.get('title')
        });
    }

});

export default BlogItem;
