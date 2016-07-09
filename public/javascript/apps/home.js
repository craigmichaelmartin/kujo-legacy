import View from '../views/base';
import NavigationSlidesView from '../views/navigationSlides';
import CultureView from '../views/culture';
import SectionHeaderView from '../views/sectionHeader';
import ProductPreviewView from '../views/productPreview';
import BlogPreviewView from '../views/blogPreview';
import $ from 'jquery';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/home.html'), 'utf8');

const HomePage = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, days, hours}) {
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

    afterRender() {
        this.sections = [
            new NavigationSlidesView({el: $('.js-navigationSlides')}),
            new CultureView({el: $('.js-culture')}),
            new SectionHeaderView({el: $('.js-sectionHeaderPremiumYardwear')}),
            new ProductPreviewView({el: $('.js-productPreview')}),
            new BlogPreviewView({el: $('.js-blogPreview')})
        ];
    }

});

export default HomePage;
