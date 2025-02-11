
document.getElementById("showMessage").addEventListener("click", function() {
    let contenu = document.getElementById("contenu-cache");

    if (contenu.style.display === "none" || contenu.style.display === "") {
        contenu.style.display = "block";
        setTimeout(() => { contenu.style.opacity = 1; }, 100);
    } else {
        contenu.style.opacity = 0;
        setTimeout(() => { contenu.style.display = "none"; }, 500);
    }
});


