var app = angular.module("customers",[]);

var CustomerSearchController = function($scope,$http){
    $scope.customers = [];
    $scope.search = function(searchTerm){
        $http.get("/customers.json",
                    {"params":{"keywords":searchTerm}})
                    .then(function(response){
                        $scope.customers = response.data;
                    },function(response){
                        alert("There was a problem:" + response.status)
                    })
        $scope.customers = [
            {
                "first_name":"Schuyler",
                "last_name":"Cremin",
                "email":"email1@example.com",
                "username":"jilliano",
                "created_at":"2015-03-04"
            },
            {
                "first_name":"Derick",
                "last_name":"Ebert",
                "email":"email2@example.com",
                "username":"badass",
                "created_at":"2015-03-01"
            },
            {
                "first_name":"Derick",
                "last_name":"Johsons",
                "email":"email3@example.com",
                "username":"dungee",
                "created_at":"2015-03-04"
            }
        ]
    }
}

app.controller("CustomerSearchController", ["$scope","$http",CustomerSearchController]);

