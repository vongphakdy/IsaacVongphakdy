//grab everything
const  btn =  document.querySelector('.nav-btn');
const menu = document.querySelector('.nav-menu');

//add event listeners
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});