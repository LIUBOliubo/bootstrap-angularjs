appStore.controller("item2Controller",['$scope','$rootScope','$routeParams',function($scope,$rootScope,$routeParams){
  $('#itemSa').attr('disabled',true);
  $scope.searbt=function(x){
    $('#itemSa').attr('disabled',false);
    $scope.search1=x;
  }
  $scope.item=function(){
  $('#itemSa').attr('disabled',false);
  $scope.search1=" ";
  }
  $scope.product=$rootScope.store;
  $('#item2_id').blur(function(){
  $('#item2_bt2').attr('disabled',false);
  $('#item2_bt1').attr('disabled',false);
    var x=this.value*1;
    //console.log(x);
    $.ajax({
      url: "http://localhost:3100/goodById?id="+x,

      success: function(res){
          console.log(res);
          if(res.length==0){
            $('#item2_bt1').attr('disabled',true);
            $('#item2_name').val('');
            $('#item2_price').val('');
            $('#item2_words').val('');
            $('#item2_redidue').val('');
             $('#tip').html("温馨提示：你输入的商品不存在，若要添加商品信息请将表格填写完整完整！");
             $('#tip').css({"color":"ligreen"})
               $('.item2_2 input').css({'box-shadow':"0 0 2px 2px lightgreen"});

          }
    for(var i=0;i<res.length;i++){
      if(res[i].id==x){
        $('#item2_name').val(res[i].name);
        $('#item2_price').val(res[i].price);
        $('#item2_words').val(res[i].words);
        $('#item2_redidue').val(res[i].redidue);
      $('.item2_2 input').css({'box-shadow':"0 0 2px 2px red"});
      $('#tip').css({"color":"pink"});
       $('#tip').html("温馨提示：您添加的商品已存在，若要修改请继续修改商品信息！");
       $('#item2_bt2').attr('disabled',true);
     }
    }
      }});

  });

  $('#item2_bt2').click(function(){
      var id=$('#item2_id').val();
      var name=$('#item2_name').val();
      var price=$('#item2_price').val();
      var words=$('#item2_words').val();
      var redidue=$('#item2_redidue').val();
      $.ajax({
     url:"http://localhost:3100/goodAdd?id="+id+"&name="+name+"&words="+words+"&price="+price+"&redidue="+redidue,
     success:function(res){
       //console.log(res);
       $('#tip').html("温馨提示：商品添加成功！！");
       $('#item2_id').val('');
       $('#item2_name').val('');
       $('#item2_price').val('');
       $('#item2_words').val('');
       $('#item2_redidue').val('');
       $('.item2_2 input').css({'box-shadow':"0 0 2px 2px lightgreen"});
     }
     })
      shua();
      $('#item2_bt1').attr('disabled',true);

  });
  $('#item2_bt1').click(function(){
    console.log(2222);
    var id=$('#item2_id').val();
    var name=$('#item2_name').val();
    var price=$('#item2_price').val();
    var words=$('#item2_words').val();
    var redidue=$('#item2_redidue').val();
    $.ajax({
   url:"http://localhost:3100/goodUpdate?name="+name+"&words="+words+"&price="+price+"&redidue="+redidue+"&id="+id,
   success:function(res){
     console.log(res);
     console.log(111111);

   }
   })
shua();
$('#tip').html("温馨提示：修改成功！！");
$('#item2_bt1').attr('disabled',true);
$('#item2_id').val('');
$('#item2_name').val('');
$('#item2_price').val('');
$('#item2_words').val('');
$('#item2_redidue').val('');
$('.item2_2 input').css({'box-shadow':"0 0 2px 2px lightgreen"});
  })
  function shua(){
    $.ajax({
      url:'http://localhost:3100/goodAll',
      success:function(res){
        console.log(1111111111111111111);
        console.log($rootScope.store);
        console.log(222200000 );
        $rootScope.store=res;
        console.log($rootScope.store);
        $scope.product=res;
        console.log($scope.product[17]);
        $scope.$apply();
      }
    })
  }

}])
