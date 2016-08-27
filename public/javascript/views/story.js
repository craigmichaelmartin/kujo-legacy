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

    beforeClose() {
        window.clearTimeout(this.changeSlideTimeout);
    },

    beforeAttach() {
        this.current = 1;
    },

    changeSlide() {
        let next = this.current + 1;
        if (next >= this.slides.length) next = 1;
        this.$('.js-storySlides').css('background-image', `url(${this.slides[next]})`);
        this.current = next;
        this.changeSlideTimeout = window.setTimeout(this.changeSlide.bind(this), 5000);
    },

    slides: [
        'public/images/phase1.png',
        'public/images/phase2.png',
        'public/images/phase3.png',
        'public/images/phase4.png'
    ],

    afterRender() {
        this.changeSlideTimeout = window.setTimeout(this.changeSlide.bind(this), 5000);
    }

});

export default StoryBioView;
