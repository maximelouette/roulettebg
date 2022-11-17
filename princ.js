var heroes = document.querySelector('.container-heroes');
var translate = 0;

window.addEventListener('click', function(e) {
	random = Math.floor(Math.random()*10);
	random = random + 100;
	translate = translate + 112 * random;
	heroes.style.backgroundPosition = translate+'px 0px';
})