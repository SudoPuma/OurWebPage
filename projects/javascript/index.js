var createdTime = Date.now(), clickedTime, reactionTime;
var box = document.getElementById("box");
var boxHeight = box.clientHeight, boxWidth = box.clientWidth;

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split("");
	var color = "#";
	for (var i = 0; i < 6; ++i) {
			color += letters[Math.round(Math.random() * 15)];
	}

	return color;
}

function makeBox() {
	var time = Math.floor((Math.random() * 1000));
	time *= 5;

	setTimeout(function() {
		if (Math.random() > 0.5) {
			box.style.borderRadius = "100px";
		} else {
			box.style.borderRadius = "0";
		}

		var topMargin = Math.abs(Math.round((Math.random() * window.innerHeight) - 1) - boxHeight);
		var leftMargin = Math.abs(Math.round((Math.random() * window.innerWidth) - 1) - boxWidth);

		box.style.marginLeft = leftMargin + "px";
		box.style.marginTop = topMargin + "px";
					
		box.style.display = "block";
		box.style.backgroundColor = getRandomColor();

		createdTime = Date.now();
	}, time);

}

box.onclick=function() {
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime) / 1000;
				
	document.getElementById("time").innerHTML = reactionTime + 's';

	box.style.display = "none";
	makeBox();
};