$(document).ready(function(){window.location.hash&&($(location.hash).addClass("active").removeClass("inactive"),$(location.hash).siblings().addClass("inactive"),$("html,body").animate({scrollTop:$(location.hash).offset().top-60})),$(document).keyup(function(a){27===a.keyCode&&($(".inactive").removeClass("inactive"),$(".active").removeClass("active"),window.location.hash="all"),39===a.keyCode&&($(".active").removeClass("active").addClass("inactive").next().removeClass("inactive").addClass("active"),$("html,body").animate({scrollTop:$(".active").offset().top-60}),setTimeout(function(){window.location.hash=$(".active").attr("id")},100)),37===a.keyCode&&($(".active").removeClass("active").addClass("inactive").prev().removeClass("inactive").addClass("active"),$("html,body").animate({scrollTop:$(".active").offset().top-60}),setTimeout(function(){window.location.hash=$(".active").attr("id")},100))}),$(".woman > a").click(function(a){a.preventDefault(),$(this).parent(".woman").hasClass("active")?($(this).parent(".woman").removeClass("active"),$(this).parent(".woman").siblings().removeClass("inactive"),setTimeout(function(){window.location.hash="all"},500)):($(this).parent(".woman").siblings().removeClass("active").removeClass("semi-active"),$(this).parent(".woman").removeClass("active").removeClass("inactive").removeClass("semi-active").addClass("active"),$(this).parent(".woman").siblings().removeClass("inactive").addClass("inactive")),$("html,body").animate({scrollTop:$(this).offset().top}),$(".active").click(function(a){a.stopPropagation()}),$(function(){$(document).click(function(){$(".inactive").removeClass("inactive"),$(".active").removeClass("active"),window.location.hash="all"})})}),$(document).on({mouseenter:function(){$(this).addClass("semi-active"),$(this).siblings().addClass("semi-active"),$(".active").removeClass("semi-active")},mouseleave:function(){$(this).removeClass("semi-active"),$(this).siblings().removeClass("semi-active")}},".inactive")});