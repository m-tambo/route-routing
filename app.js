console.log('hi')
let app = angular.module('highways', ['ngRoute'])

app.config( function($routeProvider) {
   $routeProvider
      .when('/', {
         controller: 'blueCtrl',
         templateUrl: 'partials/brp.html'
      })
      .when('/pacific', {
         controller: 'pacificCtrl',
         templateUrl: 'partials/pch.html'
      })
})

app.controller('blueCtrl', function($scope) {
   $scope.highwayName = 'Blue Ridge Parkway'
   $scope.highwayDescription = 'The Blue Ridge Parkway is a favorite drive through the Appalachian Mountains. We recommend a trip during the autumn, when the mountain trees turn brilliant hues of red and gold.'
   $scope.imageURL = 'http://drivethenation.com/wp-content/uploads/2013/09/Blue-Ridge-Parkway.jpg'
})

app.controller('pacificCtrl', function($scope) {
   $scope.highwayName = 'Pacific Coast Highway'
   $scope.highwayDescription = 'One of the most breathtaking drives in the country, the Pacific Coast Highway is definitely a bucketlist worthy scenic drive. Planning to drive it? Check out our PCH Guide!'
   $scope.imageURL = 'http://drivethenation.com/wp-content/uploads/2014/05/Pacific-Coast-Highway.jpg'
})
