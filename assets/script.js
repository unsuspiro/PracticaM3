//menu-btn

let toggleBtn = document.getElementById("togglebtn");
let SideMenu = document.getElementById("SideMenu");

toggleBtn.addEventListener("click", () => {
    SideMenu.classList.toggle("active-link");
});
