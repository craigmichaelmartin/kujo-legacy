import 'es5-shim';
import 'babel-polyfill';
import './utilities/leak_jquery';
import AppView from './app';
import AppRouter from './router';
import GenericAppStateModel from './models/appState';
import BlogStateModel from './models/blogState';
import AppStateCollection from './collections/appState';
import Backbone from 'backbone';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

$.ajaxSetup({cache: false});

const appStateCollection = new AppStateCollection([
    new GenericAppStateModel({
        app: 'home'
    }),
    new GenericAppStateModel({
        app: 'footwear'
    }),
    new GenericAppStateModel({
        app: 'apparel'
    }),
    new GenericAppStateModel({
        app: 'story'
    }),
    new GenericAppStateModel({
        app: 'contact'
    }),
    new GenericAppStateModel({
        app: 'give'
    }),
    new BlogStateModel({
        app: 'blog'
    }),
    new GenericAppStateModel({
        app: 'notFound'
    })
]);

const appRouter = new AppRouter({appStateCollection}); // eslint-disable-line no-unused-vars
const app = new AppView({
    target: '.js-kujo',
    appStateCollection
});
Backbone.history.start({/* pushState: true */});
// Hack for transparent paraHeaders to have the parallax scroll affect
// (which needs the body to have the background image) but without
// flashing the background image as the page loads. This hack waits until
// the dom is ready before adding the class with the image css.
// Possible fix: have the paraHeaders in front of a div with the image,
// instead of the body having the image.
$(()=> $('.js-kujo').addClass('kujo'));
