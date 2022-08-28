# Ajout du JSX

C'est l'heure de faire du vrai React ! On va ajouter le JSX dans le fichier HTML.

Le JSX est juste un moyen plus "lisible" d'écrire du React. Il ressemble
a du HTML, mais il sera compilé par React.

```js
const element = <div id="test">Hey</div>;

// compilé par React

const element = ReactDOM.createElement('div', { id: 'test' }, 'Hey');
```

## Exercice 1

Donc on va refaire ce qu'on a fait dans l'exercice 1.1 mais avec JSX.
Les indications sont dans le fichier de l'exercice. Ecoute 

## Exercice 2

Maintenant on va créer un composant.

Pour ça il suffit de créer une fonction qui retourne un élément JSX.

```js
const Composant = () => {
  return <div>Hello</div>;
};
```

Tu peux créer un composant "Message" qui affiche "I'm a message" dans un `p`.

Et ajouter ce composant dans `elements`.

## Exercice 3

Et si on veut customiser le composant, comment on fait ?

A la place de retourner "I'm a message" je voudrais pouvoir utiliser le composant
comme ceci :

```js
<Message>Mon message ici</Message>
```

Pour ceci, je te laisse aller lire [cette documentation](https://fr.reactjs.org/docs/glossary.html#propschildren).

## Exercice 4

Ajout d'un auteur.

Maintenant notre message doit afficher : "{author} : {message}"

Donc il faut rajouter une nouvelle props.

Pour les props, tu peux aller voir la documentation [react sur les props](https://fr.reactjs.org/docs/glossary.html#propschildren).

Tu peux rajouter dans éléments la props "author" et ajouter un nouveau message pour répondre au premier message.

## Exercice 5 (pas de code)

Maintenant, utilise le [compiler babel](https://babeljs.io/repl/) pour récupérer
le code sans JSX de l'exercice précédent.

Le code que tu récupères ici **c'est celui que ton navigateur comprend**. Le JSX est
incompréhensible pour lui.
