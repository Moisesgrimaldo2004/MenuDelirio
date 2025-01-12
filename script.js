// Seleccionamos el botón para mostrar y cerrar el menú
const viewMenuButton = document.getElementById("view-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const menuContainer = document.getElementById("menu-container");

// Mostrar el menú en pantalla completa
viewMenuButton.addEventListener("click", () => {
    menuContainer.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Evita el scroll en el fondo
});

// Ocultar el menú y regresar a la página inicial
closeMenuButton.addEventListener("click", () => {
    menuContainer.classList.add("hidden");
    document.body.style.overflow = "auto"; // Habilita el scroll en el fondo
});
