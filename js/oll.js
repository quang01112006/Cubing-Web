document.querySelectorAll(".oll-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (
      e.target.closest(".alg-3d") ||
      e.target.closest(".star-icon")
    ) {
      return; //
    }

    this.classList.toggle("expanded");
  });
});
