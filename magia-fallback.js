// magia-fallback.js - Caricato come sicurezza aggiuntiva

(function() {
  // Assicura che DB_SIGILLI_SALOMONE sia definito
  if (typeof DB_SIGILLI_SALOMONE === 'undefined') {
    window.DB_SIGILLI_SALOMONE = [
      { geomFn: 'saturno', nome: 'Saturno', pianeta: '♄ Saturno', colore: '#6b6b8a', metallo: 'Piombo', giorno: 'Sabato' },
      { geomFn: 'giove', nome: 'Giove', pianeta: '♃ Giove', colore: '#4a7fbf', metallo: 'Stagno', giorno: 'Giovedì' },
      { geomFn: 'marte', nome: 'Marte', pianeta: '♂ Marte', colore: '#c84a3a', metallo: 'Ferro', giorno: 'Martedì' },
      { geomFn: 'sole', nome: 'Sole', pianeta: '☉ Sole', colore: '#e6b800', metallo: 'Oro', giorno: 'Domenica' },
      { geomFn: 'venere', nome: 'Venere', pianeta: '♀ Venere', colore: '#3da88e', metallo: 'Rame', giorno: 'Venerdì' },
      { geomFn: 'mercurio', nome: 'Mercurio', pianeta: '☿ Mercurio', colore: '#d97a3a', metallo: 'Argento-Mercurio', giorno: 'Mercoledì' },
      { geomFn: 'luna', nome: 'Luna', pianeta: '☾ Luna', colore: '#b8a8d4', metallo: 'Argento', giorno: 'Lunedì' }
    ];
  }

  // Funzioni di fallback già incluse in oracoli.js, ma le ripetiamo per sicurezza
  if (typeof initMagia === 'undefined') {
    window.initMagia = function() {
      var panels = ['bianca', 'rossa', 'nera', 'malocchio', 'sigilli'];
      var titles = {
        'bianca': '✨ Magia Bianca',
        'rossa': '❤️ Magia Rossa',
        'nera': '🖤 Magia Nera',
        'malocchio': '🧿 Il Malocchio',
        'sigilli': '🔯 Sigilli di Re Salomone'
      };
      var intros = {
        'bianca': 'Rituali di protezione, guarigione e luce. Lavorano in armonia con il bene di tutti gli esseri.',
        'rossa': 'Rituali di passione, amore e attrazione. Sempre nel rispetto del libero arbitrio altrui.',
        'nera': 'Rituali di ombra, difesa e trasformazione. Usati eticamente per proteggere e allontanare il male.',
        'malocchio': 'Tradizione popolare mediterranea. Riconoscimento, rimozione e protezione dal malocchio.',
        'sigilli': 'La Clavicula Salomonis — 44 sigilli planetari per la manifestazione del desiderio.'
      };
      
      panels.forEach(function(p) {
        var list = document.getElementById('magiaList-' + p);
        if (!list) return;
        if (list.children.length > 0 && list.querySelector('.magia-fallback')) return;
        
        list.innerHTML = `
          <div class="card magia-fallback" style="margin-bottom:10px;border-color:rgba(212,175,55,0.2)">
            <h3 style="text-align:center;color:var(--gold);font-family:'Cinzel',serif;font-size:14px;margin-bottom:6px">${titles[p] || p}</h3>
            <p style="font-size:13px;color:var(--muted);text-align:center;line-height:1.8">${intros[p] || ''}</p>
            <p style="font-size:12px;color:var(--gold-dim);text-align:center;font-family:'Cinzel',serif;letter-spacing:1px;margin-top:8px">
              ✦ Contenuti disponibili con MYSTICA Premium ✦
            </p>
            <button class="btn" style="width:100%;margin-top:8px" onclick="if(typeof showPremiumModal==='function') showPremiumModal(null); else alert('Premium disponibile su MYSTICA')">
              ⭐ Sblocca Premium — 3,99€
            </button>
          </div>
        `;
      });
    };
  }

  if (typeof _generaSigilloSVG === 'undefined') {
    window._generaSigilloSVG = function(s) {
      var size = 180;
      var cx = size/2, cy = size/2;
      var colors = {
        'saturno': '#6b6b8a', 'giove': '#4a7fbf', 'marte': '#c84a3a',
        'sole': '#e6b800', 'venere': '#3da88e', 'mercurio': '#d97a3a',
        'luna': '#b8a8d4'
      };
      var c = colors[s.geomFn] || '#d4af37';
      
      var svg = '<svg viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;filter:drop-shadow(0 0 18px ' + c + '60)">';
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (size/2 - 12) + '" fill="none" stroke="' + c + '" stroke-width="2" opacity="0.5"/>';
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (size/2 - 18) + '" fill="none" stroke="' + c + '" stroke-width="1" stroke-dasharray="4,6" opacity="0.3"/>';
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="22" fill="' + c + '" opacity="0.2"/>';
      svg += '<text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-family="\'Cinzel\',serif" font-size="24" font-weight="700" fill="' + c + '" letter-spacing="2">' + s.nome.charAt(0).toUpperCase() + '</text>';
      svg += '<text x="' + cx + '" y="' + (size - 8) + '" text-anchor="middle" font-family="\'Cinzel\',serif" font-size="9" fill="' + c + '" opacity="0.6" letter-spacing="3">' + s.nome.toUpperCase() + '</text>';
      svg += '</svg>';
      return svg;
    };
  }

  if (typeof _renderEnciclopediaSVG === 'undefined') {
    window._renderEnciclopediaSVG = function() {
      var map = {
        'svgSaturno': 'saturno', 'svgGiove': 'giove', 'svgMarte': 'marte',
        'svgSole': 'sole', 'svgVenere': 'venere', 'svgMercurio': 'mercurio', 'svgLuna': 'luna'
      };
      Object.entries(map).forEach(function(item) {
        var elId = item[0], geomKey = item[1];
        var container = document.getElementById(elId);
        if (!container || container.innerHTML.trim()) return;
        var s = DB_SIGILLI_SALOMONE.find(function(x) { return x.geomFn === geomKey; });
        if (s) container.innerHTML = _generaSigilloSVG(s);
      });
    };
  }

  // Inizializza automaticamente
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof initMagia === 'function') initMagia();
    });
  } else {
    if (typeof initMagia === 'function') initMagia();
  }
})();
