
	//Menü
function hamburgClick(){
	var selectMenu = document.getElementById("selectMenu");
	if (selectMenu.classList.contains("hidden")) {
		selectMenu.classList.remove("hidden");
	} else {
		selectMenu.classList.add("hidden");
	}
}
	//Hasenmenü
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
			// Erzeuge Kindelement
			let eltDiv = document.createElement('div');
			let eltA = document.createElement('a');
			eltA.href = "#Hase0";
			// Erzeuge Text von Kindelement
			let eltText = document.createTextNode(Hase.name);
			// Füge TextNode zum Div
			eltA.appendChild(eltText);
			eltDiv.appendChild(eltA);
			// erzeuge Klasse
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

// Hasen Daten anzeigen
function buildPageHasenseite()
{
	const parent = document.querySelector("#Hasencontainer");
 	for (const [hasennr, hase] of Object.entries(HasenListe)) {
		 const hasenChart = document.createElement('div')
		 hasenChart.classList.add('hasenDaten');
		 hasenChart.id = "Tier" + hasennr;
		 const zeilen = ['name', 'rasse', 'farbe', 'alter', 'imBesitz', 'geschlecht', 'kastriert', 'mutter', 'mutterRasse', 'vater', 'vaterRasse', 'fotoFront', 'fotoLinks', 'fotoRechts', 'fotoRucken'];
		 const zeilenNamen = ['', 'Rasse: ', 'Farbe: ', 'Alter: ', 'im Besitz seit: ', '', '', 'Mutter: ', 'Rasse Mutter: ', 'Vater: ', 'Rasse Vater: ', '', '', '', ''];
		 for (const [nr, zeile] of Object.entries(zeilen)) {
			 const elt = document.createElement('div');
			 elt.classList.add('attr' + zeile);
			 const text = document.createTextNode(zeilenNamen[nr] + hase[zeile]);
			 elt.appendChild(text);
			 hasenChart.appendChild(elt);
		 }

		 // Am Ende an das Parent-Element andocken.
		 parent.appendChild(hasenChart);
	}
}
	

//Neuer Wurf
var fertigWurfKnopf = document.getElementById("neuerWurfKnopf");
if (fertigWurfKnopf) {
	fertigWurfKnopf.onclick = function(){
		let neuerWurf = {};
		neuerWurf.bezeichnung = document.getElementById('bezeichnung').value;
		neuerWurf.anzahl = document.getElementById("anzahl").value;
		neuerWurf.wurftag = document.getElementById("geworfen").value;
		neuerWurf.mutterWurf = document.getElementById("mutterWurf").value;
		neuerWurf.rasseMutterWurf = document.getElementById("rasseMutter").value;
		neuerWurf.vaterWurf = document.getElementById("vaterWurf").value;
		neuerWurf.rasseVaterWurf = document.getElementById("rasseVater").value;
		console.log(neuerWurf);
	}
}

var WurfListe = [
	{
		anzahl: "4",
		bezeichnung: "2020-A",
		mutterWurf: "Dagmar Hase",
		rasseMutterWurf: "Riesenschecke",
		rasseVaterWurf: "Herr Mann",
		vaterWurf: "Deutscher Widder",
		wurftag: "2020-04-14",
	},
]

function buildPageWurfseite()
{
const container = document.querySelector('#Wurfcontainer');
	for (const[wurfnr, wurf] of Object.entries(WurfListe)) {
		const babyChart = document.createElement('div');
		babyChart.classList.add('wurfDaten');
		babyChart.id = "Wurf" + wurfnr;
		const reihen = ['bezeichnung', 'wurftag', 'anzahl', 'mutterWurf', 'rasseMutterWurf', 'vaterWurf', 'rasseVaterWurf'];
		const reihenNamen = ['', 'Geboren am: ', 'Anzahl: ', 'Mutter: ', '', 'Vater: ', ''];
		for (const [nr, reihe] of Object.entries(reihen)) {
			const eltern = document.createElement('div');
			eltern.classList.add('attrWurf' + reihe);
			const inhalt = document.createTextNode(reihenNamen[nr] + wurf[reihe]);
			eltern.appendChild(inhalt);
			babyChart.appendChild(eltern);
		}
		container.appendChild(babyChart);
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
		if (page.id == 'browse') {
			buildPageHasenseite();
		}
		if (page.id == 'litter') {
			buildPageWurfseite();
		}
	});
	hamburgClick();
}



//Wait for the html document to be loaded (but not for images)
document.addEventListener("DOMContentLoaded", function(event) {
	// Install the menu click handler
	document.querySelectorAll("div.menuPunkt").forEach(function (link) {
		link.addEventListener("click", changeContentPage);
	});
});