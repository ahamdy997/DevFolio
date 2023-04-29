let myNav = document.getElementById('navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700 ){
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};