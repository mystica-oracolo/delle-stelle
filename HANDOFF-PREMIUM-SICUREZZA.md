# MYSTICA — Handoff Premium/Sicurezza (aggiornato 10/07/2026)

Questo file dice esattamente cosa è stato fatto, cosa manca, e come continuare
senza rifare lavoro o rompere quanto già sistemato. Leggilo per intero prima
di toccare qualsiasi file legato ad auth/premium.

---

## 0. AZIONI IMMEDIATE DA FARE TU (non è codice, è configurazione)

1. **Carica questo zip su GitHub** al posto del repo attuale (sostituisce tutti
   i file, compresa la cartella nuova `cf-worker/`).
2. **Deploy del Worker** (webhook Stripe → Firestore):
   ```
   cd cf-worker
   wrangler login          # solo la prima volta
   wrangler secret put STRIPE_WEBHOOK_SECRET
   wrangler secret put FIREBASE_PROJECT_ID
   wrangler secret put FIREBASE_SERVICE_ACCOUNT_JSON   # incolla il JSON del service account, tutto su una riga
   wrangler deploy
   ```
   Alla fine `wrangler deploy` stampa un URL tipo
   `https://mystica-premium-webhook.<tuo-account>.workers.dev`.
3. **Stripe Dashboard → Developers → Webhooks → Add endpoint**
   - URL: quello stampato sopra
   - Evento da ascoltare: `checkout.session.completed`
   - Copia il "Signing secret" (`whsec_...`) e usalo come `STRIPE_WEBHOOK_SECRET` al punto 2.
4. **Firestore Console → Rules** → verifica che siano quelle di `firestore.rules`
   nel repo (scrittura su `premiumStatus/*` negata a chiunque tranne il
   service account/webhook).
5. **Cloudflare Pages** → dopo il push, purge della cache come sempre.
6. **Test end-to-end**: registrati con un'email vera, clicca "Sblocca Premium"
   su `profilo-mistico.html` o `numerologia.html`, paga con una carta test
   Stripe (`4242 4242 4242 4242`), verifica che entro pochi secondi
   `MysticaAuth.isPremium()` diventi `true` senza refresh manuale.

---

## 1. COSA È STATO CORRETTO OGGI (10/07/2026)

