var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
            // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'serviceController'
        })
        .when('/price', {
            templateUrl : 'pages/price.html',
            controller  : 'priceController'
        })
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        .when('/faq', {
            templateUrl : 'pages/faq.html',
            controller  : 'faqController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .when("/", {
            templateUrl: "pages/home.html", 
            controller: "mainController"
        })
});

myApp.controller('mainController', function($scope) {
	$scope.message = 'Home';
    $scope.pageClass = 'page-home';
});
myApp.controller('serviceController', function($scope) {
	$scope.message = 'Services';
    $scope.pageClass = 'page-services';
});
myApp.controller('priceController', function($scope) {
	$scope.message = 'Pricing Table';
    $scope.pageClass = 'page-price';
});
myApp.controller('aboutController', function($scope) {
	$scope.message = 'About';
    $scope.pageClass = 'page-about';
});
myApp.controller('faqController', function($scope) {
	$scope.message = 'FAQ';
    $scope.pageClass = 'page-faq';
});
myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact';
    $scope.pageClass = 'page-contact';
});