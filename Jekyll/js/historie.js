/*
    FILE NAME: js/historie.js
	WRITTEN BY: Liam Svanåsbakken Crouch
	WHEN: November 2017
	PURPOSE: Populate and render timeline graph
*/
//Entry structure used for list below
function HistoryEntry(year, title, description) {
	this.year = year;
	this.title = title;
	this.description = description;
}

var student_history = [
	new HistoryEntry(1920, "Studentpartiet er stiftet", "Studentpartiet blir stiftet, etter klager fra studenter om at de ikke ble hørt. Blant sakene som betydde noe første året var mangel på snille studasser, og professorer som ikke lot seg smiske med epler."),
	new HistoryEntry(1925, "Studentpartiet får sin første lov passert", "Etter mye klaging og smisking med politiske foreldre fikk studentpartiet gjennomført sitt første lovforslag: Gratis kaffe på mandager"),
	new HistoryEntry(1950, "Flytter inn i nytt kontor", "Studentpartiet feirer 30 suksessrike år med nytt kontor, som vi enda bruker i dag! Snakk om minner!"),
	new HistoryEntry(1960, "Første klesparty", "Vi arrangerer vårt første klesparty, hvor studentene konkurrerer i å kle seg så rart som mulig. Dette fortsatte som en tradisjon vi har den dag i dag."),
	new HistoryEntry(1965, "Lorem ipsum", "Etiam cursus eros sed molestie cursus. Mauris tempus vitae nisi eu fringilla. Vivamus vehicula nibh in pulvinar semper. Nam metus purus, rutrum sit amet nisl quis, posuere pulvinar urna."),
	new HistoryEntry(1970, "Studentpartiet feirer 50års-jubileum", "Studentpartiet feirer 70 suksessrike år med kverulering, med en gedigen fest hvor alle var invitert. De får enda ikke lov til å leie lokalet som ble brukt på nytt."),
	new HistoryEntry(1999, "Studentpartiet digitaliseres", "Studentpartiet, i en \"jeg og\" refleks, skaffer seg en \"sånn derre internettside\", som de kalte det på den tiden."),
];

lastStates = [];

var isMobile = window.innerWidth < 800;
console.log("[mobileDetect]: " + isMobile);
//Make 100% sure there DOM is populated, in case some browser is dumb. Not supported by IE8.
document.addEventListener("DOMContentLoaded", function(event) { 
	//Populate content
	initialPopulate();
	//Animations are disabled on mobile
	if(isMobile)
		return;
	//Remember which timeline elements are gone, move those that are gone to their proper position
	for(var i = 0; i < student_history.length; i++) {
		element = document.getElementById("timeline"+i);
		bb = element.getBoundingClientRect();
		if(bb.bottom>document.documentElement.clientHeight) {
			lastStates.push(true);
			element.style.left = i%2==0?"-100%":"150%";
		} else {
			lastStates.push(false);
		}
	}
	console.log(lastStates);
});

/*
	Called once, populates the page with data from the list
*/

const vGap = 200;
function initialPopulate() {
	var whatsnext = "<div class='whatsnext' style='top: " + (vGap*(student_history.length+1)+150) + "px'><div class='whatsnextInner' ><h1>Hva er å vente?</h1><p>Mye spennende kverulering</p><p>100-års jubileum i 2020</p></div></div>";
	var buildStr = "<h1>Vår historie</h1><p></p></div><div id='timelineDivider' style='height: " + (vGap*(student_history.length+1)) + "px'></div><div class='footerPusher' style='height: " + ((student_history.length+2)*vGap) + "px;'>" + whatsnext;
	for(var i = 0; i < student_history.length; i++) {
		buildStr += '<div id="timeline' + i + '" class="timelineElement ' + (i%2==0?"timelineLeft":"timelineRight") + '" style="top: ' + ((vGap*i)+100) + 'px; left: ' + (i%2==0?"0":"50") + '%"><div class="timelineInner">';

		buildStr += "<h1>" + student_history[i].year + "</h1>";
		buildStr += "<h2>" + student_history[i].title + "</h2>";
		buildStr += "<p>" + student_history[i].description + "</p>";

		buildStr += "</div></div>";
	}
	timelineObj = document.getElementById("timeline");
	timelineObj.innerHTML = buildStr;
}

