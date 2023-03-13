$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

const skills = ["HTML5", "CSS3", "Bootstrap", "MaterialUI", "JavaScript", "ReactJS", "AngularJS", "jQuery", "NodeJS", "ExpressJS", "JSON", "npm", "PHP", "MySQL", "DigitalOcean"];

$.each(skills, function(){
    $('.skills').append(` <div class="col d-flex flex-column align-items-center justify-content-around p-1 m-1 p-md-3 m-md-3 rounded bg-dark text-white ">
							<img src="./images/${this.toLowerCase()}.png"></img>
							<p class="mb-0">${this}</p>
						</div>`)
})