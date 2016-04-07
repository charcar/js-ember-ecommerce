import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').popObject(item);
  },

  totalCost: Ember.computed('items.[]', function(){
    var allCost = 0;
    for (var i = 0; i < this.get('items.length'); i++) {
      allCost += this.get('items')[i].get('cost');
    }
    return allCost;
  })
});
