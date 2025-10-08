const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === 'dark-mode') {
      body.classList.add("dark");
}


//js code to toggle dark and light mode
modeToggle.addEventListener('click', () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");

      // js code to keep user selected mode even page refresh or fill
      if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
      } else {
            localStorage.setItem("mode", "dark-mode");
      }
});

//js code to toggle search box
searchToggle.addEventListener('click', () => {
      searchToggle.classList.toggle("active");
});

// js code toggle sidebar
["click", "touchstart"].forEach(evt =>
      sidebarOpen.addEventListener(evt, () => {
            nav.classList.toggle("active");
      })
);

body.addEventListener('click', (e) => {
      let clickedElm = e.target;
      if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
            nav.classList.remove("active");
      }
});


