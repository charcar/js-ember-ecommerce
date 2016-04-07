import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(index) {
      this.get('shoppingCart').remove(index);
    }
  }
});
