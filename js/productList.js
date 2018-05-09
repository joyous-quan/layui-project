layui.config({
  base : "js/"
}).use(['form','layer','jquery','laypage'],function(){
  var form = layui.form,
    laypage = layui.laypage,
    $ = layui.jquery;

 
})
  layui.config({
    version: '1512984638033' //为了更新 js 缓存，可忽略
  });
  layui.use(['laydate', 'laypage', 'layer', 'table', 'element','jquery'], function(){
    var laydate = layui.laydate //日期
    ,laypage = layui.laypage //分页
    ,layer = layui.layer //弹层
    ,table = layui.table //表格
    ,element = layui.element //元素操作
    ,$ = layui.jquery;

  
    //监听工具条
    table.on('tool(productList)', function(obj){
      var data = obj.data;
      if(obj.event === 'del'){
        layer.confirm('确定要删除么？', function(index){
          obj.del();
          layer.close(index);
        });
      } else if(obj.event === 'edit'){
        //layer.alert('编辑行：<br>'+ JSON.stringify(data))
        setCookie('editStr',JSON.stringify(data));
        //console.log(getCookie('editOBj'))
        pageShow('编辑产品价格','./editProduct.html',455,520)
      }
    });

    //弹出规格筛选条件
    $('.filtrate').click(function(){
      pageShow('规格筛选','./sizeFiltrate.html',360,400)
    })

    //console.log(document.cookie)
    if(getCookie('spec_2') == 'checked'){
     $("[data-field='spec_2']").css('display',"table-cell");
    }else{
      $("[data-field='spec_2']").css('display','none');
    }

    if(getCookie('spec_3') == 'checked'){
     $("[data-field='spec_3']").css('display',"table-cell");
    }else{
      $("[data-field='spec_3']").css('display','none');
    }

    if(getCookie('spec_4') == 'checked'){
     $("[data-field='spec_4']").css('display',"table-cell");
    }else{
      $("[data-field='spec_4']").css('display','none');
    }

     //查询
    $(".search_btn").click(function(){ 
        if($(".search_input").val() != ''){
          var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.7});
          setTimeout(function(){
            layer.close(index);
          },1000);
        }else{
          layer.msg("请输入需要查询的内容");
        }
    })

    function pageShow(title,url,w,h){
      if (title == null || title == '') {
          title=false;
      };
      if (url == null || url == '') {
          url="../404.html";
      };
      if (w == null || w == '') {
          w=($(window).width()*0.9);
      };
      if (h == null || h == '') {
          h=($(window).height() - 50);
      };
      layer.open({
        type: 2,
        area: [w+'px', h +'px'],
        fix: false, //不固定
        //maxmin: true,
        shadeClose: true,
        shade:0.4,
        title: title,
        content: url
      });
    }
    
  });


