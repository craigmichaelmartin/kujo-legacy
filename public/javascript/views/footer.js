import View from './base';
import _ from 'underscore';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-lite/dist/material.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/footer.html'), 'utf8');

// Todo: refactor footer/header into one w/ DI
const FooterView = View.extend({

    template() {
        return _.template(template);
    },

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

    initialize({appStateCollection, target}) {
        this.target = target;
        this.appStateCollection = appStateCollection;
        this.render();
    }

});

export default FooterView;
