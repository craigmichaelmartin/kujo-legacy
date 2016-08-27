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
            home: 'home',
            footwear: 'footwear',
            apparel: 'apparel',
            story: 'story',
            give: 'give',
            contact: 'contact',
            blog: 'blog',
            'not-found': 'notFound'
        };
    },

    getAppName(app) {
        return this.appsMap[app] || 'notFound';
    },

    get appsList() {
        return [
            'home', 'footwear', 'apparel', 'story',
            'give', 'contact', 'blog', 'notFound'
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
