import Model from './model';

const BlogState = Model.extend({

    defaults() {
        return {
            id: '',
            title: ''
        };
    },

    getUrl() {
        let base = this.get('app').split(/(?=[A-Z])/).join('-').toLowerCase();
        if (this.get('id') && this.get('title')) {
            base += `/${this.get('id')}/${this.get('title')}`;
        }
        return base;
    },

    getTitle() {
        let base = this.get('app').split(/(?=[A-Z])/).join(' ');
        if (this.get('id') && this.get('title')) {
            base += `: ${this.get('title')}`;
        }
        return base;
    }

});

export default BlogState;
