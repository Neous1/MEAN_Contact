var app = angular.module('myApp', []);

app.controller("AppCtrl", function ($scope, $http) {
    console.log("hello from the controller")


    $http.get("/contactList")
        .then(function (success) {
            console.log("We ve got data")
            $scope.contactList = success.data;
        }, function(error){
                console.log("We've got error");

        });
//addContact() sends input data to server
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post("/contactList", $scope.contact)
        .then(function(success){
            console.log(success.data)
        }, function(error){
            console.log("there is an error sending data back to controller")
        })
    };
});