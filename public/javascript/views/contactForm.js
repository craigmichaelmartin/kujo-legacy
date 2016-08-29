import View from '../views/base';
import ContactModel from '../models/contact';
import ContactFormType from '../views/contactFormType';
import ContactFormCustomer from '../views/contactFormCustomer';
// import ContactFormRetailer from '../views/contactFormRetailer';
// import ContactFormProfessional from '../views/contactFormProfessional';
// import ContactFormOther from '../views/contactFormOther';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-lite/dist/material.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/contactForm.html'), 'utf8');

const ContactApp = View.extend({

    template: _.template(template),

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.model = new ContactModel();
        this.listenTo(this.model, 'change:type', this.changeFormType);
        this.render();
    },

    changeFormType() {
        const mapper = {
            customer: ContactFormCustomer,
            // retailer: ContactFormRetailer,
            // professional: ContactFormProfessional,
            // other: ContactFormOther
        };
        const constructor = mapper[this.model.get('type')] || mapper.other;
        this.formContent = new constructor({
            target: this.$('.js-formContent'),
            model: this.model
        });
    },

    closeViews() {
        this.formType.close();
        this.formContent && this.formContent.close();
    },

    beforeClose() {
        this.closeViews();
    },

    beforeAttach() {
        this.formType = new ContactFormType({
            target: this.$('.js-formType'),
            model: this.model
        });
    }

});

export default ContactApp;
