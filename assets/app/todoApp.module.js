(function(){
    
    angular.module('sails-todo-app',['ui.router']);

    angular.module('sails-todo-app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $stateProvider.state('create-task',{
            url : '/task/create',
            templateUrl : '/app/taskCreate.html',
            controller : 'taskCreateCtrl'
        });

        $urlRouterProvider.otherwise('/task/create');
    }]);

})();
