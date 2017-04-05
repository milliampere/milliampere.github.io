/**
 * Eventlistener to apply click-functions and load content at init
 */
document.addEventListener('DOMContentLoaded', function(event) {
	document.getElementById('nav-about').addEventListener('click', Module.appendAboutMe);	
	document.getElementById('nav-projects').addEventListener('click', Module.appendProjects);
	document.getElementById('nav-contact').addEventListener('click', Module.appendContactMe);

	Module.appendAboutMe();

});

const Module  = (function() {

	const projects = [
		{
			name: "Vanilla Web Design",
			description: "Vi fick i uppdrag att skapa en webbplats till en fiktiv webbyrå. Här är det förutom HTML och CSS fokus på arbetsprocessen och hur vi kan jobba enligt Scrum. ",
			date: "Januari 2017",
			repository: "vanilla",
			image: "vanilla-thin.jpg",
			color: "#aba599",
		},
		{
			name: "Movie Database",
			description: "En sida om filmer där man kan filtrera på genre, år och betyg samt lägga till och redigera filmer. Fokus är designmönster och koden är skriven enligt Revealing Module Pattern. ",
			date: "Mars 2017",
			repository: "movie-database",
			image: "movie-thin.jpg",
			color: "#9ba874",
		},
		{
			name: "Trafikinformation i Stockholm",
			description: "Välj ett öppet API och gör en sida - det här är resultatet. Data hämtas från Trafikverkets API och presenteras på en karta och i textform. ",
			date: "Mars 2017",
			repository: "ajax-assignment",
			image: "trafik-thin.jpg",
			color: "#aba599",
		}
	];

// #dbd467

	function appendProjects() {
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = '';

		for(var project of projects){
			htmlChunk += `<div class="col-md-1-3">
											<div class="project-box" style="background-color: ${project.color}">
												<div class="project-media">
								    			<a target="_blank" href="https://milliampere.github.io/${project.repository}"><img src="dist/images/${project.image}" alt="${project.name}"></a>
								  			</div>
												<div class="project-description" style="background-color: ${project.color}">
													<h3>${project.name}</h3>
													<p>${project.description}</p>
												</div>
											</div>
										</div>`;
		}
		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Projekt";
	}


	function appendAboutMe() {
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = 
		`
		<div class="col-md-1-2">
		<p>Jag heter <b>Camilla Tranberg</b> och läser frontendutveckling på Nackademins yrkeshögskola. Vi har hittills läst kurser i HTML/CSS, JavaScript, programmeringsmetodik, bildbehandling samt kommunikation och projektmetoder. Till hösten är det dags för praktik! </p>
		</div>
		<div class="col-md-1-2">
		<p>Fritiden spenderar jag gärna med mina vinthundar, antingen på kapplöpningsbanan eller i skogen. Jag sjunger i kör och tränar yoga. Övrigt tid hittar du mig framför datorn! </p>
		</div>`;

		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Om mig";
	}


	function appendContactMe(){
		var contentList = document.getElementById('contentList');
		var heading = document.getElementById('heading');

		var htmlChunk = `
		<div class="contact-box">
			<section class="contact-info text-center">
			<p>Jag hoppas att höra från er!</p>
				<p><a href="mailto:camilla.tranberg@gmail.com?Subject=Praktikplats" target="_top">camilla.tranberg @ gmail</a></p>
			</section>
			<section class="contact-icones text-center">
				<a href="https://www.linkedin.com/in/camilla-tranberg-aa868812a" target="_blank"><span class="fa fa-linkedin-square fa-2x" aria-hidden="true"></span></a>
				<a href="mailto:camilla.tranberg@gmail.com?Subject=Praktikplats" target="_top"><span class="fa fa-envelope fa-2x" aria-hidden="true"></span></a>
				<a href="https://github.com/milliampere" target="_blank"><span class="fa fa-github fa-2x" aria-hidden="true"></span></a>
			</section>
		</div>
		`;

		contentList.innerHTML = htmlChunk;
		heading.innerHTML = "Kontakta mig";
	}

		return {
			appendProjects: appendProjects,
			appendAboutMe: appendAboutMe,
			appendContactMe: appendContactMe,
	}; // end of return
})(); // end of Module
