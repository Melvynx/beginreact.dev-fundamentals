# Ajout du JSX

C'est l'heure de faire du vrai React ! On va ajouter le JSX dans le fichier HTML.

Le JSX est juste un moyen plus "lisible" d'écrire du React. Il ressemble
a du HTML, mais il sera compilé par React.

```js
const element = <div id="test">Hey</div>;

// compilé par React

const element = React.createElement("div", { id: "test" }, "Hey");
```

⚠️ J'ai ajouté un nouveau script "Babel" et j'ai changé le type du fichier.

## Exercice 1

Donc on va refaire ce qu'on a fait dans l'exercice 1.1 mais avec JSX.
Les indications sont dans le fichier de l'exercice.

💌 Tu apprends à utiliser le JSX.

## Exercice 2 - Création de composant avec JSX

Maintenant on va créer un composant.

Pour ça il suffit de créer une fonction qui retourne un élément JSX.

```js
const Composant = () => {
  return <div>Hello</div>;
};
```

Tu peux créer un composant `Message` qui affiche "I'm a message" dans un `p`.

Et ajouter ce composant dans `elements`.

Un composasnt (une function) s'utilise comme une `div` ou tout autre élément :

```jsx
<div></div>

<Composant></Composant>
```

💌 Tu apprends l'usage des composants avec les fonctions.

## Exercice 3 - Utilisation de la props children

Et si on veut customiser le composant, comment on fait ?

A la place de retourner "I'm a message" je voudrais pouvoir utiliser le composant
comme ceci :

```js
<Message>Mon message ici</Message>
```

Pour ceci, je te laisse aller lire [📖 cette documentation](https://fr.reactjs.org/docs/glossary.html#propschildren).

💌 Tu apprends l'utilisation du children.

## Exercice 4 - Ajout de props

Ajout d'un auteur.

Maintenant notre message doit afficher : "{author} : {message}"

Pour pouvoir l'utiliser comme ça :

```jsx
<Message author="Melvynx">Hello</Message>
```

Donc il faut rajouter une nouvelle props.

Pour les props, tu peux aller voir la documentation [📖 react sur les props](https://fr.reactjs.org/docs/glossary.html#propschildren).

Tu peux rajouter dans éléments la props "author" et ajouter un nouveau message pour répondre au premier message.

💌 Tu apprends l'utilisation des props.

## Exercice 5 - Compiler babel

Maintenant, utilise le [compiler babel](https://babeljs.io/repl/) pour récupérer
le code sans JSX de l'exercice précédent.

Tu peux copier coller ton code à l'intérieur.

Le code que tu récupères ici **c'est celui que ton navigateur comprend**. Le JSX est
incompréhensible pour lui. Lorsque que tu save le fichier, ton navigateur vas
transformé le code JSX en code JS avec `React.createElement.`

💌 Tu comprends le fonctionnement de JSX avec Babel.
