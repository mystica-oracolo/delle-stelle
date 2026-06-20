// ============================================================
// MYSTICA ORACOLI — Lazy loading immagini (custom)
// Sostituisce l'attributo nativo loading="lazy", che su Chrome
// Android si blocca a metà quando molte immagini lazy si trovano
// vicine nello stesso punto di scroll (bug noto: crbug.com/954323).
// Qui il caricamento viene gestito esplicitamente via JS con
// IntersectionObserver, bypassando l'intervento nativo del browser
// che causa il blocco a metà caricamento.
// ============================================================
(function () {
  function loadImg(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.src = src;
    img.removeAttribute('data-src');
  }

  function start() {
    if (!('IntersectionObserver' in window)) {
      // Fallback per browser molto vecchi: carica tutto subito
      document.querySelectorAll('img[data-src]').forEach(loadImg);
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImg(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '400px 0px', threshold: 0.01 }
    );

    document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));

    // Copre anche le immagini inserite dinamicamente dopo
    // (es. quando l'app genera HTML al volo cambiando vista)
    const mo = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches('img[data-src]')) io.observe(node);
          if (node.querySelectorAll) {
            node.querySelectorAll('img[data-src]').forEach(img => io.observe(img));
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
