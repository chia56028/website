$(function(){
	$('.bar').each(function(){
		$(this).animate({width: $(this).attr('data-percent')},2000);
	});
});
