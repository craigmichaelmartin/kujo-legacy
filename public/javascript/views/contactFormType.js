import View from '../views/base';
import _ from 'underscore';
import Backbone from 'backbone';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/contactFormType.html'), 'utf8');

const ContactFormType = View.extend({

    template: _.template(template),

    events() {
        return {
            'click .js-type': 'typeChanged'
        };
    },

    initialize({target, model}) {
        this.target = target;
        this.model = model;
        this.listenTo(this.model, 'change:type', this.render);
        this.render();
    },

    typeChanged(ev) {
        this.model.set('type', Backbone.$(ev.currentTarget).data('value'));
    }

});

export default ContactFormType;
