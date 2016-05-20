/**
 * Created by Administrator on 2016/5/16.
 */
$(function(){
    $(".bp-tag-list>li:first").addClass("bp-tag-list-active").find("span").show();;
    $(".bp-tag-list").find("li").mouseenter(function(){
        $(this).addClass("bp-tag-list-active");
    })
    $(".bp-tag-list").find("li").mouseleave(function(){

        $(this).removeClass("bp-tag-list-active");
    })
})