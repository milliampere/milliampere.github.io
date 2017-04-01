/**
 * Eventlistener to apply click-functions and load content at init
 */
document.addEventListener('DOMContentLoaded', function(event) {
	document.getElementById('nav-about').addEventListener('click', Module.appendAboutMe);	
	document.getElementById('nav-projects').addEventListener('click', Module.appendProjects);
	document.getElementById('nav-contact').addEventListener('click', Module.appendContactMe);

	Module.appendProjects();

});

const Module  = (function() {

	const projects = [
		{
			name: "Vanilla Web Design",
			description: "Vi fick i uppdrag att skapa en webbplats till en fiktiv webbyrå.",
			date: "Januari 2017",
			repository: "vanilla",
			image: "vanilla-thin.jpg",
			color: "#aba599",
		},
		{
			name: "Movie Database",
			description: "En databas över filmer där man kan filtrera på genre, år och betyg.",
			date: "Mars 2017",
			repository: "movie-database",
			image: "movie-thin.jpg",
			color: "#9ba874",
		},
		{
			name: "Trafikinformation i Stockholm",
			description: "Öppet API",
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
		<p>Jag heter <b>Camilla Tranberg</b> och läser frontendutveckling på Nackademins yrkeshögskola. Vi har hittills läst kurser i <b>HTML/CSS</b>, <b>JavaScript</b>, <b>programmeringsmetodik</b>, <b>bildbehandling</b> samt <b>kommunikation och projektmetoder</b>. Till hösten är det dags för praktik! </p>
		</div>
		<div class="col-md-1-2">
		<p>Praktiken är perioden från vecka 41 till 50. Här finns <a href="http://studentportal.nackademin.se/pluginfile.php/44747/mod_resource/content/1/L_LIA1.pdf" target="_blank">kursplanen</a>.</p>
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
