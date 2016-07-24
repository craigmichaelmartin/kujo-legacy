import View from '../views/base';
import NotFoundView from '../views/notFound';
import $ from 'jquery';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/notFound.html'), 'utf8');

const NotFound = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, target}) {
        this.appState = appState;
        this.target = target;
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

    afterRender() {
        this.views = [
            new NotFoundView({target: '.js-notFoundView'}),
        ];
    }

});

export default NotFound;
