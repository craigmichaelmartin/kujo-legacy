import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/slick-carousel/slick/slick.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/navigationSlides.html'), 'utf8');

const NavigationSlidesView = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize() {
        this.render();
    },

    afterRender() {
        this.$('.js-slides').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    }

});

export default NavigationSlidesView;
