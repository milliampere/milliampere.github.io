'use strict';

/**
 * Eventlistener to apply click-functions and load content at init
 */
document.addEventListener('DOMContentLoaded', function (event) {
	document.getElementById('nav-about').addEventListener('click', Module.appendAboutMe);
	document.getElementById('nav-projects').addEventListener('click', Module.appendProjects);
	document.getElementById('nav-contact').addEventListener('click', Module.appendContactMe);

	Module.appendAboutMe();
});

var Module = function () {

	var projects = [{
		name: "Vanilla Web Design",
		description: "Vi fick i uppdrag att skapa en webbplats till en fiktiv webbyrå. Här är det förutom HTML och CSS fokus på arbetsprocessen och hur vi kan jobba enligt Scrum. ",
		date: "Januari 2017",
		repository: "vanilla",
		image: "vanilla-thin.jpg",
		color: "#aba599"
	}, {
		name: "Movie Database",
		description: "En sida om filmer där man kan filtrera på genre, år och betyg samt lägga till och redigera filmer. Fokus är designmönster och koden är skriven enligt Revealing Module Pattern. ",
		date: "Mars 2017",
		repository: "movie-database",
		image: "movie-thin.jpg",
		color: "#9ba874"
	}, {
		name: "Trafikinformation i Stockholm",
		description: "Välj ett öppet API och gör en sida - det här är resultatet. Data hämtas från Trafikverkets API och presenteras på en karta och i textform. ",
		date: "Mars 2017",
		repository: "ajax-assignment",
		image: "trafik-thin.jpg",
		color: "#aba599"
	}];

	// #dbd467

	function appendProjects() {
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = '';

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var project = _step.value;

				htmlChunk += '<div class="col-md-1-3">\n\t\t\t\t\t\t\t\t\t\t\t<div class="project-box" style="background-color: ' + project.color + '">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="project-media">\n\t\t\t\t\t\t\t\t    \t\t\t<a target="_blank" href="https://milliampere.github.io/' + project.repository + '"><img src="dist/images/' + project.image + '" alt="' + project.name + '"></a>\n\t\t\t\t\t\t\t\t  \t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="project-description" style="background-color: ' + project.color + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>' + project.name + '</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>' + project.description + '</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>';
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Projekt";
	}

	function appendAboutMe() {
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = '\n\t\t<div class="col-md-1-2">\n\t\t<p>Jag heter <b>Camilla Tranberg</b> och l\xE4ser frontendutveckling p\xE5 Nackademins yrkesh\xF6gskola. Vi har hittills l\xE4st kurser i HTML/CSS, JavaScript, programmeringsmetodik, bildbehandling samt kommunikation och projektmetoder. Till h\xF6sten \xE4r det dags f\xF6r praktik! </p>\n\t\t</div>\n\t\t<div class="col-md-1-2">\n\t\t<p>Fritiden spenderar jag g\xE4rna med mina vinthundar, antingen p\xE5 kappl\xF6pningsbanan eller i skogen. Jag sjunger i k\xF6r och tr\xE4nar yoga. \xD6vrigt tid hittar du mig framf\xF6r datorn! </p>\n\t\t</div>';

		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Om mig";
	}

	function appendContactMe() {
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = '\n\t\t<div class="contact-box">\n\t\t\t<section class="contact-info text-center">\n\t\t\t<p>Jag hoppas att h\xF6ra fr\xE5n er!</p>\n\t\t\t\t<p><a href="mailto:camilla.tranberg@gmail.com?Subject=Praktikplats" target="_top">camilla.tranberg @ gmail</a></p>\n\t\t\t</section>\n\t\t\t<section class="contact-icones text-center">\n\t\t\t\t<a href="https://www.linkedin.com/in/camilla-tranberg-aa868812a" target="_blank"><span class="fa fa-linkedin-square fa-2x" aria-hidden="true"></span></a>\n\t\t\t\t<a href="mailto:camilla.tranberg@gmail.com?Subject=Praktikplats" target="_top"><span class="fa fa-envelope fa-2x" aria-hidden="true"></span></a>\n\t\t\t\t<a href="https://github.com/milliampere" target="_blank"><span class="fa fa-github fa-2x" aria-hidden="true"></span></a>\n\t\t\t</section>\n\t\t</div>\n\t\t';

		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Kontakta mig";
	}

	return {
		appendProjects: appendProjects,
		appendAboutMe: appendAboutMe,
		appendContactMe: appendContactMe
	}; // end of return
}(); // end of Module