(function(){
var calendarDiv = $("<div class='calender-container'><div class='calender'><iframe id='viewer' src='https://calendar.google.com/calendar/embed?showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=d9eau9ssmquv1homev69k0a230%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FChicago'></iframe></div></div>");
										

	
	$('body').append(calendarDiv);
	
	$('.upcoming').on('click',function(){
		$('.calender').fadeIn(800);
		});

 	$('.calender').on('click',function(){
		$(this).fadeOut(800);
		});
})($);