'use strict';

angular.module('todos', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todos', {
    templateUrl: 'todos/todos.html',
    controller: 'TodosCtrl'
  });
}])

.controller('TodosCtrl', function() {
      this.todos = [
        {
          id: 1,
          title: 'todo1',
          description: 'description for todo1',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        },
        {
          id: 2,
          title: 'todo2',
          description: 'description for todo2',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        },
        {
          id: 3,
          title: 'todo3',
          description: 'description for todo3',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        },
        {
          id: 4,
          title: 'todo4',
          description: 'description for todo4 4444',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        },
        {
          id: 5,
          title: 'todo5',
          description: 'description for todo5',
          addedDate: '25.06.2018',
          expirationDate: '15.09.2018'
        }
      ];
      this.newTodo = new Object;
      this.editableTodo = new Object;
      this.deletableTodo = new Object;

      this.getCurrentDate = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+ dd
        }
        if(mm<10) {
            mm = '0'+ mm
        }
        today = mm + '.' + dd + '.' + yyyy;
        return today;
      }

      this.openAddModal = function() {
        var modal = document.getElementById('add-modal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
      }

      this.addTodo = function() {
        var modal = document.getElementById('add-modal');
        this.newTodo.id = this.todos.length + 1;
        this.newTodo.addedDate = this.getCurrentDate();
        this.todos.push(this.newTodo);
        modal.style.display = "none";
        this.newTodo = new Object;
      }

      this.openEditModal = function(todo) {
        this.editableTodo = todo;
        var modal = document.getElementById('edit-modal');
        var span = document.getElementsByClassName("close")[1];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
      }

      this.editTodo = function() {
        var modal = document.getElementById('edit-modal');
        modal.style.display = "none";
      }

      this.openDeleteModal = function(todo) {
        this.deletableTodo = todo;
        var modal = document.getElementById('delete-modal');
        var span = document.getElementsByClassName("close")[2];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
      }

      this.deleteTodo = function () {
        var modal = document.getElementById('delete-modal');
        this.todos = this.todos.filter(todo => todo.id != this.deletableTodo.id);
        modal.style.display = "none";
      }

      this.cancelDelete = function () {
        var modal = document.getElementById('delete-modal');
        modal.style.display = "none";
      }

    }
  );
