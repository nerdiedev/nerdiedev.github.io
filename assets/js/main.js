var darkmodestate = false;

var $ = function (...args) {
    var t = document.querySelectorAll(...args);
    if (t.length === 1) return t[0];
    return t;
}
function toggleClass(element, className) {
    var classes;
    if (typeof element === 'string')
        classes = $(element).classList;
    else classes = element.classList;
    classes.toggle(className);
}
function responsiveNav() {
    toggleClass('#topnav', 'responsive');
    toggleClass('#topnav', 'shadow');

    toggleClass('.closebtn', 'responsive');
}

function darkMode() {
    toggleClass(document.documentElement, 'dark-mode');
    darkmodestate = !darkmodestate;
    window.localStorage.setItem('dark-mode', darkmodestate)
}


document.addEventListener('DOMContentLoaded', function (e) {
    var localStorage = window.localStorage;
    var darkmode = localStorage.getItem('dark-mode');
    if (darkmode === null)
        localStorage.setItem('dark-mode', darkmodestate)
    darkmode = darkmode === "true";
    if (darkmodestate != darkmode) {
        darkMode();
        $('#dark-switch input').checked = darkmode;
    }
})