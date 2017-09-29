$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	newPage();

	timer();

});

$("body").on("click", ".answer", function(event){
	
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] ;
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] ;
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] ;
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}
function newPage() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}



function wait() {
	if (questionCounter < 9) {
	questionCounter++;
	newPage();
	counter = 10;
	timer();
	}
	else {
		finalScreen();
	}
}

function timer() {
	theClock = setInterval(tenSeconds, 1000);
	function tenSeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 10;
	newPage();
	timer();
}

var startScreen;
var gameHTML;
var counter = 10;
var questionArray = ["What is Batman's secret identity?", "Which villain broke Batman's back?", "What is Bruce's parent's names?", "Who did Batman have a child with? (Damien Wayne)", "What is Two-Face's real name?", "Which Villain lost his wife Nora to a terminal illness?", "Who killed Robin (2nd Robin 'Jason Todd')?", "Which character later became 'Oracle'?", "What is the Penguin's real name?", "Who voiced Batman in 7 different series?"];
var answerArray = [["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"], ["Calendar Man","Bane","Victor Zsasz","Man-Bat"], ["Rick and Morty Wayne","Eric and Donna Wayne","Thomas and Martha Wayne","Marshall and Lily Wayne"], ["Catwoman", "Poison Ivy", "Talia Al' Ghul", "Harley Quinn"], ["Bill Finger","Edward Nygma","Soloman Grundy","Harvey Dent"], ["Mr. Freeze", "Penguin", "Clayface", "The Mad Hatter"], ["The Riddler","The Joker","Black Mask","Deadshot"], ["Catwoman", "Harley Quinn", "Poison Ivy", "Batgirl"], ["Edward Nygma", "Lucius Fox", "Oswald Cobblepot", "Albert Pennyworth"], ["Mark Hamill", "Kevin Conroy", "Bill Finger", "Bob Kane"]];
var correctAnswers = ["A. Bruce Wayne", "B. Bane", "C. Thomas and Martha Wayne", "C. Talia Al' Ghul", "D. Harvey Dent", "A. Mr. Freeze", "B. The Joker", "D. Batgirl", "C. Oswald Cobblepot", "B. Kevin Conroy"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
