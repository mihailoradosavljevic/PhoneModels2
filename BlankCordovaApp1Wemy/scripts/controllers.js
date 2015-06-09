//var phonecatApp = angular.module('phonecatApp', []);

//phonecatApp.controller('PhoneListCtrl', function ($scope) {
//    $scope.phones = [
//      {
//          'name': 'Nexus S',
//          'snippet': 'Fast just got faster with Nexus S.',
//          'age':'1'
//      },
//      {
//          'name': 'Motorola XOOM™ with Wi-Fi',
//          'snippet': 'The Next, Next Generation tablet.',
//          'age': '2'
//      },
//      {
//          'name': 'MOTOROLA XOOM™',
//          'snippet': 'The Next, Next Generation tablet.',
//          'age': '3'
//      }
//    ];

//    $scope.orderProp = 'age';

//    $scope.name = "World";
//});


//var phonecatApp = angular.module('phonecatApp', []);

//phonecatApp.controller('PhoneListCtrl',['$scope', '$http', function ($scope, $http) {
//    $http.get('/phones.json').success(function (data) {
//        $scope.phones = data;
//    });

//    $scope.orderProp = 'age';
//}]);


var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('/phones.json').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
  }]);



phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
      $http.get('phoness/' + $routeParams.phoneId + '.json').success(function (data) {
          $scope.phone = data;
          $scope.mainImageUrl = data.images[0];
      });
      $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
      };

  }]);



//phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function ($scope, Phone) {
//    $scope.phones = Phone.query();
//    $scope.orderProp = 'age';
//}]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
//        $scope.mainImageUrl = phone.images[0];
//    });

//    $scope.setImage = function (imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    }
//}]);

