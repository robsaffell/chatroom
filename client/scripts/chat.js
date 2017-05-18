$(document).ready(function() {
	$("#close").click(function(){
		window.close();
	});

	$("#text").submit(function() {
		$("box").reset();
		return false;
	});

	$("#pics").click(function() {
		$("#popup").toggle();
	});
});