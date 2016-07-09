import View from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/sectionHeader.html'), 'utf8');

const SectionHeader = View.extend({

    template() {
        return _.template(template);
    },

    initialize() {
        this.render();
    }

});

export default SectionHeader;
