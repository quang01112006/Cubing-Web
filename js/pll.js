document.querySelectorAll(".pll-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("star-icon") ||
      e.target.closest(".star-icon")
    ) {
      return; // Don't expand when clicking star
    }

    this.classList.toggle("expanded");
  });
});
