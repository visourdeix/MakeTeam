var App = angular.module('mkTeamApp', ['ngDragDrop']);

App.config(['$routeProvider', function($rp) {
    $rp.
      when('/debut', {
        templateUrl: 'views/player_list.html',
        controller: 'StartCtrl'
      }).
      when('/composer', {
        templateUrl: 'views/composition.html',
        controller: 'TeamCtrl'
      }).
	  when('/partager', {
        templateUrl: 'views/partager.html',
        controller: 'ShareCtrl'
	  }).
      otherwise({
        redirectTo: '/debut'
      });
}]);

App.config( ['$compileProvider',function( $compileProvider ) {   
	$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
}]);






