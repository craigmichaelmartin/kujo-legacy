import Model from './model';

const GenericAppStateModel = Model.extend({

    getUrl() {
        return this.get('app').split(/(?=[A-Z])/).join('-').toLowerCase();
    },

    getTitle() {
        return this.get('app').split(/(?=[A-Z])/).join(' ');
    }

});

export default GenericAppStateModel;
