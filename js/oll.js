document.querySelectorAll(".oll-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.closest(".alg-3d")) {
      return; //
    }

    item.classList.toggle("expanded");
  });
});
