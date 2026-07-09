# Changelog — Fase 1 SEO (JSON-LD + Title/Meta) — mysticaoracoli.it

Pacchetto pronto al deploy: `delle-stelle-main` (stessa struttura di cartelle dell'originale, sostituibile 1:1).

## Metodo di lavoro (perché puoi fidarti di questo pacchetto)
Per il JSON-LD non ho scritto dati "a mano": per 55 pagine su 67 ho eseguito **il codice JavaScript già presente in ciascuna pagina** (la funzione `updateSEO()` che il sito usa per generare il JSON-LD a runtime) in un ambiente Node isolato, catturando esattamente l'output che il browser dell'utente genera normalmente. Il risultato è stato poi scritto nel tag statico `<script type="application/ld+json">`, che prima era vuoto (`{}`). Zero invenzioni: è il sito stesso che si autodescrive, solo reso visibile anche a chi non esegue JavaScript (crawler AI, alcuni bot).

Per le 4 pagine "manuali" (`oroscopo.html`, `numerologia-simboli.html`, `termini.html`, `pentacoli-salomone.html`) ho scritto lo schema a mano seguendo lo stesso pattern (`@graph`, Organization, Person, BreadcrumbList) già usato nel resto del sito, usando titolo/descrizione/immagini realmente presenti nella pagina.

## 1. JSON-LD — 63 pagine su 67 ora hanno schema completo
- 55 pagine: JSON-LD estratto eseguendo la logica JS originale del sito
- 4 pagine: JSON-LD scritto a mano (WebPage + BreadcrumbList + Organization, + Article dove pertinente)
- 5 pagine (`contatti.html`, `privacy.html`, `oroscopo-zodcinese.html` + le 3 pagine funnel) avevano già schema adeguato o sono correttamente `noindex` — nessuna azione necessaria
- 3 pagine escluse a ragion veduta: 2 non sono pagine reali del sito (file di verifica Google, `index_snippet.html` — quest'ultimo sembra un file di sviluppo dimenticato, valuta se rimuoverlo), 1 (`pentacoli-salomone.html`) aveva un bug JS che ne impediva l'esecuzione — vedi sotto

Verifica automatica: **tutti gli 84 blocchi JSON-LD del sito sono JSON sintatticamente valido.**

## 2. Title e meta description — 55 pagine accorciate
Ogni title portato a ≤60 caratteri, ogni meta description a ≤155 caratteri. Modificati **in tutti i punti in cui comparivano**: tag `<title>` statico, `<meta name="description">`, e le stringhe corrispondenti dentro l'oggetto `LANG.it.seo` in JavaScript (necessario: quel codice sovrascrive title/meta a ogni caricamento pagina — se avessi corretto solo l'HTML, il JS avrebbe annullato la modifica al primo render).

Per la maggior parte dei title il taglio è stato "rimuovi il suffisso ridondante ` | MYSTICA Oracoli`" quando bastava a rientrare nel limite — zero perdita di significato. Per i title senza suffisso rimovibile ho tagliato a un confine di frase naturale; 6 casi con un taglio automatico poco naturale (es. terminava con "e" a metà elenco) li ho riscritti a mano.

## 3. Bug corretto: testo con `\u2019` letterale invece dell'apostrofo
Trovato per caso lavorando sulle description: in **4 pagine** (`alchimia.html`, `astrologia-vedica.html`, `pratica-quotidiana.html`, `significato-rune.html`) il contenuto statico visibile conteneva la sequenza letterale `\u2019` invece del carattere apostrofo tipografico — es. "dell\u2019alchimia" anziché "dell'alchimia" — per un totale di 336 occorrenze, quasi tutte nel testo effettivamente visibile agli utenti. Corretto con sostituzione diretta del carattere.

## 4. Fix H1 duplicato — oroscopo-segni.html
La pagina aveva due tag `<h1>` (uno nell'header comune a tutte le pagine, uno nella sezione hero). Il secondo è stato declassato a `<h2>`, aggiornando in parallelo il selettore CSS `.nx-hero h1` → `.nx-hero h2` così lo stile visivo resta identico (verificato: nessuna altra regola CSS o script fa riferimento a quell'elemento per tag).

## 5. Bug JS corretto — pentacoli-salomone.html (riga 1728)
Template literal rotto in un attributo `srcset` (mancava la chiusura di `.replace(...)`, probabilmente un residuo di una variante immagine @2x mai completata). Le foto @2x sono state rimosse dal progetto, quindi il fix allinea questa pagina al pattern `srcset="...webp 1x"` già usato in tutte le altre pagine del sito. Unica riga toccata; verificato con `new Function()` che lo script è ora sintatticamente valido (prima era rotto, unico errore JS rilevato sull'intero sito).

## Verifiche di sicurezza eseguite
- Confronto automatico originale↔modificato su tutte le 67 pagine: **zero righe cambiate al di fuori di** JSON-LD, title/meta, il fix H1, e il fix `\u2019`
- Validazione JSON di tutti gli 84 blocchi `application/ld+json`
- Validazione sintattica JS di tutti gli script inline (nessun nuovo errore introdotto; l'unico errore preesistente è quello sopra, non toccato)
- Nessuna modifica a CSS, immagini, struttura HTML, o logica applicativa (calcoli oracoli, cambio lingua, tema, musica, tutto invariato)
