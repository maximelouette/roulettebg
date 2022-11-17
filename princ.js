var heroes = document.querySelector('.container-heroes');
var translate = 0;

window.addEventListener('click', function(e) {
	random = Math.floor(Math.random()*8);
	random = random + 80;
	translate = translate + 150 * random;
	heroes.style.backgroundPosition = translate+'px 0px';
})