import 'es5-shim';
import 'babel-polyfill';
import './utilities/leak_jquery';
import AppView from './app';
import AppRouter from './router';
import AppState from './models/appState';
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

$.ajaxSetup({cache: false});

const appState = new AppState();
const appRouter = new AppRouter({appState}); // eslint-disable-line no-unused-vars
const app = new AppView({
    target: '.js-kujo',
    appState
});
Backbone.history.start({/* pushState: true */});
// Hack for transparent paraHeaders to have the parallax scroll affect
// (which needs the body to have the background image) but without
// flashing the background image as the page loads. This hack waits until
// the dom is ready before adding the class with the image css.
// Possible fix: have the paraHeaders in front of a div with the image,
// instead of the body having the image.
$(()=> $('.js-kujo').addClass('kujo'));
