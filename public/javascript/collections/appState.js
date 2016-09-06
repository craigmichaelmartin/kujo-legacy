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
        // TODO: Overly simple. Use method on specific model?
        model.clear({silent: true}).set(_.extend({}, attrs, {app}));
    },

    // setAppStateModel({app, attrs}) {
    //     const model = this.getAppStateModel(app);
    //     // TODO: Overly simple. Use specific model?
    //     const clearedAttrs = _.mapObject(model.attributes, (val, key) => {
    //         if (key === 'app') return val;
    //         return '';
    //     });
    //     model.set(_.extend({}, clearedAttrs, attrs));
    // },

    ensureOnlyOneActive(one) {
        this.each((model) => {
            if (model.get('activeApp') && model.cid !== one.cid) {
                model.set({activeApp: false}, {silent: true});
            }
        });
    }

});

export default AppStateCollection;
