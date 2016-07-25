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

    initialize({appState, target}) {
        this.appState = appState;
        this.target = target;
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
        this.views = [
            new NavigationSlidesView({target: this.$('.js-navigationSlides')}),
            new CultureView({target: this.$('.js-culture')}),
            new SectionHeaderView({target: this.$('.js-sectionHeaderPremiumYardwear')}),
            new ProductPreviewView({target: this.$('.js-productPreview')}),
            new BlogPreviewView({target: this.$('.js-blogPreview')})
        ];
    }

});

export default HomePage;
