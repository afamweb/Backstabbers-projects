// Mobile navigation toggle (the desktop nav is hidden below the lg breakpoint).
(function () {
  "use strict";
  var btn = document.getElementById("menuBtn");
  var panel = document.getElementById("mobileNav");
  if (!btn || !panel) return;

  function setOpen(open) {
    panel.classList.toggle("hidden", !open);
    panel.classList.toggle("flex", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    var icon = btn.querySelector(".material-symbols-outlined");
    if (icon) icon.textContent = open ? "close" : "menu";
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });
  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) {
    if (e.matches) setOpen(false);
  });
})();
