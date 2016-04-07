import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(index) {
    this.get('items').removeAt(index);
  },

  cartCount: Ember.computed('items.[]', function(){
    return this.get('items.length');
  }),
  totalCost: Ember.computed('items.[]', function(){
    var allCost = 0;
    for (var i = 0; i < this.get('items.length'); i++) {
      allCost += this.get('items')[i].get('cost');
    }
    return allCost;
  })
});
