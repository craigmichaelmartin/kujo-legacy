import View from '../views/base';
import ContactHeader from '../views/contactHeader';
import ContactForm from '../views/contactForm';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/contact.html'), 'utf8');

const ContactApp = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, target}) {
        this.target = target;
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

    beforeAttach() {
        this.views = [
            new ContactHeader({target: this.$('.js-contactHeader')}),
            new ContactForm({target: this.$('.js-contactForm')})
        ];
    }

});

export default ContactApp;
