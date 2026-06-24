// ============================================================
// MYSTICA ORACOLI — Lazy loading immagini (custom)
// Sostituisce l'attributo nativo loading="lazy", che su Chrome
// Android si blocca a metà quando molte immagini lazy si trovano
// vicine nello stesso punto di scroll (bug noto: crbug.com/954323).
// Qui il caricamento viene gestito esplicitamente via JS con
// IntersectionObserver, bypassando l'intervento nativo del browser
// che causa il blocco a metà caricamento.
//
// FIX v2: Aggiunto loadVisible() per caricare subito le immagini
// già nella viewport al momento dell'inizializzazione dell'observer.
// Su Chrome Android, l'IntersectionObserver registrato tardi (dopo
// DOMContentLoaded) non rifirma isIntersecting per elementi già
// visibili — questo causa le card nere finché non si scrolla.
// ============================================================
(function () {
  function loadImg(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.src = src;
    img.removeAttribute('data-src');
  }

  // Carica immediatamente le immagini già visibili nella viewport
  // o entro il margine di precaricamento (400px sotto il fold).
  function loadVisible(imgs) {
    const threshold = window.innerHeight + 400;
    imgs.forEach(function(img) {
      const rect = img.getBoundingClientRect();
      if (rect.top < threshold) {
        loadImg(img);
      }
    });
  }

  function start() {
    const allImgs = Array.from(document.querySelectorAll('img[data-src]'));

    if (!('IntersectionObserver' in window)) {
      // Fallback per browser molto vecchi: carica tutto subito
      allImgs.forEach(loadImg);
      return;
    }

    // PASSO 1 — Carica subito le immagini già nella viewport/near-viewport.
    // Questo risolve il bug Chrome Android dove l'observer non rifirma
    // per elementi già visibili quando viene registrato in ritardo.
    loadVisible(allImgs);

    // PASSO 2 — Osserva le immagini rimanenti (quelle più in basso nella pagina).
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

    // Osserva solo quelle che non sono già state caricate nel passo 1
    document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));

    // Copre anche le immagini inserite dinamicamente dopo
    // (es. quando l'app genera HTML al volo cambiando vista)
    const mo = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches('img[data-src]')) {
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight + 400) {
              loadImg(node);
            } else {
              io.observe(node);
            }
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('img[data-src]').forEach(img => {
              const rect = img.getBoundingClientRect();
              if (rect.top < window.innerHeight + 400) {
                loadImg(img);
              } else {
                io.observe(img);
              }
            });
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
