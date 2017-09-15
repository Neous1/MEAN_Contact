var app = angular.module('myApp', []);

app.controller("AppCtrl", function ($scope, $http) {
    console.log("hello from the controller")

    var refresh = function () {
        $http.get("/contactList")
            .then(function (success) {
                console.log("We ve got data")
                $scope.contactList = success.data;
                $scope.contact = null;//clear input box after we call refresh()                
            }, function (error) {
                console.log("We've got error");

            });
    };
    refresh();
    //addContact() sends input data to server
    $scope.addContact = function () {
        console.log($scope.contact);
        $http.post("/contactList", $scope.contact)
            .then(function (success) {
                console.log(success.data)
            }, function (error) {
                console.log("there is an error sending data back to controller")
            });
            refresh();
    };

    $scope.remove = function(id){
        console.log("please remove this: ", id)
        $http.delete("/contactList/"+id)
        .then(function(success){
            // $scope.contactList=success.data;
            refresh();
        }, function(error){
            console.log("there is an error getting data to be deleted")
        });
    };

    $scope.edit = function(id){
        console.log("please remove this: ", id)
        $http.get("/contactList/"+id)
        .then(function(success){
            $scope.contact = success.data;
            // refresh();
        }, function(error){
            console.log("there is an error getting data to be deleted")
        });
    };
    $scope.update = function(){
        console.log($scope.contact._id)
        $http.put("/contactList/"+$scope.contact._id, $scope.contact)//take everything in the url and send it to the server i.e. all info related to contact
        // .then(function(success){
        //     $scope.contact = success.data;
        //     // refresh();
        // }, function(error){
        //     console.log("there is an error getting data to be deleted")
        // });
    };

    
});