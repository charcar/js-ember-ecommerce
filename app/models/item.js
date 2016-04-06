import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  cost: DS.attr()
  categories: DS.hasMany('category', {async: true}),
  reviews: DS.hasMany('review', {async: true})
});
