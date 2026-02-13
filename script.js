"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("heroImage");
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");

  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  const toastClose = document.getElementById("toastClose");

  const originalSrc = img.getAttribute("src");
  const altSrc = img.dataset.alt;

  let toastTimer = null;

  function showToast(text) {
    toastText.textContent = text;

    toast.classList.add("is-open");
    clearTimeout(toastTimer);

    // auto-hide po chwili (możesz zmienić/wywalić)
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-open");
    }, 2600);
  }

  function hideToast() {
    toast.classList.remove("is-open");
    clearTimeout(toastTimer);
  }

  btnYes.addEventListener("click", () => {
    if (altSrc) img.setAttribute("src", altSrc);
    hideToast();
  });

  btnNo.addEventListener("click", () => {
    img.setAttribute("src", originalSrc);
    showToast("###Błąd 404 KLIKNIJ JESZCZE RAZ###");
  });

  toastClose.addEventListener("click", hideToast);

  // ESC zamyka
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideToast();
  });
});
