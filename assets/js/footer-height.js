(function () {
  const footer = document.querySelector("footer.fixed-bottom");
  if (!footer) return;

  const setFooterHeight = () => {
    const height = footer.offsetHeight;
    document.documentElement.style.setProperty("--footer-height", height + "px");
    // Direkt inline setzen, um andere Inline-Styles zu überschreiben
    document.body.style.paddingBottom = (height + 20) + "px";
  };

  setFooterHeight();
  window.addEventListener("load", setFooterHeight);
  window.addEventListener("resize", setFooterHeight);

  if (window.ResizeObserver) {
    new ResizeObserver(setFooterHeight).observe(footer);
  }
})();