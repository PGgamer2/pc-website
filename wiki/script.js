// Custom pointer cursor
var pelms = document.getElementsByTagName("*");
for(var i = 0; i < pelms.length; i ++) {
    if(window.getComputedStyle(pelms[i]).cursor == "pointer") {
        pelms[i].style.cursor = "url(/img/cursorpointer.png)";
    }
}
// Get pages in this folder and show them up
var listDiv = document.getElementById("wikilist");
var xmlhttpgp = new XMLHttpRequest();
xmlhttpgp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var SerJSONFL = JSON.parse(this.responseText);
		for (var jsarrayfl of SerJSONFL) {
			if (jsarrayfl.name.includes('.md') && jsarrayfl.name != "index.md") {
				var objNextLine = document.createElement("br");
				var objBtn = document.createElement("button");
				objBtn.appendChild(document.createTextNode(jsarrayfl.name.replace('.md','')));
				objBtn.classList.add("wikibtn");
				objBtn.onclick = function() { window.location.href = this.innerHTML + '.md'; };
				listDiv.appendChild(objNextLine);
				listDiv.appendChild(objBtn);
			}
		}
	}
};
xmlhttpgp.open("GET", "https://api.github.com/repos/Team-Refresh/pc-website/contents/wiki", true);
xmlhttpgp.onerror = function () {
	console.log("An error has occurred");
	var objTxt = document.createElement("a");
	var objNextLine = document.createElement("br");
	objTxt.appendChild(document.createTextNode("Oops! Something went wrong..."));
	listDiv.appendChild(objNextLine);
	listDiv.appendChild(objTxt);
};
xmlhttpgp.send();