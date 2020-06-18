// Get last commits of the branches
var xmlhttplc = new XMLHttpRequest();
xmlhttplc.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var SerJSONLC = JSON.parse(this.responseText);
		for (var jsarrayn of SerJSONLC) {
			if (jsarrayn.name == "master") {
				document.getElementById("lcm").innerHTML = "Last commit: " + jsarrayn.commit.sha.substring(0, 7);
			}
		}
	}
};
xmlhttplc.open("GET", "https://api.github.com/repos/sm64-port/sm64-port/branches", true);
xmlhttplc.send();