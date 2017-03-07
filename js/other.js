//DATE FUNCTIONS
$(function() {
	$("#QualDue").datepicker({ dateFormat: 'yy-mm-dd',gotoCurrent: true,showWeek: true });
});	
// <![CDATA[
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:960,height:320,opacity:1});

  // Radius Box
  $('div.infopost, p.infopost, div.img, img.fl').css({"border-radius":"4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
  //$('.menu_nav').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});

});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6', { hover: true });

$(function() {
		
		$( "#tags" ).autocomplete({
			//source: availableTags
			source: "scripts/autoCompleter.php"
		});
	});

// ]]>