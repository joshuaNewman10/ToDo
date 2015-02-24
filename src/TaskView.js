var TaskView = Backbone.View.extend({
  model: TaskModel,

  initialize: function() {
  },
  
  tagname: 'div',

  template: _.template('<p><%= text %></p><p><%= date %></p>'),

  render: function() {
   return this.$el.html(this.template(this.model.attributes));
  }
});