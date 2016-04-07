import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },

    saveItem() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost'))
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem', params);
    }
  }
});
