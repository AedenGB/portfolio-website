$(document).ready(function(){
    function lockScroll(e) {
      //alert(true.toString());

      //if(!(getElementById("all-awards-popup").matches(":hover"))){
      //e.preventDefault();
      //}
    }
    var setColors = function(){
      if(window.location.hash == "#light"){
        $('#theme-button').text("Dark Theme");
        $('#menu-bar').css('background',"white");
        $('html').css('background',"white");
        $('.text').css('color',"black");
        $('.links').css('color',"black");
        $('#title').css("color","blue");
        $('.member-profile').css("box-shadow","4px 4px 3px #999");
        $('#contact-popup').css("background","rgb(254,254,254)");
        $('#contact-popup').css("box-shadow","6px 6px 4px #999");
        $('#all-awards-popup').css("background","rgb(254,254,254)");
        $('#all-awards-popup').css("box-shadow","6px 6px 4px #999");
        $('.member-profile').css("background","lightGrey");
        $('.awards').css("box-shadow","6px 6px 4px #999");
        $('.awards').css("background","lightGrey");
        if($(window).scrollTop()>15){
          $('#menu-bar').css('box-shadow',"0 2px 2px #999");
        }
      }
      else{
        window.location.hash = "#dark"
        $('.awards').css("background","grey");
        $('#theme-button').text("Light Theme");
        $('#menu-bar').css('background',"#111");
        $('html').css('background',"#111");
        $('.text').css('color',"white");
        $('.links').css('color',"white");
        $('#title').css("color","blue");
        $('.member-profile').css("box-shadow","0 0 0");
        $('#contact-popup').css("background","#222");
        $('#contact-popup').css("box-shadow","0 0 0 #000");
        $('#all-awards-popup').css("background","#222");
        $('#all-awards-popup').css("box-shadow","0 0 0 #000");
        $('.awards').css("box-shadow","0 0 0 #000");
        $('.member-profile').css("background","#666");
        $('.awards').css("background","grey");
        if($(window).scrollTop()>15){
          $('#menu-bar').css('box-shadow',"0 2px 6px #666");
        }
      }
    }
    setColors();
    $('html').hide();
    $('html').fadeIn(1000);
    $('#theme-button').on( "click", function(){
      if(window.location.hash == "#dark"){
        window.location.hash = "#light";
      }
      else{
        window.location.hash = "#dark"
      }
      setColors();
    });

    $("#contact-us").on( "click", function(){//if contact us button pressed, open popup
        $("#contact-popup").css("visibility","visible");
        $("#grey").css("visibility","visible");
        $('html').bind('mousewheel touchmove', lockScroll);
        //$("body").css("overflow", "hidden");
        //$("body").css("position, fixed")
        $("body").css("opacity","0.5");
        return;
    });

    $("#all-awards").on( "click", function(){//if all awards button pressed, open popup
        $("#all-awards-popup").css("visibility","visible");
        $("#grey").css("visibility","visible");
        $('body').bind('mousewheel touchmove', lockScroll);
        //$("body").css("overflow", "hidden");
        //$("body").css("position, fixed")
        $("body").css("opacity","0.5");
        return;
    });

    $("#grey").on( "click", function(){//if grey box clicked while popup open, close popup
      if($("#contact-popup").css("visibility")==="visible"){
        $("body").css("opacity","1");
        $('html').unbind('mousewheel touchmove', lockScroll);
        //$("body").css("overflow", "visible");
        //$("body").css("position, static")
        $("#contact-popup").css("visibility","collapse");
        $("#grey").css("visibility","collapse");
        return;
      }
      if($("#all-awards-popup").css("visibility")==="visible"){
        $("body").css("opacity","1");
        $('body').unbind('mousewheel touchmove', lockScroll);
        //$("body").css("overflow", "visible");
        //$("body").css("position, static")
        $("#all-awards-popup").css("visibility","collapse");
        $("#grey").css("visibility","collapse");
        return;
      }
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
