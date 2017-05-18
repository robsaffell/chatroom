$(document).ready(function() {
	$("#close").click(function(){
		window.close();
	});

	$("#text").submit(function() {
		$("box").reset();
	});

	$("#pics").click(function() {
		$("#popup").toggle();
	});
});
