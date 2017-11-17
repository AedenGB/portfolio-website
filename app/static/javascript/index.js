$(document).ready(function(){
    $('html').hide();
    $('html').fadeIn(1000);
    $('#theme-button').on( "click", function(){
      if($('#menu-bar').css('background-color')==="rgb(17, 17, 17)"){
        $('#theme-button').text("Dark Theme");
        $('#menu-bar').css('background',"white");
        $('html').css('background',"white");
        $('.text').css('color',"black");
        $('.links').css('color',"black");
        $('#title').css("color","blue");
        $('.member-profile').css("box-shadow","4px 4px 3px #999");
        $('#contact-popup').css("background","rgb(254,254,254)");
        $('#contact-popup').css("box-shadow","6px 6px 4px #999");
        $('.member-profile').css("background","lightGrey");
        $('.awards').css("box-shadow","6px 6px 4px #999");
        $('.awards').css("background","lightGrey");
        if($(window).scrollTop()>15){
          $('#menu-bar').css('box-shadow',"0 2px 2px #999");
        }
      }
      else{
        $('.awards').css("background","grey");
        $('#theme-button').text("Light Theme");
        $('#menu-bar').css('background',"#111");
        $('html').css('background',"#111");
        $('.text').css('color',"white");
        $('.links').css('color',"white");
        $('#title').css("color","blue");
        $('.member-profile').css("box-shadow","4px 4px 3px #666");
        $('.member-profile').css("box-shadow","0 0 0");
        $('#contact-popup').css("background","#222");
        $('#contact-popup').css("box-shadow","0 0 0 #000");
        $('.awards').css("box-shadow","0 0 0 #000");
        $('.member-profile').css("background","#666");
        $('.awards').css("background","grey");
        if($(window).scrollTop()>15){
          $('#menu-bar').css('box-shadow',"0 2px 6px #666");
        }
      }
    });
    //prevents one from opening and then other immediately closing
    var go = true;
    $("#contact-us").on( "click", function(){
      if($("#contact-popup").css("visibility")==="collapse"&&go){
        $("html:not(#contact-popup)").css("opacity","0.5");
        $("#contact-popup").css("visibility","visible");
        $("#grey").css("visibility","visible");
        go = false;
        return;
      }
      go = true;
    });

    $("html:not(#contact-popup)").on( "click", function(){
      if($("#contact-popup").css("visibility")==="visible"&&go){
        $("html:not(#contact-popup)").css("opacity","1");
        $("#contact-popup").css("visibility","collapse");
        $("#grey").css("visibility","collapse");
        return;
      }
      go = true;
    });
});


$(window).scroll(function() {
    if($(window).scrollTop()>15){
      $('#menu-bar').css('transition',"0.5s");
      if($('#menu-bar').css('background-color')==="rgb(17, 17, 17)"){
        $('#menu-bar').css('box-shadow',"0 2px 6px #666");
      }
      else{
        $('#menu-bar').css('box-shadow',"0 2px 7px #999");
      }
    }
    else{
      $('#menu-bar').css('box-shadow',"0 0");
    }
});
$(".links").hover(function() {
    $(".links").css("color","yellow")
});
