$(document).ready(function(){
  // весь ваш код
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

$('.tab_content').eq(0).show();
  $('.tabs li').on('click', function() { 
$(this).addClass('active') 
.siblings() 
.removeClass('active'); 

var activeId = $(this).attr('rel'); 
var activePanel = $('#' + activeId); 

var othersPanel = activePanel.siblings(); 

othersPanel.hide(); 
activePanel 
.addClass('d_active') 
.fadeIn(); 


});

  $('.accordion dd').hide(); 
  $('.accordion dd:eq(0)').show(); 

  $('dt a').on('click', switchTab); 

  function switchTab(event){ 
  event.preventDefault();

  $('dt a').removeClass('prices-filial--active');
  var ActiveId = $(this); 
  ActiveId.addClass('prices-filial--active');
  // var OtherId = ActiveId.siblings('dt');
  // OtherId.removeClass('prices-filial--active');


  var ActiveText = ActiveId.parent().next(); 
  var OtherText = ActiveText.siblings('dd'); 

  ActiveText.show(); 
  OtherText.hide(); 

  }; 
  
});

