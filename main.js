function startApp() {
  var $appDiv = $('.app');
  var tasks = new Tasks(taskData);
  var taskManager = new AppModel({tasks: tasks});
  var taskManagerView = new AppView({el: $appDiv, model: taskManager});
}

startApp();