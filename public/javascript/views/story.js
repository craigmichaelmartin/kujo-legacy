import BaseView from './base';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/slick-carousel/slick/slick.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/storyBio.html'), 'utf8');

const StoryBioView = BaseView.extend({

    template() {
        return _.template(template);
    },

    initialize({target}) {
        this.target = target;
        this.render();
    },

    // Pretty frustrating. I Wanted to call slick on the element
    // to transform it before it was inserted into the dom (rather
    // than placing the html in, slick querying it out, transforming
    // it, and then re-touching the dom to put it in) but this plan
    // was riddled with problems in the library (slick).
    // beforeAttach() {
    //     this.$('.js-slides').slick({
    //         infinite: true,
    //         slidesToShow: 1,
    //         arrows: false,
    //         dots: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000
    //     });
    // }

    afterRender() {
        this.$('.js-storySlides').slick({
            dots: false,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000
        });
    },

    beforeClose() {
        this.$('.js-storySlides').slick('unslick');
    }

});

export default StoryBioView;
