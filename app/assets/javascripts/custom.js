$(document).ready(function(){

	//Speed at which a new slide appears
	$('#slide').hide().fadeIn(1000);

	/////////////////////////
	//Answer's to Questions//
	/////////////////////////

	//Slide 2 Questions
	$("#aDollarToday").click(function() {
		$('.modal').show();
		$('.modal_content').text('Sure who wouldn\'t');
	});

	$("#aDollarTomorrow").click(function() {
		$('.modal').show();
		$('.modal_content').text('That doesn\'t make much sense.');
	});

	$("#20today").click(function() {
		$('.modal').show();
		//$('.dumbBox').css("background-color","#FF2621");
		$('.modal_content').text('You didn\'t earn any interest.');
	});

	$("#25twoWeeks").click(function() {
		$('.modal').show();
		//$('.dumbBox').css("background-color","#40E50D");
		$('.modal_content').text('You just earned 25% interst on your money.');
	});

	//Slide 4 & Slide 7_1
	$("#Higher").click(function() {
		$('.modal').show();
		$('.modal_content').text('Correct');
	});

	$("#Lower").click(function() {
		$('.modal').show();
		$('.modal_content').text('Incorrect');
	});

	//Close Any Modal
	$('.close').click(function() {
		$('.dumbBox').css("background-color","#fff");
		$('.modal').hide();
	});

	//Feedback Modal//

	$('.feedbackButton').click(function() {
		$('#feedbackModal').show();
		console.log('dfkjsa');
	});

	$('.closeFeedbackModal').click(function() {
		$('.dumbBox').css("background-color","#fff");
		$('#feedbackModal').hide();
	});



	/////////////////////////////////
	//Helper Method to format money//
	/////////////////////////////////

	Number.prototype.formatMoney = function(c, d, t){
  	var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	};

});