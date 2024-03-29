import BaseView from './base';

export default BaseView.extend({

    destroyItems() {
        while (this.views.length > 0) {
            this.views[0].close();
            delete this.views[0];
            this.views.shift();
        }
    },

    emptyEl() {
        this.destroyItems();
        this.$el.empty();
        this.el.innerHtml = '';
    },

    beforeRender() {
        this.emptyEl();
    },

    doRender() {
        this.template && BaseView.prototype.doRender.call(this);
        this.ensureTarget();
        this.buildAndAppendItems();
    },

    buildAndAppendItems() {
        this.buildItems();
        this.appendItems();
    },

    buildItems() {
        this.collection.each(this.assignOne, this);
    },

    appendItems() {
        this.$target.append(this.el);
    },

    assignOne(model, index) {
        const view = this.createItemView({model});
        this.beforeAppend && this.beforeAppend({view, model, index});
        const html = view.render().el;
        this.appendItem({html, view, model, index});
        this.views.push(view);
    },

    appendItem({html}) {
        this.el.appendChild(html);
    },

    getTemplateData() {
        return this.collection && this.collection.models || [];
    }

});
