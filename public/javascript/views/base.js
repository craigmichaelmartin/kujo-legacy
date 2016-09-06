import Backbone from 'backbone';
import _ from 'underscore';

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

    getHtml() {
        return this.template(this.getTemplateData());
    },

    buildElement() {
        return this.$el.html(this.getHtml());
    },

    doRender() {
        this.buildElement();
        // commented out for blog app (maybe once internals are separated
        // into browse vs article, this won't me needed)
        // why was it added in the first place though?
        if (this.target ) { //&& !this.targetAttached) {
            this.beforeAttach && this.beforeAttach();
            this.attach();
            this.targetAttached = true;
        }
    },

    ensureTarget() {
        if (this.target && !(this.$target instanceof Backbone.$)) {
            this.$target = Backbone.$(this.target);
        }
    },

    attach() {
        this.ensureTarget();
        this.$target.empty().append(this.$el);
    },

    render() {
        this.beforeRender && this.beforeRender();
        this.doRender();
        this.afterRender && this.afterRender();
        return this;
    },

    domInsert(elements) {
        this.$el.empty().append(elements);
    },

    getTemplateData() {
        return this.model && this.model.toJSON() || {};
    },

    showLoading() {
        this.$el.empty().append(loaderTemplate);
    }

});

export default Base;
