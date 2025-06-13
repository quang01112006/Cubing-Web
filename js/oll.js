document.querySelectorAll(".oll-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("star-icon") ||
      e.target.closest(".star-icon")
    ) {
      return; //
    }

    this.classList.toggle("expanded");
  });
});
