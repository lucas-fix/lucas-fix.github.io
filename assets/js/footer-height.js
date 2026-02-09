(function () {
  const footer = document.querySelector("footer.fixed-bottom");
  if (!footer) return;

  const setFooterHeight = () => {
    const height = footer.offsetHeight;
    
    // Universelle Lösung: Haupt-Container bekommt Abstand
    const container = document.querySelector(".container[role='main']");
    if (container) {
      container.style.paddingBottom = (height + 30) + "px";
    }
  };

  setFooterHeight();
  window.addEventListener("load", setFooterHeight);
  window.addEventListener("resize", setFooterHeight);

  if (window.ResizeObserver) {
    new ResizeObserver(setFooterHeight).observe(footer);
  }
})();