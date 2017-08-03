function AppCtrl($scope,$http) {
    console.log('hello world app');

    $http.get('/contactlist').success(function(response){
        console.log("I got the data requested");
        $scope.contaclist = response;
    });

    $scope.addContact = () => {
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact);
    };

}