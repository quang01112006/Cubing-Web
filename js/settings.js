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

// Lấy ô input
const timerColorPicker = document.querySelectorAll('input[type="color"]')[0];
const scrambleColorPicker = document.querySelectorAll('input[type="color"]')[1];

// Khi load setting.html thì gán giá trị đã lưu
window.addEventListener("DOMContentLoaded", () => {
  const savedTimerColor = localStorage.getItem("timerColor") || "#e2e8ee";
  const savedScrambleColor = localStorage.getItem("scrambleColor") || "#e2e8ee";

  timerColorPicker.value = savedTimerColor;
  scrambleColorPicker.value = savedScrambleColor;
});

// Lắng nghe khi chọn màu cho Timer
timerColorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  localStorage.setItem("timerColor", color);
});

// Nút Reset Timer
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

// Nút Reset Scramble
document
  .getElementById("reset-scramble-color-btn")
  .addEventListener("click", () => {
    localStorage.removeItem("scrambleColor");
    scrambleColorPicker.value = "#e2e8ee";
  });