| File | Problema trovato | Correzione |
|---|---|---|
| `index.js` (root, mai deployato) | Path sbagliato, `wrangler.toml` puntava a `src/index.js` inesistente | Spostato in `cf-worker/src/index.js` + `cf-worker/wrangler.toml` corretto |
| `premium-success.html` | Generava un "codice premium" via hash **lato client**, segreto in chiaro nel JS, nessuna verifica pagamento reale | **Eliminato** |
| `premium-restore.html` | Stesso sistema, per "recuperare" il codice via email+data nascita | **Eliminato** |
| `numerologia.html` | (a) bottone "Ho già pagato — Inserisci codice" accettava **qualsiasi** stringa nel formato `MYST-XXXX-XXXX-XXXX`; (b) `isPremium()`/`requirePremium()` locali leggevano solo `localStorage`, mai Firestore; (c) bottone Sblocca linkava Stripe senza `client_reference_id` (impossibile collegare il pagamento all'account) | Rimosso lo sblocco a codice; sostituiti `isPremium()`/`requirePremium()` con `pageIsPremium()`/`requirePremium()` sincronizzati su `window.MysticaPremium` (Firestore); aggiunto `openStripeCheckout()` che passa `client_reference_id=<uid>`; caricati `auth.js`+`premium.js` |
| `success.html` | Attivava `myst_premium` in localStorage solo controllando che `session_id` iniziasse per `cs_` — falsificabile con `?session_id=cs_qualsiasi` nell'URL | Rimossa la scrittura diretta; il Premium ora arriva **solo** dal webhook |

**Verificato**: sintassi JS di tutti i file toccati con `node --check` — nessun errore.

---

## 2. STATO ATTUALE DEL SITO (66 pagine .html totali)

- ✅ **`profilo-mistico.html`** — pagina pilota, già completa.
- ✅ **`numerologia.html`** — migrata (10/07/2026).
- ✅ **LOTTO 1 — migrato (10/07/2026):** about.html, alchimia.html, angeli.html,
  archivio.html, astrologia-avanzata.html, astrologia-vedica.html,
  bazi-cinese.html, bibliomanzia-tasseomanzia.html, blog.html, cabala.html,
  cicli-tempo.html, compatibilita.html, divinazione-alternativa.html
  (verificate con `node --check`, zero residui `myst_premium` in localStorage).
  Nota: `cabala.html` ha una struttura del modale diversa dallo standard
  (`id="premium-modal"` con trattino, bottoni `prem-btn`/`prem-close`,
  `requirePremium(callback)` già a callback) — non è stata uniformata alla
  struttura standard, solo agganciata a Firestore + UID: funziona, ma se in
  futuro si vuole uniformità visiva va rifatta da capo sul pattern standard.
- ✅ **LOTTO 2 — migrato (10/07/2026):** enciclopedia.html, energia-chakra.html,
  ermetismo.html, gene-keys.html, geomanzia.html, guida-i-ching.html,
  guida-tarocchi.html, human-design.html, iching.html, index.html,
  libro-delle-risposte.html, luna-pianeti.html, magia-bianca.html
  (verificate con `node --check`, zero residui `myst_premium`).
  Nota: `index.html` aveva un pattern diverso dagli altri
  (`onclick="window.open('https://buy.stripe.com/...','_blank')"` invece di
  `window.location.href=...`) — non intercettato dallo script automatico,
  corretto a mano. **Se in altri lotti si trova lo stesso pattern
  `window.open(...)` per il bottone Stripe, va sostituito a mano con
  `onclick="openStripeCheckout()"` allo stesso modo.**
- ✅ **LOTTO 3 — migrato (10/07/2026):** magia-nera.html, magia-rossa.html,
  malocchio.html, mente-energia.html, negromanzia.html, oracoli.html,
  ore-specchio.html, oroscopo-cinese.html, oroscopo-segni.html, oroscopo.html,
  ouija.html, pentacoli-salomone.html, pietre-magiche.html
  (verificate con `node --check`, zero residui funzionali `myst_premium`).
  Due casi particolari:
  - `pietre-magiche.html` usava `localStorage.getItem(STORAGE_PREMIUM)` con
    una costante invece della stringa diretta — patchato a mano. La riga
    `const STORAGE_PREMIUM = 'myst_premium';` resta nel file ma è **inutilizzata**
    (non letta né scritta da nessuna parte): innocua, si può rimuovere in un
    passaggio di pulizia futuro ma non è urgente.
  - `oroscopo.html` **non aveva affatto** un sistema isPremium()/requirePremium():
    ha invece un "teaser" cosmetico (`dismissPremium('fortuna')` /
    `showPremiumGate()`) che sfoca un'anteprima e si chiude per la sessione
    corrente al click su "Continua senza Premium" — non legge/scrive mai
    localStorage o Firestore, quindi non era falsificabile, ma nemmeno
    rispettava lo stato Premium reale (un utente già Premium vedrebbe comunque
    il teaser). Ho solo agganciato i 2 bottoni "Sblocca Premium" all'account
    (UID) e caricato auth.js/premium.js; **non ho riscritto la logica del
    teaser per farla rispettare lo stato Premium reale** — è un miglioramento
    UX futuro, non un problema di sicurezza.
- ✅ **LOTTO 4 — migrato (10/07/2026):** pratica-quotidiana.html, pratiche.html,
  rune.html, sigilli-salomone.html, significato-rune.html, sogni.html,
  strega.html, stregoneria-wicca.html, strumenti.html, tarocchi.html,
  totem.html, tradizioni-spirituali.html, viaggio-astrale.html,
  zi-wei-dou-shu.html (verificate con `node --check`, zero residui).
  Caso particolare: `rune.html` non aveva una funzione `isPremium()` separata
  — il check `localStorage.getItem('myst_premium')==='1'` era scritto
  direttamente dentro `requirePremium()`. Patchato a mano allo stesso modo.

## 🎉 STATO FINALE: TUTTE LE 66 PAGINE SISTEMATE (10/07/2026)

Verifica di chiusura eseguita su tutto il progetto:
```bash
# Nessuna pagina con modale premium priva di auth.js → 0 risultati
for f in *.html; do
  grep -q "buy.stripe.com\|premiumModal\|premium-modal" "$f" && \
  { grep -q 'src="\./auth\.js"' "$f" || echo "MANCANTE: $f"; }
done

# Nessun localStorage.myst_premium residuo nel sito → 0 risultati
grep -rl "localStorage.*myst_premium\|myst_premium.*localStorage" --include="*.html" .
```
Entrambe restituiscono lista vuota. L'unico residuo testuale è una costante
inutilizzata (`STORAGE_PREMIUM`) in `pietre-magiche.html`, innocua, pulizia
facoltativa futura.

**Prossimo passo per il sito:** solo deploy (sezione 0) + test end-to-end
reale con pagamento Stripe di prova. Non serve più nessuna migrazione di
pagine HTML.

- ⚪ **11 pagine senza alcun modale premium (nessuna azione richiesta)**:
  60-magie.html, cerca.html, community.html, contatti.html,
  google8Ye7pShlly7wM_KD1PdNQ-Su0cYoTVgTbXkNJnUQtQ4.html, index_snippet.html,
  numerologia-simboli.html, oroscopo-zodcinese.html, privacy.html,
  success.html, termini.html.

### Come verificare quali pagine mancano ancora
```bash
for f in *.html; do grep -q 'src="\./auth\.js"' "$f" || echo "$f"; done
```

### Il metodo usato per il Lotto 1 (più veloce del copia-incolla manuale)
Per pagine con pattern regolare, invece di riscrivere a mano ogni funzione,
è più veloce e sicuro fare una sostituzione "chirurgica" mirata (meno rischio
di rompere strutture leggermente diverse pagina per pagina):
1. `localStorage.getItem('myst_premium') === '1'` → `(window.MysticaPremium ? window.MysticaPremium.isPremium() : false)` (dentro isPremium(), qualunque sia la sua firma)
2. `onclick="window.location.href='https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01'"` → `onclick="openStripeCheckout()"`
3. `href="https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01"` (bottoni `<a>`) → `href="#" onclick="openStripeCheckout();return false;"`
4. Inserire la funzione `openStripeCheckout()` una sola volta, subito prima della prima occorrenza di `function isPremium(`
5. Inserire `<script src="./auth.js"></script><script src="./premium.js"></script>` subito prima del tag `<script>` che contiene quella funzione
Questo NON tocca `requirePremium()`/`closePremiumModal()` (restano come sono,
anche se con firme diverse pagina per pagina) perché continuano a funzionare
correttamente una volta che `isPremium()` legge da Firestore invece che da
localStorage — è un intervento minimo e quindi più sicuro su pagine eterogenee.

---

## 3. COME MIGRARE UNA PAGINA (pattern esatto, replicare 1:1)

Per ogni pagina nella lista del punto 2, applicare **esattamente** questi
passaggi (presi da `numerologia.html`, che è il secondo esempio funzionante
dopo il pilota):

1. **Cercare nel file**: `id="premiumModal"`, `function isPremium`,
   `function requirePremium`, `function closePremiumModal`, e ogni
   `buy.stripe.com` scritto a mano.
2. **Sostituire** le funzioni locali `isPremium()`/`requirePremium()` con:
   ```js
   function pageIsPremium() {
     return window.MysticaPremium ? window.MysticaPremium.isPremium() : false;
   }
   function requirePremium() {
     if (pageIsPremium()) return true;
     document.getElementById('premiumModal')?.classList.add('show');
     document.getElementById('premiumModal')?.setAttribute('aria-hidden', 'false');
     return false;
   }
   function closePremiumModal() {
     document.getElementById('premiumModal')?.classList.remove('show');
     document.getElementById('premiumModal')?.setAttribute('aria-hidden', 'true');
   }
   document.addEventListener('mystica-premium-changed', (e) => {
     if (e.detail && e.detail.premium) closePremiumModal();
   });
   function openStripeCheckout() {
     if (!window.MysticaAuth || !window.MysticaAuth.isLoggedIn()) {
       window.MysticaAuth?.openAuthModal('register');
       return;
     }
     const user = window.MysticaAuth.currentUser();
     const params = new URLSearchParams();
     params.set('client_reference_id', user.uid);
     if (user.email) params.set('prefilled_email', user.email);
     window.location.href = 'https://buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01?' + params.toString();
   }
   ```
   (Se la pagina ha altre funzioni gated tipo `calcolaX()` che fanno
   `if (!requirePremium()) return;`, quelle righe restano identiche — cambia
   solo cosa fa `requirePremium()` sotto.)
3. **Nel bottone "Sblocca MYSTICA Premium"** dentro `#premiumModal`,
   cambiare `onclick="window.location.href='https://buy.stripe.com/...'"`
   in `onclick="openStripeCheckout()"`.
4. **Aggiungere**, subito dopo la chiusura di `#premiumModal` (`</div></div>`)
   e prima dello script principale della pagina:
   ```html
   <script src="./auth.js"></script>
   <script src="./premium.js"></script>
   ```
5. **Verificare** con `node --check` gli script inline estratti (vedi comandi
   usati oggi, sezione script Python + node --check nel repo di lavoro) e
   controllare che non resti nessun `localStorage.getItem('myst_premium')`
   o `localStorage.setItem('myst_premium'` nel file.
6. Fatto — NON serve aggiungere di nuovo `id="premiumModal"` diverso: se la
   struttura HTML del modale è già quella standard (title/text/price/buy
   button/skip button), va bene com'è, si aggancia da sola.

**Non serve chiedere conferma pagina per pagina se si segue esattamente
questo pattern** — è lo stesso già validato su 2 pagine reali. Conviene
farne 5-10 per volta, consegnare uno zip, e passare alle successive.

---

## 4. Cose da NON fare

- Non reintrodurre mai un flusso "codice premium" digitabile manualmente:
  l'unica fonte di verità è `premiumStatus/{uid}` su Firestore, scritta solo
  dal webhook.
- Non scrivere mai `myst_premium` in `localStorage` da nessuna pagina.
- Non toccare `cf-worker/src/index.js` senza motivo: è già verificato e
  segue esattamente il flusso Stripe→Firestore descritto in
  `GUIDA-DEPLOY-ACCOUNT-PREMIUM.md`.
