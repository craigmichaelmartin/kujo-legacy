import View from '../views/base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-lite/dist/material.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/ContactFormRetailer.html'), 'utf8');

const ContactFormRetailer = View.extend({

    template: _.template(template),

    initialize({model, target}) {
        this.model = model;
        this.target = target;
        this.render();
    },

    beforeAttach() {
        this.$('.mdl-textfield').each((index, $element) => {
            componentHandler.upgradeElement($element); // eslint-disable-line no-undef
        });
    }

});

export default ContactFormRetailer;
