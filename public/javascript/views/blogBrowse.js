import View from '../views/base';
import BlogHeader from '../views/blogHeader';
import BlogCollectionView from '../views/blogCollection';
import BlogSidebar from '../views/blogSidebar';
import BlogCollection from '../collections/blog';
import BlogFilters from '../collections/blogFilters';
import _ from 'underscore';
import 'bootstrap/dist/js/bootstrap.min.js';

const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '/../templates/blogBrowse.html'), 'utf8');

const fakeBlogCollection = [{
    title: 'Outdoor Games this Summer',
    previewImage: '/public/images/girloutside.jpg',
    date: '2 Days Ago',
    readTime: '6 minutes',
    body: 'Have fun this summer with the whole family with these silly games. Why silly, because it is silly oclock. But there is more text too.',
    id: 1
}, {
    title: 'The Kujo Burger',
    previewImage: '/public/images/food-chicken-meat-outdoors.jpg',
    date: '9 Days Ago',
    readTime: '3 minutes',
    body: 'No one knows burgers like cows. And the cows have spoken. Eat more chicken. We will check how the chickens feel later. It is burger time.',
    id: 2
}, {
    title: 'The Best & Worst in Weed Killers',
    previewImage: '/public/images/dand.jpeg',
    date: 'August 15, 2016',
    readTime: '14 minutes',
    body: 'See you later weeds, I thought to myself as I sprayed weed killer on my flower beds. Joke was on me, the weeds had their umbrellas out.',
    id: 3
}];

const fakeBlogFilters = [
    {text: 'Most Recent'},
    {text: 'Most Shared'},
    {text: 'Minute to Fix It'},
    {text: 'Gardening'},
    {text: 'Yard Care Tips & Tricks'},
    {text: 'Build-it-Yourself'},
    {text: 'Do-It-Yourself'},
    {text: 'Family Fun'},
    {text: 'Decorating'},
    {text: 'Hosting & Recipes'},
    {text: 'Product Reviews'},
    {text: 'Mythbusters'}
];

const BlogApp = View.extend({

    template() {
        return _.template(template);
    },

    views: [],

    initialize({appState, target}) {
        this.target = target;
        this.appState = appState;
        this.blogCollection = new BlogCollection(fakeBlogCollection);
        this.blogFilters = new BlogFilters(fakeBlogFilters);
    },

    closeViews() {
        while (this.views.length > 0) {
            this.views[0].close();
            delete this.views[0];
            this.views.shift();
        }
    },

    beforeClose() {
        this.closeViews();
    },

    beforeRender() {
        this.closeViews();
    },

    beforeAttach() {
        this.views = [
            new BlogHeader({
                target: this.$('.js-blogHeader')
            }),
            new BlogCollectionView({
                target: this.$('.js-blogCollection'),
                collection: this.blogCollection,
                appState: this.appState
            }),
            new BlogSidebar({
                target: this.$('.js-blogSidebar'),
                collection: this.blogFilters,
                appState: this.appState
            })
        ];
    }

});

export default BlogApp;
