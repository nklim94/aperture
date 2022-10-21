/**************ВЫПАДАЮЩЕЕ МЕНЮ***************/
let hamburger = document.querySelector('.hamburger'),
	line1 = document.querySelector('.line1'),
	line2 = document.querySelector('.line2'),
	line3 = document.querySelector('.line3'),
	hamburgerMenu = document.querySelector('.hamburger__list'),
	hamburgerList = document.querySelectorAll('.hamburger__list-item'),
	body = document.querySelectorAll('body')
function liActive(){
	hamburgerMenu.classList.toggle('hamburger__list_active');
}

function burgerAnim() {
	line1.classList.toggle('line1_active');
	line2.classList.toggle('line2_active');
	line3.classList.toggle('line3_active');
	setTimeout(liActive,10);	
}
hamburger.addEventListener('click', burgerAnim);

