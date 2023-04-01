var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow video");
	video.playbackRate *= .90;
	console.log("new speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= .90;
	console.log("new speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime === video.duration) {
		console.log("Duration exceeded");
		video.currentTime = 0;
	}
	console.log("Current location is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML == "Mute") {
		console.log("Mute Video");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else {
		console.log("Unmute Video");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
});


document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume change")
	video.volume = document.querySelector("#slider").value / 100
	console.log("Volume is", video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school video")
	document.querySelector("video").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original video")
	document.querySelector("video").classList.remove("oldSchool")
});

