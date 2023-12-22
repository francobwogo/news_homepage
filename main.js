function myFunction() {
    let menu = document.getElementById("menu");
    let navMenu = document.getElementById("navMenu");
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");

    if (menu.style.display === "flex") {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        menu.style.display = "none";
        navMenu.style.position = "static";
        navMenu.style.backgroundColor = "none";

    } else {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        menu.style.display = "flex";
        navMenu.style.position = "fixed";
        navMenu.style.backgroundColor = "var(--clr-neutral-100)";
    }
}
