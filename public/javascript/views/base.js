import Backbone from 'backbone';

const fs = require('fs');
const path = require('path');
const loaderTemplate = fs.readFileSync(path.join(__dirname, '/../templates/loader.html'), 'utf8');

const Base = Backbone.View.extend({

    close() {
        this.beforeClose && this.beforeClose();
        this.trigger('close');
        this.app && this.app.close();
        this.view && this.view.close();
        this.remove();
        this.unbind();
        this.stopListening();
        return this;
    },

    doRender() {
        this.$el.empty().append(this.template(this.getTemplateData()));
    },

    render() {
        this.beforeRender && this.beforeRender();
        this.doRender();
        this.afterRender && this.afterRender();
        if (this.domTargetSelector) {
            this.insertIntoDom();
        }
        return this;
    },

    insertIntoDom() {
        $(this.domTargetSelector).empty().append(this.$el);
    },

    getTemplateData() {
        return this.model && this.model.toJSON() || {};
    },

    showLoading() {
        this.$el.empty().append(loaderTemplate);
    }

});

export default Base;
