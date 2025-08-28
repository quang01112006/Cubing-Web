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

// Reset bg
document.getElementById("reset-bg-btn").addEventListener("click", function () {
  localStorage.removeItem("timerBackground");
  alert("Đã xóa hình nền!");
});

// Lấy input
const timerColorPicker = document.querySelectorAll('input[type="color"]')[0];
const scrambleColorPicker = document.querySelectorAll('input[type="color"]')[1];

window.addEventListener("DOMContentLoaded", () => {
  const savedTimerColor = localStorage.getItem("timerColor") || "#e2e8ee";
  const savedScrambleColor = localStorage.getItem("scrambleColor") || "#e2e8ee";

  timerColorPicker.value = savedTimerColor;
  scrambleColorPicker.value = savedScrambleColor;
});

timerColorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  localStorage.setItem("timerColor", color);
});

// Reset màu time
document
  .getElementById("reset-timer-color-btn")
  .addEventListener("click", () => {
    localStorage.removeItem("timerColor");
    timerColorPicker.value = "#e2e8ee";
  });

// Lắng nghe khi chọn màu cho Scramble
scrambleColorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  localStorage.setItem("scrambleColor", color);
});

// Reset màu scramble
document
  .getElementById("reset-scramble-color-btn")
  .addEventListener("click", () => {
    localStorage.removeItem("scrambleColor");
    scrambleColorPicker.value = "#e2e8ee";
  });
