'use strict';

angular.
  module('addForm').
  component('addForm', {
    templateUrl: 'add-form/add-form.template.html',
    controller: function AddFormController() { 
      this.onSubmit = function() {
        this.addModal = false;   // todo: flag-ul din cealalta componenta trebuie facut false
        console.log("submit changes");
      }
    }
});
