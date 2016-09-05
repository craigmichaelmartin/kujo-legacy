import BaseCollectionView from './collection';
import BlogItem from './blogItem';
import 'bootstrap/dist/js/bootstrap.min.js';

const BlogCollectionView = BaseCollectionView.extend({

    initialize({target, collection, appState}) {
        this.views = [];
        this.target = target;
        this.collection = collection;
        this.appState = appState;
        this.render();
    },

    createItemView({model}) {
        return new BlogItem({model, appState: this.appState});
    }

});

export default BlogCollectionView;
