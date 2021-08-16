const mainMenu = document.querySelector('.mainmenu');
const closeMenu = document.querySelector('.closemenu');
const openMenu = document.querySelector('.openmenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-1000%';
}
   //menu redes
   $(document).ready(function() {


    var redes = {

        body: $('.redes'),
        button: $('.button'),
        tools: $('.tools')

    };

    redes.button.click(function () {
        redes.body.toggleClass('redes--closed');
        redes.body.toggleClass('redes--open');
        redes.tools.toggleClass('tools--visible');
        redes.tools.toggleClass('tools--hidden');
    });

 
});


