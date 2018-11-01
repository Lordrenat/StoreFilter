$(document).ready(function() {
		$("nav a").click(function() {
			$("nav a").removeClass('active');
			$(this).addClass('active');
			});
		
		function iHd() {
			if ($('.def').has('.act1')){
			$('.act1 i').hide();
			}}
	iHd();
	$('.def').click(function() {
		$('.def').removeClass('act1');
		$(this).addClass('act1');
		$('.def i').show();
		iHd();
		});
		
	$('#topics').click( function() {
		if ($('#check').is(':hidden')) {
			$('#check').css('display','block');
			$('#topics i').css('transform','rotate(-180deg)');
			} else {
				$('#check').css('display','none');
				$('#topics i').css('transform','none');
				$('.products').css('display','none');
				if ($('#chkbox1').is(':checked')){
					$('.programming').css('display','block');
					}
				if ($('#chkbox2').is(':checked')){
					$('.design').css('display','block');
					}
				if ($('#chkbox3').is(':checked')){
					$('.web').css('display','block');
					}
				if ($('#chkbox4').is(':checked')){
					$('.mobile').css('display','block');
					}
				if ($('#chkbox5').is(':checked')){
					$('.process').css('display','block');
					}
			}
		});
});