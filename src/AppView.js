var AppView = Backbone.View.extend({
  model: AppModel,
  
  initialize: function() {
    this.tasksView = new TasksView({collection: this.model.get('tasks')});
    this.render();
  },

  render: function() {
   return this.$el.append([
      this.tasksView.$el
    ]);
  }
});