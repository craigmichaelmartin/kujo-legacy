import View from './views/base';
import HomeApp from './apps/home';
import FootwearApp from './apps/footwear';
// import ApparelApp from './apps/apparel';
// import OurStoryApp from './apps/our-story';
// import HowWeGiveApp from './apps/how-we-give';
// import ContactUsApp from './apps/contact-us';
// import BlogApp from './apps/blog';
import NotFoundApp from './apps/notFound.js';
import HeaderView from './views/header';
import FooterView from './views/footer';
import $ from 'jquery';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/templates/app.html'), 'utf8');

const AppView = View.extend({

    template() {
        return _.template(template);
    },

    initialize({appState, days, hours}) {
        this.appState = appState;
        this.render();
        this.listenTo(this.appState, 'change:app', this.updateContent);
    },

    afterRender() {
        this.renderHeaderAndFooter();
    },

    renderHeaderAndFooter() {
        this.header = new HeaderView({
            appState: this.appState,
            el: $('.js-navbar')
        });
        this.footer = new FooterView({
            appState: this.appState,
            el: $('.js-footer')
        });
    },

    beforeClose() {
        this.app && this.app.close();
        this.header && this.header.close();
        this.footer && this.footer.close();
    },

    updateContent() {
        const map = {
            'home': HomeApp,
            'footwear': FootwearApp,
            // 'apparel': Apparel,
            // 'ourStory': OurStory,
            // 'howWeGive': HowWeGive,
            // 'contactUs': ContactUs,
            // 'blog': Blog,
            'notFound': NotFoundApp
        };
        this.app && this.app.close();
        // Hack for now
        this.$('.js-content').length || this.$('.js-navbar').after('<div class="js-content"></div>');
        const Constructor = map[this.appState.get('app')];
        this.app = new Constructor({
            el: $('.js-content'),
            appState: this.appState
        });
        this.app.render();
    }
});

export default AppView;