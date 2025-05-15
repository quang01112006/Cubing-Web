function openSubMenu() {
    let submenu = document.getElementById("algSubmenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  }
  
  function goHome() {
    document.getElementById("pageTitle").innerText = "Welcome to Home Page";
    document.getElementById("pageContent").innerText =
      "This is the home section.";
  }
  
  function showAlg(algType) {
    let title = document.getElementById("pageTitle");
    let content = document.getElementById("pageContent");
  
    if (!algCategories[algType]) return; // Nếu không có dữ liệu thì thoát luôn
  
    title.textContent = algCategories[algType].title;
    content.innerHTML = algCategories[algType].render();
  }