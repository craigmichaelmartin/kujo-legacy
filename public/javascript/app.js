import View from './views/base';
import HomeApp from './apps/home';
import FootwearApp from './apps/footwear';
import ApparelApp from './apps/apparel';
import StoryApp from './apps/story';
import GiveApp from './apps/give';
import ContactApp from './apps/contact';
import BlogApp from './apps/blog';
import NotFoundApp from './apps/notFound.js';
import HeaderView from './views/header';
import FooterView from './views/footer';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/templates/app.html'), 'utf8');

const AppView = View.extend({

    template() {
        return _.template(template);
    },

    initialize({appStateCollection, target}) {
        this.target = target;
        this.appStateCollection = appStateCollection;
        this.render();
        this.listenTo(this.appStateCollection, 'change:activeApp', this.updateContent);
    },

    beforeAttach() {
        this.renderHeaderAndFooter();
    },

    renderHeaderAndFooter() {
        this.header = new HeaderView({
            appStateCollection: this.appStateCollection,
            target: this.$('.js-navbar')
        });
        this.footer = new FooterView({
            appStateCollection: this.appStateCollection,
            target: this.$('.js-footer')
        });
    },

    beforeClose() {
        this.app && this.app.close();
        this.header && this.header.close();
        this.footer && this.footer.close();
    },

    // Place these references in the respective state model?
    // Have a separate router for each state model?
    updateContent(appStateModel) {
        const map = {
            home: HomeApp,
            footwear: FootwearApp,
            apparel: ApparelApp,
            story: StoryApp,
            give: GiveApp,
            contact: ContactApp,
            blog: BlogApp,
            notFound: NotFoundApp
        };
        this.app && this.app.close();
        const app = appStateModel.get('app');
        const Constructor = map[app];
        this.app = new Constructor({
            target: this.$('.js-content'),
            appState: this.appStateCollection.getAppStateModel(app)
        });
        this.app.render();
    }
});

export default AppView;
