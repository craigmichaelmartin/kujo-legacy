import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/contactHeader.html'), 'utf8');

const ContactHeader = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize({target}) {
        this.target = target;
        this.render();
    }

});

export default ContactHeader;
