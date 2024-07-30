function toggleMenu() {
    const asideMenu = document.getElementById("menu");
    // or ||
    // and &&
    // if (asideMenu.style.display === "" || asideMenu.style.display === "none")
    //     asideMenu.style.display = "block";
    // else
    //     asideMenu.style.display = "None";
    
    // if (asideMenu.classList.contains("show"))
    //     asideMenu.classList.remove("show");
    // else
    //     asideMenu.classList.add("show");
    asideMenu.classList.toggle("show");
}

const botaoHamburguer = document.querySelector(".hamburguer");
botaoHamburguer.onclick = toggleMenu;