myApp.controller('listController',['$scope','$http',function($scope,$http){
    
   $http.get('movies.json').success(function(data){
       $scope.moviesList = data.movies;
   }) 
    
    
}]);