# 🚀 Guide de Déploiement Rapide - TimeTravel Agency

## Option 1 : Vercel (Recommandé) ⚡

### Méthode A : Avec Git
1. Créer un repo GitHub et push le code
2. Aller sur [vercel.com](https://vercel.com)
3. Cliquer sur "New Project"
4. Importer le repo GitHub
5. Cliquer sur "Deploy"
6. ✅ C'est déployé !

### Méthode B : Sans Git (Drag & Drop)
1. Aller sur [vercel.com](https://vercel.com)
2. Créer un compte gratuit
3. Drag & drop le dossier `timetravel-agency`
4. ✅ Déployé automatiquement !

### Méthode C : CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions
```

---

## Option 2 : Netlify 🌐

### Méthode Drag & Drop
1. Aller sur [netlify.com](https://netlify.com)
2. Se connecter
3. Drag & drop le dossier `timetravel-agency`
4. ✅ Déployé !

### Avec Git
1. Push le code sur GitHub
2. Sur Netlify : "New site from Git"
3. Sélectionner le repo
4. Build settings : Laisser vide (site statique)
5. Deploy !

---

## Option 3 : GitHub Pages 📚

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit"

# Créer un repo sur GitHub
# Puis :
git remote add origin [URL_REPO]
git push -u origin main

# Sur GitHub :
# Settings > Pages > Source: main branch
```

---

## Option 4 : Cloudflare Pages ☁️

1. Push le code sur GitHub
2. Aller sur [pages.cloudflare.com](https://pages.cloudflare.com)
3. "Create a project"
4. Connecter le repo GitHub
5. Deploy !

---

## Test Local 🧪

### Avec Python
```bash
# Python 3
python -m http.server 8000

# Ouvrir : http://localhost:8000
```

### Avec Node.js
```bash
# Installer serve
npm install -g serve

# Lancer
serve .

# Ouvrir l'URL indiquée
```

### Avec VS Code
- Installer l'extension "Live Server"
- Clic droit sur index.html > "Open with Live Server"

---

## Après déploiement 📝

1. **Tester l'URL** sur mobile et desktop
2. **Vérifier** :
   - Hero section s'affiche correctement
   - Cards de destinations cliquables
   - Modal s'ouvre
   - Chat fonctionne
   - Quiz s'affiche et fonctionne
3. **Copier l'URL** pour la rendre sur Moodle
4. **Mettre à jour** le README avec l'URL finale

---

## URLs de déploiement types

- Vercel : `https://timetravel-agency.vercel.app`
- Netlify : `https://timetravel-agency.netlify.app`
- GitHub Pages : `https://[username].github.io/timetravel-agency`
- Cloudflare : `https://timetravel-agency.pages.dev`

---

## Troubleshooting 🔧

### Le site ne s'affiche pas
- Vérifier que `index.html` est à la racine
- S'assurer que tous les fichiers sont présents

### Le chatbot ne fonctionne pas
- Vérifier que `script.js` est bien chargé
- Ouvrir la console (F12) pour voir les erreurs

### Le style est cassé
- Vérifier la connexion internet (Tailwind CSS via CDN)
- Vérifier que le CDN Tailwind est accessible

---

## 🎉 Félicitations !

Votre webapp TimeTravel Agency est maintenant en ligne !

N'oubliez pas de :
- ✅ Ajouter l'URL dans le README
- ✅ Tester toutes les fonctionnalités
- ✅ Prendre des screenshots
- ✅ Rendre sur Moodle avant la deadline

**Bon voyage temporel !** 🕰️

JEHAM Laurie
BORELLO Benjamin
DICKO Fatim
MARTHELY Davy