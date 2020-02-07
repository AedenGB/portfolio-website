$(document).ready(function(){
  $('html').hide();
  $('html').fadeIn(1000);
  $('#menu-bar').css("background", "rgba(256,256,256,0)");

  $.localScroll({
     target:'body',
     duration: 900
  });

  function limit_element_size_to(element, max_width, padding, parent) {
    var parent_width = $(parent).width();
    if(parent_width<max_width+(padding*2)){
      $(element).css("width",parent_width-(padding*2));
    }
    else{
      $(element).css("width",max_width);
    }
  }

  function adjust_for_window_size() {
    var viewport_width = $(window).width();
    var viewport_height = $(window).height();

    $("html").css("font-size", viewport_width*0.0022+14);//set main font size, mostly for body-content
    $(".heading").css("font-size", viewport_width*0.0045+15);//set heading font size
    $("#home-icon").css("height", viewport_width*0.0045+15);
    $(".subheading").css("font-size", viewport_width*0.004+14);//set subheading font size

    var menu_height = $("#menu-bar").height();//based on height of elements in menu bar, adjust scroll characteristics
    $(".anchor").css("top",-menu_height-10);

    limit_element_size_to(".width-controlled", 700, 10, window);//all body text width controlled elements
    limit_element_size_to("#contact-popup", 400, 10, window);//contact popup width limit

    $("#resume").css("height", $("#resume").width()*11/8.5);//set aspect ratio for pdf
  };

  adjust_for_window_size();

  $(window).resize(adjust_for_window_size);

  $("#contact-button").on( "click", function(){//if contact us button pressed, open popup
      $("#contact-popup").css("max-width","400");
      $("#grey").css("visibility","visible");
      $("#grey").css("opacity","0.6");
      return;
  });

  $(".popup-closer").on( "click", function(){//if grey box clicked while popup open, close popup
    $("#contact-popup").css("max-width","0");
    $("#grey").css("visibility","collapse");
    $("#grey").css("opacity","0");
  });

  $(window).scroll(function() {
    var menu_height = $("#menu-bar").height();
    var bottom_of_element = $("#Homepage-Section").offset().top + $("#Homepage-Section").outerHeight();
    var top_of_screen = $(window).scrollTop();

    if (top_of_screen < bottom_of_element-menu_height*6){
      $('#menu-bar, .dropdown-container').css('box-shadow',"0 0");
      $('#menu-bar, .dropdown-container').css('background',"rgba(256,256,256,0.0)");
    } else {
      $('#menu-bar, .dropdown-container').css('transition',"0.2s");
      $('#menu-bar, .dropdown-container').css('box-shadow',"0 2px 6px #666");
      $('#menu-bar, .dropdown-container').css('background',"rgba(256,256,256,1)");
    }
});
});
