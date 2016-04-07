import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    saveItem(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
    },
    destroyItem(item) {
      item.destroyRecord();
    },
    updateItem(item, params) {
      Object.keys(params).forEach(function(key) {
        if((params[key]!==undefined) && (params[key]!==NaN)) {
          item.set(key,params[key]);
        }
      });
      item.save();
    }
  }
});
