# Syntaxes ES6 et ES6+

En préambule, prenez un moment pour lire ce résumé de l'évolution du langage Javascript au cours des dernières décennies : https://javascript.developpez.com/actu/267495/L-historique-de-JavaScript-Brendan-Eich-l-a-ecrit-en-seulement-10-jours-et-c-est-ainsi-qu-il-a-change-le-monde-pour-toujours/


Ces exercices ont pour but de vous familiariser avec les principales nouveautés introduites par la version ES6 (ou ES2015) du langage.

Pour les réaliser, vous pourrez vous appuyer sur le site Mozilla Developer Network (MDN) qui documente et illustre les notions abordées ci-dessous.

* Let : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
* Const : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const
* Arrow functions : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
* Object.keys : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
* Object.values : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/values
* Destructuring : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
* Import / Export - Modules JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules
* Promises : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses

Pour chaque exercice, placez-vous dans le dossier indiqué et ouvrez le fichier index.html avec Firefox ou Chrome, au choix.

## Variables `let` et `const`
➡️ Exercice à réaliser dans le dossier `1-variables`

### Section 1
1. Remplacez toutes les occurences de `var` par `let`.
2. Constatez que le code s'exécute toujours sans erreur. Expliquez pourquoi.
3. Remplacez toutes les occurences de `let` par `const`.
4. Expliquez l'erreur.
5. Corrigez le code en conservant le maximum de valeurs constantes.


### Section 2
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez l'absence d'erreur.

### Section 3
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez l'erreur.
3. Corrigez le code en conservant le maximum de valeurs constantes

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Arrow functions
➡️ Exercice à réaliser dans le dossier `2-functions`

### Section 1
Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion.

### Section 2
1. **Avant toute modification : assurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.**
2. Convertissez la fonction `showThis` en notation "Arrow function".
3. Observez le résultat. Que pouvez-vous en conclure ?

### Section 3
Complétez le code pour reproduire le comportement de la section 1 mais cette fois-ci grâce à l'objet `odile`. Vous utiliserez dès que possible des "Arrow functions".

**COMMITTEZ VOS CHANGEMENTS 🚢**

## `Object.keys` & `Object.values`
➡️ Exercice à réaliser dans le dossier `3-objects`

### Section 1
Afficher les caractéristiques du véhicule sours la forme `clé : valeur` (Ex: `id: 3221`).

### Section 2
Le fichier `data.js` comporte un tableau des perturbations du réseau de transport Grenoblois. Pour chacune des perturbations, afficher le champ texte.

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Destructuring
➡️ Exercice à réaliser dans le dossier `4-destructuring`

### Section 1
1. Prenez le temps de bien comprendre le code de la première partie, en le commentant.
2. Afficher le 3e élément du tableau ainsi que la propriété `age` de l'objet.

### Section 2
Le fichier `data.js` comporte un tableau des perturbations du réseau de transport Grenoblois. Pour chacune des perturbations, récupérez leur texte, date de début et date de fin dans des variables puis affichez-les.

Après ce premier exercice, prenez connaissance du guide MDN sur le destructuring : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition

Vérifiez que le code réalisé dans cet exercice est bien optimal compte-tenu des exemples fournis par MDN. Optimisez-le si nécessaire.

### Section 3

Il est possible de destructurer le(s) paramètre(s) d'une fonction, cela permet d'émuler les paramètres nommés de certains langages.
Créer une fonction qui prend en paramètre une un objet *perturbation* et l'ajoute dans le l'objet `data` précédent. Cette fonction devra déstructurer le paramètre et fournir des valeurs par défaut pour les champs non essentiels (`type`, `heureDebut`, `heureFin`, `latitude`, ....).
Faites des appels à votre fonction et vérifier que le résultat est cohérent.

### Section 4

Avec l'opérateur rest (`...`), on peut mettre tous ou certains des paramètres dans un tableau, cela permet de gérer un nombre variable de paramètres.
Ecrire une fonction qui prend un nombre indéfini de paramètre et les affiche dans la console.


