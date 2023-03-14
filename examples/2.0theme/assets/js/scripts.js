$(function() {
	const demoUrl = "demos/ex1/index.html";

	function loadDemo(url) {
		

		$.ajax({
			url,
			cache: false,
			dataType: "html",
			success: function(data) {
				$("#Demo").html(data);

				setTimeout(function() {
				  	if ($('.htContextMenu').length) {
				    	$('body').addClass('theme--default');
				  	}
				}, 100);

				$('.switch.dm input').change(function() {
				 	if ($(this).is(':checked')) {
				    	$('.theme--default').removeClass('theme--default').addClass('theme--dark');
				  	} else {
				    	$('.theme--dark').removeClass('theme--dark').addClass('theme--default');
				  	}
				});
			}
		});
	}

	// load the initial demo
	loadDemo(demoUrl);

	// handle clicks on demo buttons
	$('aside nav button').on('click', function() {
		const src = $(this).data('src');
		const url = `demos/${src}/index.html`;

		$('aside nav button').removeClass();
		$(this).addClass('Active');
		console.log('Demo:', src);
	loadDemo(url);
	});
});