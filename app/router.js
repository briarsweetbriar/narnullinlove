import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('registry');
  this.route('lodging');
  this.route('for-fun');
  this.route('about');
  this.route('basic-info');
  this.route('rsvp');
  this.route('artists');
});

export default Router;
