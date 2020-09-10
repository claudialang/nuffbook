var selectMenu = document.getElementById("selectMenu");
	
function hamburgClick(){
	console.log(selectMenu.style.display);
	if (selectMenu.classList.contains("hidden")) {
		console.log(selectMenu);
		selectMenu.classList.remove("hidden");
	} else {
		selectMenu.classList.add("hidden");
	}
}

var hasenWahl = document.getElementById("hasenWahl");
	
function hasenMenuClick(){
	console.log(hasenWahl.style.display);
	if (hasenWahl.classList.contains("hidden")) {
		console.log(hasenWahl);
		hasenWahl.classList.remove("hidden");
	} else {
		hasenWahl.classList.add("hidden");
	}
}

/**
 * Formular 
 */
var neuerHaseKnopf = document.getElementById("neuerHaseKnopf");
if (neuerHaseKnopf) {
	neuerHaseKnopf.onclick = function() {
        // Object neuerHase
		let neuerHase = {};
		neuerHase.name = document.getElementById("name").value;
		neuerHase.alter = document.getElementById("geboren").value;
		neuerHase.geschlecht = document.getElementById("geschlecht").value;
		neuerHase.kastriert = document.getElementById("kastriert").value;
		neuerHase.rasse = document.getElementById("rasse").value;
		neuerHase.farbe = document.getElementById("farbe").value;
		neuerHase.imBesitz = document.getElementById("besitz").value;
		neuerHase.mutter = document.getElementById("mutter").value;
		neuerHase.mutterRasse = document.getElementById("mRasse").value;
		neuerHase.vater = document.getElementById("vater").value;
		neuerHase.vaterRasse = document.getElementById("vRasse").value;
		neuerHase.fotoFront = document.getElementById("front").value;
		neuerHase.fotoRucken = document.getElementById("rucken").value;
		neuerHase.fotoLinks = document.getElementById("links").value;
		neuerHase.fotoRechts = document.getElementById("rechts").value;
		console.log(neuerHase);
	}
}
var HasenListe = [
    // Erster Hase.
    {
    	alter: "2020-02",
		farbe: "braunweis",
		fotoFront: "",
		fotoLinks: "",
		fotoRechts: "",
		fotoRucken: "",
		geschlecht: "weiblich",
		imBesitz: "2020-07",
		kastriert: "unkastriert",
		mutter: "nb",
		mutterRasse: "Riesenschecke",
		name: "Dagmar Hase",
		rasse: "Riesenschecke",
		vater: "nb",
		vaterRasse: "Riesenschecke",
    },
	// Zweiter Hase
    {
    	alter: "2020-03",
		farbe: "braun",
		fotoFront: "",
		fotoLinks: "",
		fotoRechts: "",
		fotoRucken: "",
		geschlecht: "männlich",
		imBesitz: "2020-05",
		kastriert: "unkastriert",
		mutter: "nb",
		mutterRasse: "DeutscherWidder",
		name: "Herr Mann",
		rasse: "DeutscherWidder",
		vater: "nb",
		vaterRasse: "DeutscherWidder",
    },
    
];
document.getElementById("nameHase").innerHTML = HasenListe[0].name;    


var fertigWurf = document.getElementById("neuerWurfKnopf");
if (fertigWurf) {
	fertigWurf.onclick = function(){
		console.log(fertigWurf);
		var anzahl = document.getElementById("anzahl").value;
		var wurftag = document.getElementById("geworfen").value;
		var mutterWurf = document.getElementById("mutterWurf").value;
		var rasseMutterWurf = document.getElementById("mutterWurf").value;
		var vaterWurf = document.getElementById("vaterWurf").value;
		var rasseVaterWurf = document.getElementById("vaterWurf").value;
			console.log(anzahl, wurftag, mutterWurf, rasseMutterWurf, vaterWurf, rasseVaterWurf);
	}
}