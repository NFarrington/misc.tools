// set the navbar button classes based on the screen size
// (i.e. whether the mobile or desktop menu is shown)
function setNavbarClasses() {
    if (window.innerWidth >= 768) {
        $('#nav-items').addClass('nav-pills pull-right');
    } else {
        $('#nav-items').removeClass('nav-pills pull-right');
    }
}

// set navbar classes on resize
$(window).resize(function () {
    setNavbarClasses();
});

// set navbar classes when window loaded
$(window).ready(function () {
    setNavbarClasses();
});
