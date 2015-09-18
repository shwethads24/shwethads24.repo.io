var new1 = angular.module('myApp',[]);
new1.controller('myName',function($scope){
$scope.first='Jon';
$scope.last='cjo';
$scope.full=function()
{
	return $scope.first+ '' +$scope.last 	;

}

});