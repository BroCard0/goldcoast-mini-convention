const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");

});
document.addEventListener("click", (e) => {
  const isClickInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target);

  if (!isClickInsideNav && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
  }
});
const navLinkItems = navLinks.querySelectorAll("a");

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
  });
});
const scripturePairs = [
  {
    card: document.getElementById("jeremiah-card"),
    dialog: document.getElementById("jeremiah-dialog"),
  },
  {
    card: document.getElementById("peter-card"),
    dialog: document.getElementById("peter-dialog"),
  },
  {
    card: document.getElementById("isaiah-card"),
    dialog: document.getElementById("isaiah-dialog"),
  },
];

scripturePairs.forEach(({ card, dialog }) => {
  const closeButton = dialog.querySelector(".close-dialog");

  card.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});
scripturePairs.forEach(({ dialog }) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

