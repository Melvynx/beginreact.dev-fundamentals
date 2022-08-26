# JS sans React

Cette exercise va t'aider à mieux comprendre ou React apporte de la valeur.
On va commencer en faisant du React... sans React...

Puis dans l'exercise 2 on va modifié ce code AVEC React sans JSX.

Oui on va faire du simple JavaScript avec la gestion du DOM.
1. Pour te rafraichir la mémoire
2. Pour mieux comprendre React par la suite !

## Exercise

Le but est tout simplement d'afficher une div sur la page, juste avec du JavaScript.

⚠️ Le `innerHtml` est interdit.

💌 Tu apprends à afficher un élément en utilisant JavaScript uniquement.

## Exercise 2

Quand tu cliques sur notre div "Hello", ajoute un cœur sur la page.

Regarde-le résulta de la solution 2 (pas le code, mais le rendu) et essai de cliquer sur la div.

💌 Tu apprends à gérer un événement sans React.

## Exercise 3

Maintenant crée un composant "Counter" qui affiche un bouton. Quand tu cliques sur le bouton, 
le compteur doit s'incrémenter d'un.

Tu pourras ajouter ce composant à la div "root". Il faut savoir que ce composant doit être une fonction, 
qui peut être appelé plusieurs fois si besoin.

Voici le début du code pour t'aider :

```js
const Counter = () => {
  const button = ''; // remplace "" par la création d'un bouton
  button.addEventListener('click', () => {
    /* increment counter */
  });
  return button;
};
```

Ajoute deux counter à ta page pour vérifier que ton "composant" fonctionne 
même plusieurs fois.

Regarde-le résulta de la solution 3 et essai de cliquer sur la div.

💌 Tu apprends à faire des composants sans React !
