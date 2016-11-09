appStore.controller('ding1Controller',['$scope','$rootScope','$routeParams','$http',function($scope,$rootScope,$routeParams,$http){
    $('#itemSa').attr('disabled',true);
$http({
  url:'http://www.ubugyun.com:3100/dingAll'
})
.then(function(res){
  $rootScope.ding1=res.data;
})
$scope.searbt1=function(x){
  var t1="t123";
  if(x.indexOf("t123")>-1){
  $('#itemSa').attr('disabled',false);
    $scope.search1=x;
  }
  
}
$scope.searbt2=function(x){
  var t2="taobao_";
  if(x.indexOf("taobao")>-1){
    $('#itemSa').attr('disabled',false);
    $scope.search2=x;
  }
  
}
$scope.item=function(){
$('#itemSa').attr('disabled',false);
$scope.search1="";
$scope.search2="";
}
  $scope.fa=function(item){
    console.log(item);
    if(item.user_get){
      console.log("1");

    }else{
      console.log("2");
      item.user_get=1;
      console.log(item.id);
      $http({
        url:"http://www.ubugyun.com:3100/dingUpdate?user_name="+item.user_name+"&user_count="+item.user_count+"&user_data="+item.user_data+"&user_addr="+item.user_addr+"&user_get="+item.user_get+"&id="+item.id+"&price="+item.price+"&sum="+item.sum+"&d_num="+item.d_num
      })
      .then(function(res){
        console.log("00000000000");
      },function(){

      })

      $.ajax({
        url:'http://www.ubugyun.com:3100/dingAll',
        success:function(res){
          $rootScope.ding1=res;
          $scope.$apply();
          console.log(res);
        }
      })
    }
  }
}])
