import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogArticleBody.html'), 'utf8');

const BlogArticleBody = BaseView.extend({

    template: _.template(template),

    initialize({target, model}) {
        this.target = target;
        this.model = model;
        this.render();
    }

});

export default BlogArticleBody;
