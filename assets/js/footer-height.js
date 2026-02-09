(function () {
  const footer = document.querySelector("footer.fixed-bottom");
  if (!footer) return;

  const setFooterHeight = () => {
    const height = footer.offsetHeight;
    // Finde die Tabelle in der research.md und gib ihr margin-bottom
    const table = document.querySelector("table");
    if (table) {
      table.style.marginBottom = (height + 30) + "px";
    }
  };

  setFooterHeight();
  window.addEventListener("load", setFooterHeight);
  window.addEventListener("resize", setFooterHeight);

  if (window.ResizeObserver) {
    new ResizeObserver(setFooterHeight).observe(footer);
  }
})();