window.onload = function(){
    let defNav = document.querySelector("#mob-nav-close");
    let openNav = document.querySelector("#mob-nav-open");

    let menu_open = document.querySelector("#menu-open-btn");
    menu_open.onclick = function(){
        defNav.style.display = "none";
        openNav.style.display = "block";
    };
    let menu_close = document.querySelector("#menu-close-btn");
    menu_close.onclick = function(){
        openNav.style.display = "none";
        defNav.style.display = "block";
    };
}
