import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogSidebarItem.html'), 'utf8');

const BlogSidebarItem = BaseView.extend({

    template: _.template(template),

    initialize({target}) {
        this.target = target;
    }

});

export default BlogSidebarItem;
