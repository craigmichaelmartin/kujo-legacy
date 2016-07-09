import View from '../views/base';
import FootwearDeepDive from '../views/footwearDeepDive';
import $ from 'jquery';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/footwear.html'), 'utf8');

const HomePage = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, days, hours}) {
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

    afterRender() {
        this.sections = [
            new FootwearDeepDive({el: $('.js-footwearDeepDive')}),
        ];
    }

});

export default HomePage;
