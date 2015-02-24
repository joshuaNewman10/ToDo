var AppView = Backbone.View.extend({
  model: AppModel,
  
  initialize: function() {
    this.tasksView = new TasksView({collection: this.model.get('tasks')});
    this.interactionView = new InteractionView({el: $('.add')});
    this.render();
  },

  render: function() {
   return this.$el.find('.tasks').append([
      this.tasksView.$el
    ]);
  }
});