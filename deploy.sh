#!/bin/bash
# ============================================================
# MYSTICA ORACOLI — Script di Deploy Automatico
# Uso: ./deploy.sh "descrizione modifica"
# ============================================================

# Data e timestamp odierni
DATE=$(date +%Y-%m-%d)
TS=$(date +%Y%m%d%H%M)

echo "🔮 MYSTICA Deploy — $DATE"
echo ""

# ── 1. Aggiorna CACHE_NAME in sw.js ─────────────────────────
sed -i "s/const CACHE_NAME = 'mystica-[^']*'/const CACHE_NAME = 'mystica-$TS'/" sw.js
echo "✅ sw.js  → CACHE_NAME = mystica-$TS"

# ── 2. Aggiorna APP_BUILD_DATE in index.html ─────────────────
sed -i "s/const APP_BUILD_DATE = '[^']*'/const APP_BUILD_DATE = '$DATE'/" index.html
echo "✅ index.html → APP_BUILD_DATE = $DATE"

# ── 3. Aggiorna APP_VERSION (patch automatico) ───────────────
# Legge la versione attuale e incrementa il patch number (es. 1.0.3 → 1.0.4)
CURRENT=$(grep -o "const APP_VERSION = '[^']*'" index.html | grep -o "[0-9]*\.[0-9]*\.[0-9]*")
MAJOR=$(echo $CURRENT | cut -d. -f1)
MINOR=$(echo $CURRENT | cut -d. -f2)
PATCH=$(echo $CURRENT | cut -d. -f3)
NEW_PATCH=$((PATCH + 1))
NEW_VERSION="$MAJOR.$MINOR.$NEW_PATCH"
sed -i "s/const APP_VERSION = '[^']*'/const APP_VERSION = '$NEW_VERSION'/" index.html
echo "✅ index.html → APP_VERSION = $NEW_VERSION"

echo ""

# ── 4. Git commit + push ─────────────────────────────────────
MSG=${1:-"Deploy $DATE - v$NEW_VERSION"}

git add index.html sw.js
git commit -m "$MSG"
git push

echo ""
echo "🚀 Deploy completato! v$NEW_VERSION — $DATE"
echo "   Gli utenti esistenti vedranno il banner di aggiornamento entro ~1 minuto."
