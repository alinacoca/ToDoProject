'use strict';

angular.
  module('todos').
  component('todos', {
    templateUrl: 'todos/todos.template.html',
    controller: function TodosController() {
      this.addModal = false;
      this.todos = [
        {
          title: 'todo1',
          description: 'description for todo1',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        },
        {
          title: 'todo1',
          description: 'description for todo1',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        }
      ];

      this.openForm = function() {
        this.addModal = true;
      }
    }
  });
