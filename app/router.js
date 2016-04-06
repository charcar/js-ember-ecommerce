import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('cart');
  this.route('admin');
  this.route('item', {path: '/item/:item_id'});
});

export default Router;
