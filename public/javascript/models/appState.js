import Model from './model';
import _ from 'underscore';

const AppState = Model.extend({

    defaults() {
        return {
            app: ''
        };
    },

    get appsMap() {
        return {
            '': 'home',
            'home': 'home',
            'footwear': 'footwear',
            'apparel': 'apparel',
            'our-story': 'ourStory',
            'how-we-give': 'howWeGive',
            'contact-us': 'contactUs',
            'blog': 'blog',
            'not-found': 'notFound'
        };
    },

    getAppName(app) {
        return this.appsMap[app] || 'notFound';
    },

    get appsList() {
        return [
            'home', 'footwear', 'apparel', 'ourStory',
            'howWeGive', 'contactUs', 'blog', 'notFound'
        ];
    },

    isAuthorizedForApp(app) {
        return true;
    },

    validate(attrs) {
        if (attrs.app) {
            return this.isAuthorizedForApp(attrs.app)
                && this.appsList.includes(attrs.app)
                    ? void 0
                    : false;
        }
    },

    getUrl() {
        return this.get('app').split(/(?=[A-Z])/).join('-').toLowerCase();
    },

    getTitle() {
        return this.get('app').split(/(?=[A-Z])/).join(' ');
    }

});

export default AppState;
