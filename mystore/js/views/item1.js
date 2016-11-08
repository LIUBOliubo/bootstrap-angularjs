appStore.controller('item1Controller',['$scope','$rootScope','$routeParams','$http',function($scope,$rootScope,$routeParams,$http){
   $http({
     //url:'/mock/list1.json'
     url:'http://localhost:3100/goodAll'
   })
   .then(function(res){
     console.log(res.data);
    $rootScope.store=res.data;
$('#itemSa').attr('disabled',true);
   },function(){
     console.log(00000);
   })
    $scope.searbt=function(x){
      $('#itemSa').attr('disabled',false);
      $scope.search1=x;
    }
  $scope.item=function(){
  $('#itemSa').attr('disabled',false);
    $scope.search1=" ";
  }

  }])
