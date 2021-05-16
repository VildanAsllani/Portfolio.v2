var nav = document.getElementById('navigation');
    var menuOpen = document.getElementById('menu-open');
    var menuClose = document.getElementById('menu-close');
    
    menuOpen.addEventListener("click", function(){
        nav.style.left="0";
    });

    menuClose.addEventListener("click",function(){
        nav.style.left="-100%";
    });