import View from './base';
import _ from 'underscore';
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
        this.appState.set($currentTarget.data('key'), $currentTarget.data('value'), {validate: true});
    },

    template() {
        return _.template(template);
    },

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.render();
    }

});

export default HeaderView;
