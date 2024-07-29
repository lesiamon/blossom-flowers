document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.querySelector("#" + menuBtn.getAttribute("data-target"));

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
