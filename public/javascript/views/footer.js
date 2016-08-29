import View from './base';
import _ from 'underscore';
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
        this.appState.set($currentTarget.data('key'), $currentTarget.data('value'), {validate: true});
    },

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.render();
    }

});

export default FooterView;
