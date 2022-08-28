# Ajout de React

En partant sur un fichier HTML comme précédemment, on va ajouter React.

Dans le fichier de l'exercice, j'ai déjà ajouté les deux Scripts qui 
te permettent de faire du React.

⚠️Il n'y a pas de JSX. Pour que tu puisses totalement comprendre
le JSX on va faire sans, et tu vas découvrir le bonheur quand tu seras avec.

⚠️On utilise des CDN, donc on télécharge tout React dans notre projet. C'est
normal si c'est un peu lent surtout si tu n'as pas beaucoup de connexion.

## Exercice 1

Le but est de refaire ce qu'on a fait dans "1-pas-de-react" dans l'exercice 1, mais en React.

Pour ça il va falloir utiliser [react-dom](https://reactjs.org/docs/react-dom-client.html#createroot). 
Clique sur le lien pour comprendre comment il fonctionne. J'en parle dans la vidéo Solution 1 si tu ne comprends pas tout.

ReactDOM comme on l'a vu sur la vidéo d'intro "C'est quoi le DOM Virtuel ?" permet d'optimiser
le rendu afin d'avoir une page web plus rapide qui met à jour uniquement les éléments souhaités.

Ensuite, il va falloir créer un élément React. Avant en JS on faisait 
`document.createElement('div')` en React on fait `React.createElement('div', props, ...children)`.

Les props sont l'équivalent des propriétés de l'HTML et le children c'est ce qu'on met entre les deux `> <`.

```jsx
<div id="test">Hey</div>

// =

React.createElement('div', {id: 'test'}, "Hey")
```

Tu peux aller voir cette documentation pour réaliser l'exercice. [createElement](https://reactjs.org/docs/react-api.html#createelement)

Voici un exemple de ReactDOM :

```js
const props = { id: 'test' };
const elementType = 'h1';
const children = 'Hey';

const element = ReactDOM.createElement(elementType, props, children);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

💌 Tu comprends comment fonctionne l'API de React **sans le JSX**.

## Exercice 2

Tu as le bouton Start. Maintenant on aimerait ajouter des informations autour.

Reproduis cet HTML en utilisant React.

```html
<!-- c'est `element` de l'exercice 1 -->
<div>
  <h1>Lance la partie !</h1>
  <div>
    <!-- 💡 notre button crée précédemment -->
    <button id="start">Start</button>
    <!-- 💡 Nouvelle élément-->
    <button>Stop</button>
  </div>
</div>
```

💌 Tu apprends à réaliser un markup HTML en utilisant ReactDOM.

## Exercice 3

Les listes en React sont incontournables.

J'ai envie d'afficher un élément en fonction d'un tableau `fruits` :

```js
const fruits = ['pomme', 'poire', 'fraise', 'cerise'];
```

Notre nouveau HTML ressemble à : 
```html
<div>
  <h1>Lance la partie !</h1>
  <div>
    <button id="start">Start</button>
    <button>Stop</button>
  </div>
  <ul>
    <li>pomme</li>
    <li>poire</li>
    <li>fraise</li>
    <li>cerise</li>
  </ul>
</div>
```

Pour comprendre les `children` voici un exemple :

```html
<div>
  <p>I'm a children</p>
  <span>I'm a children</span>
  <button>I'm a children</button>
</div>
```

Tout ce qui est entre les `<div>` est un `children` de celui-ci. En React
on a deux moyens d'afficher ses enfants avec `React.createElement` :

```js
ReactDOM.createElement("div", 
  null, 
  React.createElement("p", null, "I'm an children"), 
  React.createElement("span", null, "I'm an children"), 
  React.createElement("button", null, "I'm an children")
);
```

Ici on les passe sous forme de paramètre : `children1, children2 etc...`

Mais les paramètres acceptent aussi des **tableaux** !

```js
const childrens = [
  React.createElement("p", null, "I'm an children"), 
  React.createElement("span", null, "I'm an children"), 
  React.createElement("button", null, "I'm an children")
];
ReactDOM.createElement("div", null, childrens);
```

**N'oublie jamais ça** !

Donc pour réaliser cet exercice il te faut prendre le tableau `fruits` et
le transformer en children en utilisant `.map`.

💡Tips

```js
const childrens = fruits.map(fruit => {
  return /* todo */;
});
```

Puis `append` ce tableau dans un élément `ul` !

💥 Dans le prochain module, on verra plus en détail les listes avec JSX.

💌 Tu comprends comment fonctionne les listes en React afin d'être
prêt pour utiliser du JSX.