/*
	This makes me feel dirty
*/
function scrollCallback(e) {
	console.log("Scroll callback");
	for(var i = 0; i < student_history.length; i++) {
		element = document.getElementById("timeline"+i);
		bb = element.getBoundingClientRect();
		console.log(bb.bottom);
		if(bb.bottom>document.documentElement.clientHeight) {
			if(!lastStates[i]) {
				animationEngine.animateElement(element, "left", i%2==0?-100:150, "%", 300);
				lastStates[i] = true;
			}
		} else {
			if(lastStates[i]) {
				animationEngine.animateElement(element, "left", i%2==0?0:50, "%", 300);
				lastStates[i] = false;
			}
		}
	}
}
if(!isMobile) {
	window.addEventListener('scroll', scrollCallback);
	window.addEventListener('touchmove', scrollCallback);
}

/*
	Vanilla JS animation engine, because "we gotta use javascript"

	Welcome to modern over-engineering, wednesdays at 9 on Discovery channel
*/
animationEngine = function() {
	var toReturn = {};

	//Private objects
	function AnimationTrack(element, cssProperty, goal, unit, time) {
		this.element = element;
		this.cssProperty = cssProperty;
		this.goal = goal;
		this.unit = unit;
		this.time = time;
		this.startPos = element.style[cssProperty].replace(unit, "");
		this.startTime = new Date().getTime();
	}

	//Private fields
	var animationTracks = [];
	var interval = null;
	const fps = 60;

	//Private functions
	function debugProgress(string, progress, title) {
		//ASCII progress bar with text ^^
		const width = 30;
		var strStart = Math.round(width/2-(string.length/2));
		var progressStr = "[";
		for(var i = 0; i < width; i++) {
			var progAt = i/width;
			if(i>=strStart && i < strStart+string.length) {
				progressStr += string.charAt(i-strStart);
			}
			else if(progAt<progress) {
				progressStr += "#";
			} else {
				progressStr += "-";
			}
		}
		console.log((title + "                   ").slice(15) + progressStr+"]");
	}
	// Lerp is such a funny name, don't you think?
	function lerp(progress, a, b) {
		return ((Number(b)-Number(a))*progress)+Number(a);
	}
	function animateFunc() {
		console.log("Animation called");
		var d = new Date();
		for(var i = 0; i < animationTracks.length; i++) {
			//Make sure the end-animation is clean
			if(animationTracks[i].startTime+animationTracks[i].time<=d.getTime()) {
				//console.log("Animation is done! Deleting it....");
				animationTracks[i].element.style[animationTracks[i].cssProperty] = animationTracks[i].goal+animationTracks[i].unit;
				animationTracks.splice(i, 1);
				i--; //As we are removing an element, we need to decrease i so the next isn't skipped
				updateCallbackFunc();
				continue;
			}
			//Not done, so lets interpolate time
			progress=(d.getTime()-animationTracks[i].startTime)/animationTracks[i].time;
			//console.log("Time: " + (d.getTime()-animationTracks[i].startTime));
			//console.log(lerp(progress, animationTracks[i].startPos, animationTracks[i].goal) + ", progress " + progress + ", startPos: " + animationTracks[i].startPos);
			var lerpVal = lerp(progress, animationTracks[i].startPos, animationTracks[i].goal);
			animationTracks[i].element.style[animationTracks[i].cssProperty] = lerpVal + animationTracks[i].unit;
			//debugProgress(animationTracks[i].startPos + " -> [" + lerpVal.toFixed(2) + "] -> "+animationTracks[i].goal , progress, animationTracks[i].element.id)
		}
	}
	function updateCallbackFunc() {
		console.log("Checking if we have to re-animate something");
		if(interval != null) {
			if(animationTracks.length==0) {
				clearInterval(interval);
				interval = null;
				console.log("Stopped animation timer");
			}
		} else {
			if (animationTracks.length != 0) {
				interval = setInterval(animateFunc, 1000/fps);
				console.log("Started animation timer");
			}
		}
	}

	toReturn.animateElement = function(element, property, goal, unit, time) {
		console.log("Creating new animation");
		for(var i = 0; i < animationTracks.length; i++) {
			if(animationTracks[i].element==element) {
				console.log("Trying to animate something that already is being animated. Setting new goal");
				//animationTracks[i].startPos = element.style[property].replace(unit, "");
				//return;
				animationTracks.splice(i, 1);
				break;
			}
		}
		//Completing this loop means there isn't an animation already. Cool
		animationTracks.push(new AnimationTrack(element, property, goal, unit, time));
		console.log("Registered new animation");
		updateCallbackFunc();
	}
	console.log("AnimationEngine 1.1 initialized");
	return toReturn;
}();