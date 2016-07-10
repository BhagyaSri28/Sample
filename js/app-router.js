myApp.config(function($routeProvider){
$routeProvider

        .when('/yakub',{
           templateUrl: 'partials/movies-list.html',
           controller: 'listController'
        })
        .when('/movies-list',{
            templateUrl: 'partials/movies-list.html',
           controller: 'listController'
        })
        .when('/movies-details',{
            templateUrl: 'partials/movies-details.html',
           controller: 'detailsController'
        })
       .otherwise({redirectTo: '/'});
    
});


