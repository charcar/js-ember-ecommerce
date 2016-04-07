import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    updateItem(item) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost'),
      };
      this.set('updateItemForm', false);
      this.sendAction('updateItem', item, params);
    }
  }
});
