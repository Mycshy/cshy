
/**
 *菜单展开或收起
 *@author:weiqingyu
 *@version:2015/5/29
*/
function menuOpenOrClose(){
    if($(this).attr("class")=="menu-close"){
        /*若菜单关闭，展开子菜单*/
        $(this).attr("class","menu-open")//切换菜单类名，类名用于标记菜单展开或收起状态
        .next().slideDown();//展开子菜单
    }else{
        $(this).attr("class","menu-close")//切换菜单类名，类名用于标记菜单展开或收起状态
        .next().slideUp();//收起子菜单
    }
}
/**
 *根据屏幕设置中部container最小高度
 *@author:weiqingyu
 *@version:2015/5/29
*/
function setMinHeight(){
    var height=window.screen.height;//height:屏幕高度
    var min_h=height-60-20;//60:头部高度 20:container外边距离
    $("#container").css("min-height",min_h+'px');
}   
$(document).ready(function(){
    setMinHeight();//根据屏幕设置中部container最小高度
    $("#container").on("click",".menu-close,.menu-open",menuOpenOrClose);
});