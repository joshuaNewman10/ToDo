var TasksView = Backbone.View.extend({
  model: Tasks,

  initialize: function() {
    this.render();
  },

 render: function() {
    this.$el.children().detach();

    return this.$el.append(
      this.collection.map(function(task){
        return new TaskView({model: task}).render();
      })
    );
   }

}); 