**COMMITTEZ VOS CHANGEMENTS 🚢**

## Import / Export
➡️ Exercice à réaliser dans le dossier `5-import`
__⚠ Cet exercice est à exécuter soit sous Firefox soit sous Chrome avec un serveur de développement (via WebStorm, ou WAMP, http-server...)__

**Rappel** - Avant de réaliser cet exercice, prenez connaissance du guide MDN sur le sujet : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules

### Section 1
1. Lire et comprendre le code déjà écrit dans la première partie.
2. Importer et utiliser la fonction `showError`.
2. Importer et utiliser la fonction anonyme définie à la fin du fichier.

### Section 2
Exporter les fonctions du fichier `math.js` pour pouvoir les utiliser dans le script principal (`script.js`).

**COMMITTEZ VOS CHANGEMENTS 🚢**

## Promises
➡️ Exercice à réaliser dans le dossier `6-promises`

**Rappel** - Avant de réaliser cet exercice, prenez connaissance du guide MDN sur le sujet : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses

### Section 1

1. Observer et expliquer l'ordre des messages affichés dans la console.
2. Utiliser les `promises` afin que les messages s'enchaînent dans le bon ordre (1, 2, 3).
3. Remplacer l'appel à la fonction second() par secondWithError() afin de simuler une erreur lors de l'exécution.
4. Modifier le code afin de ne pas briser la chaîne des appels malgré tout.
5. Modifier le code afin d'afficher le message d'erreur entre les messages 1 et 3.


### Section 2

Regarder l'API fetch (https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch), qui fait une requête http et retourne la réponse sous la forme d'une promise.

Vous allez ensuite utiliser fetch pour faire des appels à l'API  Star Wars (https://swapi.dev/).

1. Écrire une fonction qui fait une requête pour récupérer les caractéristiques de l'espèce avec l'id 1 (les humains).
2. Écrire une fonction, qui va chaîner l'appel à la fonction précédente pour récupérer les caractéristique du premier personnage du tableau people.
3. Écrire un fonction pour récupérer, **en parallèle**, les fiches de tous les personnages d'une espèce données pour afficher leurs noms. Pour que l'exécution ait lieu en parallèle, une fois que vous avez les urls de vos personnages, il faut appeler fetch sur chacune des urls sans attendre que celles-ci soient résolues. Pour cela, vous aurez besoin de `Array.map` pour convertir un tableau d'urls en tableau de promises (avec fetch) et un  `Promise.all` pour attendre la résolution de toutes vos promesses (l’exécution de vos requêtes).

### Section 3

1. Modifier votre code pour ajouter deux boutons dans la page : 'OK' et 'Cancel'
2. Créer un fonction qui retourne une promise qui se résoudra (resolve) quand le bouton 'OK' est cliqué et échouera (reject) quand le bouton 'Cancel' est cliqué.
3. Utiliser cette fonction pour afficher "Ok clicked" ou "Cancel clicked" dans la console


**COMMITTEZ VOS CHANGEMENTS 🚢**

## async/await
➡️ Exercice à réaliser dans le dossier `7-async-await`

Les promesses sont les briques de base pour gérer l'asynchronisme, mais certains codes restent compliqués à lire et à écrire (les boucles et les appels interdépendants entre autres).

C'est pourquoi ont été introduits les mots clé `async`/`await` qui permettent d'écrire du code asynchrone plus facilement.
Prenez connaissance de https://blog.eleven-labs.com/fr/asyncawait/ ou https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await

1. Regarder dans le fichier script.js et les messages de la console. Expliquez pourquoi "= b = ..." s'affiche au milieu de l'éxecution de la fonction main. Est-ce un problème ?
2. Refaire toute la section 2 de l'exo 6 (fetch sur API) en utilisant `async`/`await`

**COMMITTEZ VOS CHANGEMENTS 🚢**



