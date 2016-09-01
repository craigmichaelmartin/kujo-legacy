import BaseCollectionView from './collection';
import BlogItem from './blogItem';
import 'bootstrap/dist/js/bootstrap.min.js';

const BlogCollectionView = BaseCollectionView.extend({

    initialize({target, collection}) {
        this.target = target;
        this.collection = collection;
        this.render();
    },

    createItemView({model}) {
        return new BlogItem({model});
    }

});

export default BlogCollectionView;
