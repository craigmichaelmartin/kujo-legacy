import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/slick-carousel/slick/slick.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/footwearDeepDive.html'), 'utf8');

const FootwearDeepDive = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize({domTargetSelector}) {
        this.domTargetSelector = domTargetSelector;
        this.render();
    },

    afterRender() {
        this.$('.js-footwearSlides').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            pauseOnHover: false,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            autoplaySpeed: 3000
        });
    }

});

export default FootwearDeepDive;
