let icon_menu = document.getElementById('icon_menu_toggler');
let one_menu = document.getElementById('one');
let two_menu = document.getElementById('two');
let three_menu = document.getElementById('three');

icon_menu.onclick  = () => {
    one_menu.classList.toggle('active-x-button');
    two_menu.classList.toggle('active-x-button');
    three_menu.classList.toggle('active-x-button');
}

let links = document.querySelectorAll('.sidebar-menu ul li a');
for (let i = 0;i < links.length; i++) {
    links[i].addEventListener('mouseenter',function () {
        links[i].classList.add('active-hover-menu');
    });
    links[i].addEventListener('mouseleave',function () {
        links[i].classList.remove('active-hover-menu');
    });
}

