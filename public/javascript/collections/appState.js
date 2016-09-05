import _ from 'underscore';
import Collection from './collection';

const AppStateCollection = Collection.extend({

    initialize() {
        this.on('change:activeApp', this.ensureOnlyOneActive);
    },

    getAppStateModel(app) {
        return this.findWhere({app});
    },

    setAppStateModel({app, attrs}) {
        const model = this.getAppStateModel(app);
        model.clear({silent: true}).set(_.extend({}, attrs, {app}));
    },

    ensureOnlyOneActive(one) {
        this.each((model) => {
            if (model.get('activeApp') && model.cid !== one.cid) {
                model.set({activeApp: false}, {silent: true});
            }
        });
    }

});

export default AppStateCollection;
