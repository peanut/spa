var progress = document.getElementById("progress");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reload = document.getElementById("reload");
var timer = 0;

start.onclick = function() {
	if (timer === 0) {
		timer = window.setInterval(function() {
			console.log(progress.value);
			if (progress.value === 100) {
				alert("任务完成!");
				clearInterval(timer);
			} else {
				progress.value++;
			}
		}, 100);
	}
}

pause.onclick = function() {
	if (timer) {
		clearInterval(timer);
		timer = 0;
	}
}

reload.onclick = function() {
	if (timer) {
		clearInterval(timer);
	}
	progress.value = 0;
	timer = 0;
}