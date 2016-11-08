appStore.controller('item3Controller',['$scope','$rootScope','$routeParams','$http',function($scope,$rootScope,$routeParams,$http){
  $('#itemSa').attr('disabled',true);
  $scope.searbt=function(x){
    $('#itemSa').attr('disabled',false);
    $scope.search1=x;
  }
$scope.item=function(){
$('#itemSa').attr('disabled',false);
  $scope.search1=" ";
}

   $scope.item3=$rootScope.store;
   $scope.delete=function(id){
     console.log(id);
     $http({
       url:"http://localhost:3100/goodDel?id="+id
     })
     .then(function(res){
       $.ajax({
         url:"http://localhost:3100/goodAll",
         success:function(res){
           $scope.item3=res;
           $rootScope.store=res;
           $scope.$apply();
         }
       })




     },function(){
       console.log(id);
     })
   }
  //  function delete(id){
  //    $.ajax({
  //   url:"http://localhost:3100/goodAdd?id="+id,
  //   success:function(res){
  //   alert('删除成功！！')
  //
  //   }
  // })
  //  }

  }])
