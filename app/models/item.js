import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr()
});
