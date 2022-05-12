angular.module('MainApp', []);

function controladorPrincipal($scope,$http) {
    $scope.areas = { };
    $scope.newArea = { };

    $http.get('/api/areas').success(function(data) {
        $scope.areas = data;
        console.log(data);
    }).error(function(data) {
        console.log('Error: ' + data); 
    });  

    $scope.registrarArea=function() {
        $http.post ('/api/area',$scope.newArea)
        .success(function(data) {
            $scope.newArea = { };
            $scope.areas=data;
        })
        .error(function(data) {
        console.log('Error: ' + data); 
        }); 
    
    };

    $scope.selectArea = function(area) {
        $scope.newArea = area;
        $scope.selected =true;
        console.log(  $scope.newArea, $scope.selected)
    };

    $scope.modificarArea = function(newArea) {
        $http.put('/api/area/' + $scope.newArea._id,$scope.newArea)
        .success(function(data) {
           $scope.newArea= { };
           $scope.areas=data;
           $scope.selected=false;
        })
        .error(function(data) {
            console.log('Error: ' + data); 
        }); 
    };
    $scope.borrarArea = function(newArea) {
        $http.delete('/api/area/' + $scope.newArea._id)
        .success(function(data) {
           $scope.newArea= { };
           $scope.areas=data;
           $scope.selected=false;
        })
        .error(function(data) {
            console.log('Error: ' + data); 
        }); 
    };
    
}