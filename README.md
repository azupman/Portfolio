# E-portfolio — Alexandre Enderlin

Portfolio réalisé dans le cadre du BUT GEA, parcours Gestion Comptable, Fiscale et Financière (GC2F), à l'IUT de Paris Rives de Seine.

Site statique **regroupé dans un seul fichier** `index.html` : tout le HTML, le CSS et le JavaScript y sont réunis. Aucune dépendance, aucun framework, aucune étape de build.

## Éditer le site dans Sublime Text

1. Ouvrir Sublime Text → menu **Project › Open Project…**
2. Sélectionner le fichier `eportfolio.sublime-project` à la racine de ce dossier.
3. Ouvrir `index.html` : c'est le seul fichier de code à modifier.
   - Le **CSS** se trouve dans la balise `<style>` (en haut, dans le `<head>`).
   - Le **JavaScript** (menu mobile, animations, navigation) est dans la balise `<script>` (en bas).
   - Chaque « page » est une section `<section class="page" id="...">` dans le `<body>`.

### Voir le rendu en local

- **Le plus simple** : double-cliquer sur `index.html` pour l'ouvrir dans le navigateur.
- **Avec serveur local** (recommandé, pour que la bande-son et les liens fonctionnent comme en ligne) :
  dans Sublime Text, lancer le build **« Aperçu du site (serveur local) »**
  via **Tools › Build System › Aperçu du site**, puis **Tools › Build** (`Cmd + B`).
  Le site est alors accessible sur http://localhost:8000

## Comment fonctionne le fichier unique

Le site est une application d'une seule page : toutes les rubriques cohabitent dans `index.html` et un petit routeur JavaScript affiche la bonne section selon l'ancre de l'URL.

| Rubrique | Ancre | Sections internes |
|---|---|---|
| Accueil (pitch, carte, bande-son) | `#index` | — |
| Itinéraire (expériences, SAE) | `#experiences` | `#exp-bjcv`, `#exp-rexel`, `#exp-nexans`, `#exp-conseil` |
| Les 5 compétences GC2F | `#competences` | `#comp-analyser`, `#comp-decider`, `#comp-piloter`, `#comp-produire`, `#comp-evaluer` |
| Échappées (course, voyages, engagement) | `#a-cote` | `#cote-course`, `#cote-voyages`, `#cote-engagement` |
| Profil + CV téléchargeable | `#qui-suis-je` | — |

Les seuls fichiers externes sont les médias : photos (`photo-profil.jpg`, `marathon-*.jpg`),
captures et documents de traces (`trace-*.jpg`, `trace-*.pdf`), le CV (`CV_Alexandre_Enderlin.pdf`)
et la bande-son (`bande-son.mp3`).

## Mise en ligne

Le dossier est publiable tel quel sur GitHub Pages, Netlify ou tout hébergeur statique
(le fichier `.nojekyll` est déjà présent pour GitHub Pages). `index.html` est servi automatiquement.
