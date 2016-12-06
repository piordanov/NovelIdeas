;(function (angular) {
    'use strict';

    angular
        .module('MainRouter', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/pagination', {
                    templateUrl: 'partials/pagination-list.html',
                    controller: 'PaginationCtrl',
                    controllerAs: 'vm'
                }).
                when('/pagination/edit/:name', {
                    templateUrl: 'partials/pagination-edit.html',
                    controller: 'PaginationCtrl',
                    controllerAs: 'vm'
                }).
                when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                }).
                when('/signup', {
                    templateUrl: 'partials/signup.html',
                    controller: 'LoginCtrl', // needs to be changed
                    controllerAs: 'vm'
                }).
                when('/books', {
                    templateUrl: 'partials/books.html',
                    controller: 'TabularCtrl', // needs to be changed
                    controllerAs: 'vm'
                }).
                when('/users', {
                    templateUrl: 'partials/users.html',
                    controller: 'TabularCtrl', // needs to be changed
                    controllerAs: 'vm'
                }).
                when('/userlist', {
                    templateUrl: 'partials/userlist.html',
                    controller: 'TabularCtrl', // needs to be changed
                    controllerAs: 'vm'
                }).
                when('/booklist', {
                    templateUrl: 'partials/booklist.html',
                    controller: 'TabularCtrl', // needs to be changed
                    controllerAs: 'vm'
                }).
                when('/tabs', {
                    templateUrl: 'partials/tabular.html',
                    controller: 'TabularCtrl',
                    controllerAs: 'vm'
                }).
                when('/search', {
                    templateUrl: 'partials/search.html',
                    controller: 'PaginationCtrl',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/signup'
                });
            }
        ]);
})(angular);
