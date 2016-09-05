import View from './base';
import _ from 'underscore';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/header.html'), 'utf8');

const HeaderView = View.extend({

    events: {
        'click .js-link': 'updateAppState'
    },

    updateAppState(e) {
        const $currentTarget = $(e.currentTarget);
        this.appStateCollection.setAppStateModel({
            app: $currentTarget.data('value'),
            attrs: {
                activeApp: true
            }
        });
    },

    template() {
        return _.template(template);
    },

    initialize({appStateCollection, target}) {
        this.target = target;
        this.appStateCollection = appStateCollection;
        this.render();
    }

});

export default HeaderView;
