// Change bg
document.getElementById("bg-upload").addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    localStorage.setItem("timerBackground", e.target.result);
    alert("Đổi hình nền timer thành công!");
  };
  reader.readAsDataURL(file);
});

// Reset
document.getElementById("reset-bg-btn").addEventListener("click", function () {
  localStorage.removeItem("timerBackground");
  alert("Đã xóa hình nền!");
});

