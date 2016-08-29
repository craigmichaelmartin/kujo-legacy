import Backbone from 'backbone';
const KujoAppRouter = Backbone.Router.extend({

    get routes() {
        return {
            '*splat': 'loadApp'
        };
    },

    initialize({appState}) {
        this.appState = appState;
        // As application state chages, the url and periphery are updated
        this.appState.on('change:app', this.updatePeripheralsWithState, this);
    },

    loadApp(app) {
        // transform url 
        var appName = this.appState.getAppName(app);
        this.appState.set('app', appName, {validate: true});
    },

    updatePeripheralsWithState(model) {
        this.navigate(model.getUrl());
        document.title = model.getTitle();
        window.scrollTo(0, 0);
    }

});

export default KujoAppRouter;
