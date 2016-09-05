import Backbone from 'backbone';
const KujoAppRouter = Backbone.Router.extend({

    get routes() {
        return {
            '': 'loadHomeApp',
            home: 'loadHomeApp',
            footwear: 'loadFootwearApp',
            apparel: 'loadApparelApp',
            story: 'loadStoryApp',
            give: 'loadGiveApp',
            contact: 'loadContactApp',
            blog: 'loadBlogApp',
            'blog/:id/:title': 'loadBlogApp',
            'not-found': 'loadNotFoundApp',
            '*splat': 'loadNotFoundApp'
        };
    },

    initialize({appStateCollection}) {
        this.appStateCollection = appStateCollection;
        // As application state chages, the url and periphery are updated
        this.appStateCollection.on('change', this.updatePeripheralsWithState, this);
    },

    loadHomeApp() {
        this.appStateCollection.getAppStateModel('home').set({activeApp: true});
    },
    loadFootwearApp() {
        this.appStateCollection.getAppStateModel('footwear').set({activeApp: true});
    },
    loadApparelApp() {
        this.appStateCollection.getAppStateModel('apparel').set({activeApp: true});
    },
    loadStoryApp() {
        this.appStateCollection.getAppStateModel('story').set({activeApp: true});
    },
    loadGiveApp() {
        this.appStateCollection.getAppStateModel('give').set({activeApp: true});
    },
    loadContactApp() {
        this.appStateCollection.getAppStateModel('contact').set({activeApp: true});
    },
    loadBlogApp(id, title) {
        this.appStateCollection.getAppStateModel('blog').set({activeApp: true, id, title});
    },
    loadNotFoundApp() {
        this.appStateCollection.getAppStateModel('notFound').set({activeApp: true});
    },

    updatePeripheralsWithState(model) {
        this.navigate(model.getUrl());
        document.title = `Kujo - ${model.getTitle()}`;
        window.scrollTo(0, 0);
    }

});

export default KujoAppRouter;
