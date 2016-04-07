import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeItem(item) {
      if (confirm('Are you sure you want to permanently remove this item from Clothing Land')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
