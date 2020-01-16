$(document).ready(function(){
  $('html').hide();
  $('html').fadeIn(1000);

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
    if(viewport_width<600){//will title be one or two lines
      $("#title-linebreak").html("<br>");//add linebreak
      $("#title").css("font-size", (viewport_width-10)*0.095);
    }
    else{
      $("#title-linebreak").html("");//no linebreak
      $("#title").css("font-size", (viewport_width)*0.049);
    }

    var normal_menu_link_width = 220;

    if(viewport_width>normal_menu_link_width*6){//all menu links inline with eachother
      $(".menu-link-container").css("width", (viewport_width-10)/6);
    }
    else if(viewport_width>normal_menu_link_width*3){//two rows of 3
      $(".menu-link-container").css("width", (viewport_width-10)/3);
    }
    else{//3 rows of 2
      $(".menu-link-container").css("width", (viewport_width-10)/2);
    }

    $("#body-text").css("font-size", viewport_width*0.0022+14);//set text font size
    $(".heading").css("font-size", viewport_width*0.0045+17);//set heading font size

    var menu_height = $("#menu-bar").height();//based on height of elements in menu bar, adjust scroll characteristics
    $("#body-text").css("padding-top", menu_height-10);
    $(".anchor").css("top",-menu_height);

    limit_element_size_to(".width-controlled", 700, 10, window);//all body text width controlled elements
    limit_element_size_to("#contact-popup", 400, 10, window);//contact popup width limit

    $("#resume").css("height", $("#resume").width()*11/8.5);//set aspect ratio for pdf
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
