document.querySelectorAll(".pll-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.closest(".star-icon") || e.target.closest(".alg-3d")) {
      return;
    }

    this.classList.toggle("expanded");
  });
});

