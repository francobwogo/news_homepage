function myFunction() {
    let menu = document.getElementById("menu");
    let navMenu = document.getElementById("navMenu");
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");
    let nav = document.getElementById("nav");

    // Create a media condition that targets viewports min-width: 720px
    const mediaQuery0 = window.matchMedia('(max-width: 719px)')
    // Check if the media query is true
    if (mediaQuery0.matches) {

        if (menu.style.display === "flex") {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
            menu.style.display = "none";
            navMenu.style.position = "static";
            navMenu.style.backgroundColor = "none";
            nav.style.paddingTop = "10px"
        } else {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
            menu.style.display = "flex";
            navMenu.style.position = "fixed";
            navMenu.style.backgroundColor = "var(--clr-neutral-100)";
            nav.style.paddingTop = "0"
        }
    }
}


// Create a media condition that targets viewports min-width: 720px
const mediaQuery1 = window.matchMedia('(min-width: 720px)')
// Check if the media query is true
if (mediaQuery1.matches) {
    // Then change image source to desktop version
    document.getElementById("ctaImg").src = "./assets/images/image-web-3-desktop.jpg";
}