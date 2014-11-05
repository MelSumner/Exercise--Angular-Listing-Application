angular.module('listing.module', ['listing.services', 'listing.filters'])
.controller('listingCtrl', ['$scope', 'data', '$rootScope', function ($scope, data, $rootScope) {
    'use strict';
    $scope.title = "Technology News";
    $scope.setData = function (data) {
        $scope.articles = data.articles;
        console.log($scope.articles);
    }
    data.get('scripts/data/articles.js', $scope.setData);
    $scope.viewLimit = 4;
    $scope.viewMore = function (num) {
        $scope.viewLimit += num;
    }
    $scope.descending = true;
    $scope.filters = {
        query: "",
        tags: [
            {
                label: "tag1",
                selected: false
            },
            {
                label: "tag2",
                selected: false
            },
            {
                label: "tag3",
                selected: false
            },
            {
                label: "tag4",
                selected: false
            },
            {
                label: "tag5",
                selected: false
            }
        ]
    }
}])
.controller('testCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.dataFromRoot = $rootScope.testValue;
}])
.run(['$rootScope', function ($rootScope) {
    $rootScope.testValue = "I am in rootScope";
}]);