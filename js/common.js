/**
 * Created by Administrator on 2016/5/16.
 */
$(function(){
    $(".nav").find("li").mouseenter(function(){
        $(this).find("span").addClass("span-width-add");
        $(this).find("span").removeClass("span-width-down");
    })
    $(".nav").find("li").mouseleave(function(){
        $(this).find("span").addClass("span-width-down");
        $(this).find("span").removeClass("span-width-add");
    })
    })