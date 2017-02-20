//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//包装点击和轻触
function tapClick(){
    return "ontouchstart" in document ? "tap" : "click";
}
//星星评分
score();
function score(){
    for(var k=0;k<$('.wrap_x').length;k++){
        $('#wrap_x'+k+'').find('.cur').css({
            'height':'13px',
            'background-image':'url(images/star_v.png)',
            'background-repeat':'no-repeat'
        });
        var num=$('#wrap_x'+k+'').attr('data-index');
        var curW=num*16+'px';
        $('#wrap_x'+k+'').find('.cur').css('width',curW);
        $('#wrap_x'+k+'').find('.cur').css('background-position','0px -13px');
    }
} 
function updatePosition1(){
    if(this.y<=-50){
        $('.Return-top').show();  
    }else{
        $('.Return-top').hide();
    }
}
 function updatePosition(){
        $("img.image").lazyload({});
    }
//点击返回顶部
function clicksTop(myScrol0){
    $('.Return-top').on(tapClick(),function(){
        myScrol0.scrollTo(0,0,500);
    })
}
//iscroll 
function Iscroll(names,Id){
    names = new IScroll(Id, {probeType: 3,mouseWheel: true,click: true,scrollbars: false});
}
//url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = decodeURIComponent(window.location.search).substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
//tabs
function Tabs(lisName,divs,className){
  lisName.on(tapClick(),function(){
      var index=$(this).index();
      divs.eq(index).show().siblings().hide();
      lisName.eq(index).addClass(className).siblings().removeClass(className);
      iscrollAll();
  }) 
}
//提示
var loaging={
   //初始
    init:function(txt){
      var index=layer.open({
            content:'<p class="center">'+txt+'</p>',
            style: 'border:none;text-align:center;line-height:50px;',
            shadeClose: false,
            type:2
        });
    }, //提示
    btn:function(txt){
    var index=layer.open({
            content:'<p class="center">'+txt+'</p>',
            style: 'border:none;text-align:center;line-height:50px;margin-top:-25%;',
            shadeClose: false,
            btn: ['确认']
        });
    },
    Alert:function(txt,txt1,infos){
    var index=layer.open({
            content:'<div class="box-mask-html"><p>'+txt+'</p><p>'+txt1+'</p></div>',
            style: 'width:100%;border:none;text-align:center;',
            shadeClose: false,
            btn: ['确定','取消'],
            yes: function(){
              layer.close(index);
              if(infos=='#mod-box'){
                    location.href="mod_address.html"
                    layer.closeAll();
              }
            },no: function(){
                layer.close(index);
            }
        });
    },
    log:function(txt,divs){
      var index=layer.open({
            content:'<p class="center">'+txt+'</p>',
            style: 'width:100%;border:none;text-align:center;line-height:50px;margin-top:-25%;',
            shadeClose: false,
            btn: ['设置', '取消'],
            yes: function(){
                layer.close(index);
                $('#mod-box').show().siblings().hide();
            }, no: function(){
                layer.close(index);
            }
        });
    },
    close:function(names){
       layer.closeAll();
    }
}

 function Common(){
//     //页面初始化时通过h5调取百度API调取百度
//     this.geolocation=function(){
//         // 百度地图API功能
//         if (window.navigator.geolocation) { 
//             var options = {enableHighAccuracy: true,}; 
//             window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

//         } else { 
//             console.log("浏览器不支持html5来获取地理位置信息"); 
//             DWposition();
//         }  
//         function DWposition(){
//             var geolocation = new BMap.Geolocation();
//                 geolocation.getCurrentPosition(function(r){
//                     if(this.getStatus() == BMAP_STATUS_SUCCESS){
//                         var mk = new BMap.Marker(r.point);
//                         var lng=r.point.lng;
//                         var lat=r.point.lat;
//                         var point = new BMap.Point(lng,lat);
//                         var geoc = new BMap.Geocoder();        
//                         geoc.getLocation(point, function(rs){
//                             var addComp = rs.addressComponents;
//                             loaging.close();
//                             $('.list-main-one-html .positioning_address').html(addComp.city + addComp.district+addComp.street);
//                             $('#CityInfo').val(addComp.city + addComp.district+addComp.street);
//                         });     
//                     }
//                     else {
//                         console.log('failed'+this.getStatus());
//                         Alert("请打开您的定位系统,或请手动选择城市",$('#mod-addrlist'));
//                         loaging.close();
//                     }        
//                 },{enableHighAccuracy: true})
//             }       
//         function handleSuccess(position){ 
//             var lng = position.coords.longitude; 
//             var lat = position.coords.latitude;                                                                                    
//             // 百度地图API功能
//             //GPS坐标
//             var x = lng.toFixed(6);
//             var y = lat.toFixed(6);
//             var ggPoint = new BMap.Point(x,y);
//             console.log(x+'----------------------------'+y);
//             //坐标转换完之后的回调函数
//             translateCallback = function (data){
//                 if(data.status === 0) {
//                   var marker = new BMap.Marker(data.points[0]);
//                     var s=data.points[0].lng;
//                     var k=data.points[0].lat;
//                         var point = new BMap.Point(s,k);
//                         console.log(s+'----------------------------'+k);
//                         var geoc = new BMap.Geocoder();        
//                         geoc.getLocation(point, function(rs){
//                             if(rs){
//                                  setTimeout(function(){
//                                     var addComp = rs.addressComponents;
//                                     //addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
//                                   loaging.close();//addComp.city + addComp.district+addComp.street
//                                   $('.list-main-one-html .positioning_address').html(addComp.district+addComp.street+'附近');
//                                   setTimeout(function(){
//                                     $('.mod-mask').hide();
//                                     $('#mod-box').show();
//                                   },500)
//                               },10);
//                         }
                           
//                         }); 
//                   }
//                 }
//                 setTimeout(function(){
//                     var convertor = new BMap.Convertor();
//                     var pointArr = [];
//                     pointArr.push(ggPoint);
//                     convertor.translate(pointArr, 1, 5, translateCallback);
//                 }, 1000);
//             } 
//             function handleError(error){ 
//                 switch(error.code)
//                     {
//                     case error.PERMISSION_DENIED:
//                       loaging.close();
//                       loaging.Alert("请打开您的定位系统","点击确定手动添加地址","#mod-box");
//                       break;
//                     case error.POSITION_UNAVAILABLE:
//                       loaging.close();
//                       loaging.Alert("暂时获取不到您的地点信息","点击确定手动添加地址","#mod-box");

//                       break;
//                     case error.TIMEOUT:
//                       loaging.close();
//                       loaging.Alert("连接超时","点击确定手动添加地址","#mod-box");
//                       break;
//                     case error.UNKNOWN_ERROR:
//                       loaging.close();
//                       loaging.Alert("发生了位置错误","点击确定手动添加地址","#mod-box");
//                       break;
//                     }
//         } 
//     }
    // this.address_search=function(){
    //       // 百度地图API功能
    //       function G(id) {
    //         return document.getElementById(id);
    //       }
    //       var map = new BMap.Map("allmap");
    //       map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。

    //       var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
    //         {"input" : "suggestId"
    //         ,"location" : map
    //       });

    //       ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    //       var str = "";
    //         var _value = e.fromitem.value;
    //         var value = "";
    //         if (e.fromitem.index > -1) {
    //           value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //         }    
    //         str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
            
    //         value = "";
    //         if (e.toitem.index > -1) {
    //           _value = e.toitem.value;
    //           value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //         }    
    //         str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
    //         G("search-suggestion-dropdown").innerHTML = str;
    //       });

    //       var myValue;
    //       ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
    //       var _value = e.item.value;
    //       myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    //         G("search-suggestion-dropdown").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
            
    //       var JSONP=document.createElement("script");  
    //         JSONP.type="text/javascript";  
    //         JSONP.src='http://api.map.baidu.com/geocoder/v2/?address='+myValue+'&output=json&ak=wqBXfIN3HkpM1AHKWujjCdsi&callback=showLocation';  
    //         document.getElementsByTagName("head")[0].appendChild(JSONP); 
            
    //       });
    // }
 }
function showLocation(types){
  var location = types.result.location;
  console.log(location.lng+'---------------'+location.lat);
}
var common=new Common();