$(document).ready(function(){
		//scrolldown
		$('.scrollDown').click(function () {
			event.preventDefault();
			$("html,body").animate({
				
			  scrollTop: $("#choose").offset().top - 150
			}, 500);
		  })
	$('.choose_currency >li').click(function(){
		var tab_id = $(this).attr('data-tab');
        $('.num').removeClass('current');
		$('.result-content').removeClass('current');
		$('.choose_currency >li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
    //試算結果
    $('.num').click(function(){
		var tab_id_2 = $(this).attr('data-tab-2');

		$('.num').removeClass('current');
		$('.result-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id_2).addClass('current');
	})
})