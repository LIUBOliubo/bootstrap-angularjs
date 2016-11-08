appStore.controller('ding1Controller',['$scope','$rootScope','$routeParams','$http',function($scope,$rootScope,$routeParams,$http){
$http({
  url:'http://localhost:3100/dingAll'
})
.then(function(res){
  $rootScope.ding1=res.data;
})
  $scope.fa=function(item){
    console.log(item);
    if(item.user_get){
      console.log("1");

    }else{
      console.log("2");
      item.user_get=1;
      console.log(item.id);
      $http({
        url:"http://localhost:3100/dingUpdate?user_name="+item.user_name+"&user_count="+item.user_count+"&user_data="+item.user_data+"&user_addr="+item.user_addr+"&user_get="+item.user_get+"&id="+item.id+"&price="+item.price+"&sum="+item.sum+"&d_num="+item.d_num
      })
      .then(function(res){
        console.log("00000000000");
      },function(){

      })

      $.ajax({
        url:'http://localhost:3100/dingAll',
        success:function(res){
          $rootScope.ding1=res;
          $scope.$apply();
          console.log(res);
        }
      })
    }
  }
}])
