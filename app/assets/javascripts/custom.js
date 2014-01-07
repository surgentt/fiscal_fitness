$(document).ready(function(){

	//Speed at which a new slide appears
	$('#slide').hide().fadeIn(1000);

	/////////////////////////
	//Answer's to Questions//
	/////////////////////////

	//Slide 2 Questions
	
	$("#aDollarToday").click(function() {
		$('.modal_content').text('Sure who wouldn\'t');
	});

	$("#aDollarTomorrow").click(function() {
		$('.modal_content').text('A dollar today is better and I\'m going to show you why.');
	});

	$("#20today").click(function() {
		//$('.dumbBox').css("background-color","#FF2621");
		$('.modal_content').text('Incorrect: You didn\'t earn any interest.');
	});

	$("#25twoWeeks").click(function() {
		//$('.dumbBox').css("background-color","#40E50D");
		$('.modal_content').text('That is Correct: You just earned 25% interst on your money.');
	});

	//Slide 4 & Slide 7_1
	$("#Higher").click(function() {
		$('.modal_content').text('Correct');
	});

	$("#Lower").click(function() {
		$('.modal_content').text('Incorrect');
	});

	//Close Any Modal
	$('.closeModal').click(function() {
		$('.dumbBox').css("background-color","#fff");
		$('.modal').hide();
	});

	//Feedback Modal//

	//This method of clicking function seems better
	$('.feedbackButton').on('click', function() {
		$('#feedbackModal').show();
	});

	$('.closeFeedbackModal').on('click', function() {
		$('.dumbBox').css("background-color","#fff");
		$('#feedbackModal').hide();
	});


	// Tool Tips to Provide Additional Information

	$('.tipSavings').tooltip({'trigger':'focus', 'placement': 'right', 'title': 'How much do you think you can reasonably save per month?' });

	$('.tipLength').tooltip({'trigger':'focus', 'placement': 'right', 'title': 'How many years will you make those montly investments?' });

	$('.tipInterset').tooltip({'trigger':'focus', 'placement': 'right', 'title': 'What Interest Rate can you earn on an Annual Percnetage Rate (APR)?' });


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