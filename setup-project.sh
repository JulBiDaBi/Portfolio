
#!/usr/bin/env bash
set -euo pipefail

# --- Configuration (edit if needed) ---
REQUIRED_NODE_MAJOR=18
REQUIRED_NPM_MAJOR=9

# --- Helpers ---
have_cmd() { command -v "$1" >/dev/null 2>&1; }

semver_major() {
  # extracts the major version from semver-like strings
  # inputs like: v18.19.0, 18.19.0, 9.2.0
  local raw="$1"
  raw=${raw#v}
  echo "$raw" | cut -d. -f1
}

assert_version() {
  local name="$1" current_major="$2" required_major="$3"
  if [ "$current_major" -lt "$required_major" ]; then
    echo "[ERREUR] ${name} majeur >= ${required_major} requis (actuel: ${current_major})." >&2
    exit 1
  fi
}

# --- Check current directory ---
if [ ! -f "package.json" ]; then
  echo "[INFO] Aucun package.json trouvé. Le script continue mais l'installation npm sera sautée." >&2
fi

# --- Ensure Node.js ---
if have_cmd node; then
  NODE_MAJOR=$(semver_major "$(node -v)")
  echo "[OK] Node détecté: $(node -v)"
  assert_version "Node" "$NODE_MAJOR" "$REQUIRED_NODE_MAJOR"
else
  echo "[WARN] Node non détecté. Tentative via nvm si disponible…"
  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    # shellcheck source=/dev/null
    . "$HOME/.nvm/nvm.sh"
    nvm install ${REQUIRED_NODE_MAJOR}
    nvm use ${REQUIRED_NODE_MAJOR}
  else
    echo "[ERREUR] Node.js n'est pas installé et nvm est indisponible. Installez Node ${REQUIRED_NODE_MAJOR}+ puis relancez." >&2
    exit 1
  fi
fi

# --- Ensure npm ---
if have_cmd npm; then
  NPM_MAJOR=$(semver_major "$(npm -v)")
  echo "[OK] npm détecté: $(npm -v)"
  assert_version "npm" "$NPM_MAJOR" "$REQUIRED_NPM_MAJOR"
else
  echo "[ERREUR] npm n'est pas installé." >&2
  exit 1
fi

# --- Install dependencies ---
if [ -f package-lock.json ]; then
  echo "[INFO] Installation déterministe via npm ci…"
  npm ci
elif [ -f package.json ]; then
  echo "[INFO] Installation via npm install…"
  npm install
else
  echo "[INFO] Aucun package.json. Étape npm ignorée."
fi

# --- Optional build/dev steps ---
if npx --yes --help >/dev/null 2>&1; then
  if npx --yes --no-install --quiet vite -v >/dev/null 2>&1; then
    echo "[INFO] Projet Vite détecté. Pour lancer: npm run dev (ou npx vite)."
  fi
fi

if jq -r '.scripts.build // empty' package.json >/dev/null 2>&1; then
  echo "[INFO] Script npm build détecté. Exécution du build…"
  npm run build
else
  echo "[INFO] Aucun script build détecté. Étape build ignorée."
fi

echo "[SUCCÈS] Environnement prêt. Vous pouvez lancer le projet avec 'npm start' ou 'npm run dev' si défini."
