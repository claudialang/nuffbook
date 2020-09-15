
	
function hamburgClick(){
	var selectMenu = document.getElementById("selectMenu");
	if (selectMenu.classList.contains("hidden")) {
		selectMenu.classList.remove("hidden");
	} else {
		selectMenu.classList.add("hidden");
	}
}
	
function hasenMenuClick(){
	//finde Elternelement "HasenWahl"
	var hasenWahl = document.getElementById("hasenWahl");
	// Kindelement bereinigen
	hasenWahl.innerHTML = "";
	if (hasenWahl.classList.contains("hidden")) {
		hasenWahl.classList.remove("hidden");
	} else {
		hasenWahl.classList.add("hidden");
	}
	//für alle Hasen in HasenListe
	for (let index = 0; index < HasenListe.length; index++) {
		const Hase = HasenListe[index];
		console.log(Hase.name);
		// Erzeuge Kindelement
		let eltDiv = document.createElement('div');
		let eltA = document.createElement('a');
		eltA.href = "#ersterHase";
		// Erzeuge Text von Kindelement
		let eltText = document.createTextNode(Hase.name);
		// Füge TextNode zum Div
		eltA.appendChild(eltText);
		eltDiv.appendChild(eltA);
		// TODO: Erzeuge Attribute von Kindelement
		eltDiv.classList.add("hase");	
		
		// Füge Div hinten an hasenWahl
		hasenWahl.appendChild(eltDiv);
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
    	alter: "2016-04",
		farbe: "braunweis",
		fotoFront: "",
		fotoLinks: "",
		fotoRechts: "",
		fotoRucken: "",
		geschlecht: "weiblich",
		imBesitz: "2016-07",
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
		name: "Herr Mann",
		farbe: "braun",
		fotoFront: "",
		fotoLinks: "",
		fotoRechts: "",
		fotoRucken: "",
		geschlecht: "männlich",
		imBesitz: "2018-07",
    	alter: "2018-04",
		kastriert: "unkastriert",
		mutter: "nb",
		mutterRasse: "Deutscher Widder",
		rasse: "Deutscher Widder",
		vater: "nb",
		vaterRasse: "Deutscher Widder",
    },
    
];


	


//document.getElementById("menuHaseFirst").innerHTML = HasenListe[0].name;
//document.getElementById("menuHaseSecond").innerHTML = HasenListe[1].name;
//document.getElementById("nameHaseFirst").innerHTML = HasenListe[0].name;
//document.getElementById("alterHaseFirst").innerHTML = "Geboren am: " + HasenListe[0].alter;





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

// page switcher

function changeContentPage() {
	pageSelected = this.dataset.page;
	document.querySelectorAll("div.contentPage").forEach(function(page){
		if (page === undefined) {
			return 0;
		}
		if (page.id == pageSelected) {
			if (page.classList.contains("hidden")) {
				page.classList.remove("hidden");
			}
		} else {
			if (!page.classList.contains('hidden')) {
				page.classList.add('hidden');
			}
		}
//		if (page.id == 'browse') {
//			buildPageHasenseite();
//		}
	});
	hamburgClick();
}

//function buildPageHasenseite()
//{
//	hasenItemsListe = document.querySelector('.hasenDaten');
//	hasenItemsListe.innerHTML = '';
//	spalten = {
//		name: "Name",
//		farbe: "Farbe",
//		fotoFront: "Foto 1",
//		fotoLinks: "Foto 2",
//		fotoRechts: "Foto 3",
//		fotoRucken: "Foto 4",
//		geschlecht: "Geschlecht",
//		imBesitz: "Im Besitz Seit",
  //  	alter: "Alter",
//		kastriert: "Kastriert",
//		mutter: "Mutter",
//		mutterRasse: "Rasse der Mutter",
//		rasse: "Rasse des Tiers",
//		vater: "Vater",
//		vaterRasse: "Rasse des Vaters",
//	}

//	for (hase of HasenListe) {
//		console.log(hase);
		// Jeder Hase kommt in ein eigenes ul-Element
		// In jedem ul-Element ist jedes Attribut eine Zeile
//		eigenschaftenListe = document.createElement('ul');
//		for (eigenschaft in hase) {
//			eigenschaftenEintrag = document.createElement('li');
//			eigentschaftenText = document.createTextNode(spalten[eigenschaft] + ': ' +  hase[eigenschaft]);
//			eigenschaftenEintrag.appendChild(eigentschaftenText);
//			eigenschaftenListe.appendChild(eigenschaftenEintrag);
//		}
//		hasenItemsListe.appendChild(eigenschaftenListe);
//	}
//
//}

//Wait for the html document to be loaded (but not for images)
document.addEventListener("DOMContentLoaded", function(event) {
	// Install the menu click handler
	document.querySelectorAll("div.menuPunkt").forEach(function (link) {
		link.addEventListener("click", changeContentPage);
	});
});