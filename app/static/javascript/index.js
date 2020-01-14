$(document).ready(function(){
  $('html').hide();
  $('html').fadeIn(1000);

  $.localScroll({
     target:'body',
     duration: 900
  });

  function adjust_for_window_size() {
    var height = $("#menu-bar").height();
    $("#body-text").css("top", height-10);
    $(".anchor").css("top",-height);
  };

  adjust_for_window_size();

  $(window).resize(adjust_for_window_size);

  $("#contact-button").on( "click", function(){//if contact us button pressed, open popup
      $("#contact-popup").css("visibility","visible");
      $("#grey").css("visibility","visible");
      return;
  });

  $(".popup-closer").on( "click", function(){//if grey box clicked while popup open, close popup
    if($("#contact-popup").css("visibility")==="visible"){
      $("#contact-popup").css("visibility","collapse");
      $("#grey").css("visibility","collapse");
      return;
    }
  });
});


$(window).scroll(function() {
  if($(window).scrollTop()>15){
    $('#menu-bar').css('transition',"0.5s");
    $('#menu-bar').css('box-shadow',"0 2px 6px #666");
  }
  else{
    $('#menu-bar').css('box-shadow',"0 0");
  }
});
