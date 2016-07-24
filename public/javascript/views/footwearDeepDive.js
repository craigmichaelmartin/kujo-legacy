import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/slick-carousel/slick/slick.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/footwearDeepDive.html'), 'utf8');

const FootwearDeepDive = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize({target}) {
        this.target = target;
        this.render();
    },

    beforeClose() {
        window.clearTimeout();
        this.changeSlide = function() {};
    },

    beforeAttach() {
        this.current = 1;
        this.slidesLength = this.$('.js-footwearSlide').length;
    },

    changeSlide() {
        let next = this.current + 1;
        if (next >= this.slidesLength) next = 1;
        console.log(this.current);
        this.$(`.js-footwearSlide:nth-child(${this.current})`).fadeOut(1000);
        this.$(`.js-footwearSlide:nth-child(${next})`).fadeIn(1000);
        this.current = next;
        window.setTimeout(this.changeSlide.bind(this), 3000);
    },

    afterRender() {
        window.setTimeout(this.changeSlide.bind(this), 2000);
    }

});

export default FootwearDeepDive;
