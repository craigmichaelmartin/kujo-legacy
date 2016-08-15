import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/slick-carousel/slick/slick.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/apparelDeepDive.html'), 'utf8');

const ApparelDeepDive = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize({target}) {
        this.target = target;
        this.render();
    },

    beforeClose() {
        window.clearTimeout(this.changeSlideTimeout);
    },

    beforeAttach() {
        this.current = 1;
        this.slidesLength = this.$('.js-apparelSlide').length;
    },

    changeSlide() {
        let next = this.current + 1;
        if (next >= this.slidesLength) next = 1;
        this.$(`.js-apparelSlide:nth-child(${this.current})`).fadeOut(1000);
        this.$(`.js-apparelSlide:nth-child(${next})`).fadeIn(1000);
        this.current = next;
        this.changeSlideTimeout = window.setTimeout(this.changeSlide.bind(this), 3000);
    },

    afterRender() {
        this.changeSlideTimeout = window.setTimeout(this.changeSlide.bind(this), 3000);
    }

});

export default ApparelDeepDive;
