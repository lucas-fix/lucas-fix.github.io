(function () {
  const footer = document.querySelector("footer.fixed-bottom");
  if (!footer) return;

  const setFooterHeight = () => {
    document.documentElement.style.setProperty("--footer-height", footer.offsetHeight + "px");
  };

  setFooterHeight();
  window.addEventListener("load", setFooterHeight);
  window.addEventListener("resize", setFooterHeight);

  if (window.ResizeObserver) {
    new ResizeObserver(setFooterHeight).observe(footer);
  }
})();
