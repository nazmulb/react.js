# React.js
A javascript library for building user interfaces which is developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI by bundling HTML and Javascript, called `components`.

## React Features:
- **JSX** − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended. You can use Javascript and HTML into JSX file.
- **Components** − React is all about components. You need to think of everything as a component. Bundling Javascript and HTML into JSX makes components easily understandable. This will help you to maintain the code when working on larger scale projects.
- **Unidirectional data flow and Flux** − React implements one way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional. The concept "Flux" is simply that your view triggers an event (say, after user types a name in a text field), that event updates a model, then the model triggers an event, and the view responds to that model's event by re-rendering with the latest data. That's it.

## React Advantages:
- React uses virtual DOM which is JavaScript object. This will improve apps performance since JavaScript virtual DOM is faster than the regular DOM.
- React can be used on client and server side.
- Component and Data patterns improve readability which helps to maintain larger apps.
- React can be used with other frameworks.

## React Limitations:
- React only covers view layer of the app so you still need to choose other technologies to get a complete tooling set for development.
- React is using inline templating and JSX. This can seem awkward to some developers.

## Should I Use React?
Yes. Here's why you should use React:
- Works great for teams, strongly enforcing UI and workflow patterns
- UI code is readable and maintainable
- Componentized UI is the future of web development, and you need to start doing it now.

## Webpack:
Before setup React development environment please read <a href="https://github.com/nazmulb/webpack">webpack document</a>.

## Setup:
Here you can see how to set up environment for successful React development. Notice that there are many steps involved but this will help you to speed up development process later. We will need **NodeJS & NPM** so please <a href="https://nodejs.org/en/">install</a>.

### Step 1 - Install Global Packages:
You will need to install several packages globally for this setup. We will need some of the babel plugins, webpack and webpack-dev-server.

```js
npm install webpack webpack-dev-server babel babel-cli -g
```

### Step 2 - Create Root Folder:
The root folder will be named **reactApp**. After the folder is created we need to open it and create empty package.json file inside by running `npm init -y` from the command prompt.

```js
mkdir reactApp
cd reactApp
npm init -y
```

### Step 3 - Add Dependencies and plugins:
Since we want to use React, we need to install it first. The **--save** command will add these packages to **package.json** file.

```js
npm install react react-dom --save
```

We already mentioned that we will need some babel plugins so let's install it too.

```js
npm install webpack babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev
```

### Step 4 - Create files:

Let's create several files that we need. You can add it manually or you can use **command prompt**.

```js
touch index.html App.jsx main.js webpack.config.js
```

### Step 5 - Set Compiler, Server and Loaders:

Open **webpack-config.js** file and add the code below. We are setting webpack entry point to be **main.js**. Output path is the place where bundled app will be served. We are also setting development server to **8081** port. You can choose any port you want. And lastly, we are setting babel loaders to search for **js** files and use **es2015** and react **presets** that we installed before.

#### webpack.config.js

```js
var config = {
    entry: __dirname + '/main.js',

    output: {
        path: __dirname + '/build',
        publicPath: '/assets/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8081
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
```

Open the **package.json** and delete **"test" "echo \"Error: no test specified\" && exit 1"** inside **"scripts"** object. We are deleting this line since we will not do any testing here. Let's add the **start** command instead.

```js
"start": "webpack-dev-server --hot"
```

Now we can use `npm start` command to start the server. `--hot` command will add live reload after something is changed inside our files so we don't need to refresh the browser every time we change our code.

### Step 6 - index.html:
This is just regular HTML. We are setting **div id="app"** as a root element for our app and adding **index.js** script which is our bundled app file.

```html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>React App</title>
</head>

<body>
    <div id="app"></div>
    <script src="assets/index.js"></script>
</body>
</html>
```

### Step 7 - App.jsx and main.js:
This is the first react component. This component will render **Hello World!!!**.

#### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!!
            </div>
        );
    }
}

export default App;
```

We need to import this component and render it to our root **App** element so we can see it in browser.

#### main.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
```
> Whenever you want to use something, you need to `import` it first. If you want to make component usable in other parts of the app, you need to `export` it after creation and `import` it in the file where you want to use it.

### Step 8 - Running the Server:
The setup is finished and we can start the server by running:

```js
npm start
```

It will show you the port we need to open in browser, in our case **http://localhost:8081/**.

## JSX:
React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, but there are some pros that comes with it.

- JSX is faster because it performs optimization while compiling code to JavaScript.
- It is also type-safe and most of the errors can be caught during compilation.
- JSX makes it easier and faster to write templates if you are familiar with HTML.

### Using JSX:

JSX looks like regular HTML in most cases. We already used it in environment setup tutorial. Look at the code from **App.jsx** where we are returning **div**.

#### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}

export default App;
```

Even though it's similar to HTML, there are a couple of things you need to keep in mind when working with JSX.

### Nested Elements:

If you want to return more elements, you need to wrap it with one container element. Notice how we are using **div** as a wrapper for **h1, h2** and **p** elements.

#### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
         </div>
      );
   }
}

export default App;
```

### JavaScript Expressions:

JavaScript expressions can be used inside of JSX. You just need to wrap it with curly brackets **{}**. Example below will render **2**.

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{1+1}</h1>
         </div>
      );
   }
}

export default App;
```

You can not use **if else** statements inside JSX but you can use **conditional (ternary)** expressions instead. In example below variable **i** equals to **1** so the browser will render **true**, if we change it to some other value it will render **false**.

```jsx
import React from 'react';

class App extends React.Component {
   render() {

      var i = 1;

      return (
         <div>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}

export default App;
```

### Styling:

React recommends using inline styles. When you want to set inline styles, you need to use **camelCase** syntax. React will also automatically append **px** after the number value on specific elements. You can see below how to add **myStyle** inline to **h1** element.

```jsx
import React from 'react';

class App extends React.Component {
   render() {

      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return (
         <div>
            <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}

export default App;
```

### Comments:

When writing comments you need to put curly brackets **{}** when you want to write comment within children section of a tag. It is good practice to always use **{}** when writing comments since you want to be consistent when writing the app.

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            {//End of the line Comment...}
            {/*Multi line comment...*/}
         </div>
      );
   }
}

export default App;
```

### Naming Convention:

HTML tags are always using **lowercase** tag names, while React components **starts with Uppercase**.

#### NOTE
You should use **className** and **htmlFor** as XML attribute names instead of class and for.

This is explained on React official page −

> Since JSX is JavaScript, identifiers such as **class** and **for** are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like **className** and **htmlFor**, respectively.

# Redux
Redux is a **predictable** state container for JavaScript apps. Redux manages the state of your data.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux evolves the ideas of <a href="https://facebook.github.io/flux/">Flux</a>, but avoids its complexity by taking cues from <a href="http://elm-lang.org/">Elm</a>.

Flux is a pattern that helps keeping your data unidirectional. This data enters the app and flows through it in one direction until it is rendered on screen.

<img alt="Flux" src="https://raw.githubusercontent.com/nazmulb/react.js/master/react-flux-concept-image.jpg" width="500px" />

## Flux Elements:
- **Actions** − Actions are sent to dispatcher to trigger the data flow.
- **Dispatcher** − This is central hub of the app. All the data is dispatched and sent to the stores.
- **Store** − Store is the place where the application state and logic are held. Every store is maintaining particular state and it will update it when needed.
- **View** − The view will receive data from the store and re-render the app.

Redux doesn't have a Dispatcher or support many stores.

**Elm** is a programming language that compiles to JavaScript.  Elm also has its own virtual DOM implementation that is very fast compared to React, Angular, and Ember.

The **Elm Architecture** is a simple pattern for architecting webapps. The core idea is that your code is built around a Model of your application state, a way to update your model, and a way to view your model.

## To install the stable version:
```js
npm install --save redux
```

## You'll also need the React bindings and the developer tools.
```js
npm install --save react-redux
npm install --save-dev redux-devtools
```

Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in **the three principles of Redux**.

- **Single source of truth:** The state of your whole application is stored in an object tree within a single store. A single state tree also makes it easier to debug an application; it also enables you to persist your app's state in development, for a faster development cycle.

- **State is read-only:** The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state.

- **Changes are made with pure functions:**  To specify how the state tree is transformed by actions, you write pure reducers. Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree.

## Summary of core terms of Redux:

###### State:
The shape of the state is up to you: it can be a primitive, an array, an object, or even an Immutable.js data structure. The only important part is that you should not mutate the state object, but return a new object if the state changes.

###### Action:
An action is a plain object that represents an intention to change the state. The only way to change the state tree is to emit an action, an object describing what happened. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.

```js
const ADD_TODO = 'ADD_TODO'
```
```js
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

###### Action Creators:
Action creators are exactly that—functions that create actions. This makes them portable and easy to test. In Redux action creators simply return an action:

```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

###### Reducers:
Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers. The reducer is a pure function that takes the previous state and an action, and returns the next state. It describes how an action transforms the state into the next state.

```js
(previousState, action) => newState
```

It's very important that the reducer stays pure. Things you should never do inside a reducer:
- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random().

Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

###### Store:
A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

A store is not a class. It's just an object with a few methods on it. **The store has the following responsibilities**:

- Holds application state;
- Allows access to state via getState();
- Allows state to be updated via dispatch(action);
- Registers listeners via subscribe(listener);
- Handles unregistering of listeners via the function returned by subscribe(listener).

It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

```js
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)
```

###### Async Actions:

When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

Each of these two moments usually require a change in the application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronously. Usually, for any API request you'll want to dispatch at least three different kinds of actions:

- **An action informing the reducers that the request began.** The reducers may handle this action by toggling an ```isFetching``` flag in the state. This way the UI knows it's time to show a spinner.

- **An action informing the reducers that the request finished successfully.** The reducers may handle this action by merging the new data into the state they manage and resetting ```isFetching```. The UI would hide the spinner, and display the fetched data.

- **An action informing the reducers that the request failed.** The reducers may handle this action by resetting ```isFetching```. Additionally, some reducers may want to store the error message so the UI can display it.

You may use a dedicated ```status``` field in your actions:

```js
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }
```

Or you can define separate types for them:

```js
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```

###### What’s a thunk?!
A <a href="https://en.wikipedia.org/wiki/Thunk">thunk</a> is a function that wraps an expression to delay its evaluation.

```js
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2;

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;
```

###### Async Action Creators:
We can to use <a href="https://github.com/gaearon/redux-thunk">Redux Thunk middleware</a> for  asynchronous/AJAX/network calls. By using this middleware, an action creator can return a function instead of an action object. This way, the action creator becomes a thunk.

When an action creator returns a function, that function will get executed by the Redux Thunk middleware. This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. The function can also dispatch actions—like synchronous actions.

```js
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

function fetchPosts(subreddit) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(subreddit))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(subreddit, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
```

Without <a href="http://redux.js.org/docs/advanced/Middleware.html">middleware</a>, Redux store only supports synchronous data flow. This is what you get by default with createStore().

You may enhance createStore() with applyMiddleware(). It is not required, but it lets you express asynchronous actions in a convenient way.

<a href="https://github.com/gaearon/redux-thunk">Thunk middleware</a> isn't the only way to orchestrate asynchronous actions in Redux:

- You can use <a href="https://github.com/acdlite/redux-promise">redux-promise</a> or <a href="https://github.com/pburtchaell/redux-promise-middleware">redux-promise-middleware</a> to dispatch Promises instead of functions.
- You can use <a href="https://github.com/redux-observable/redux-observable">redux-observable</a> to dispatch Observables.
- You can use the <a href="https://github.com/yelouafi/redux-saga/">redux-saga</a> middleware to build more complex asynchronous actions.
- You can even write a custom middleware to describe calls to your API.

###### Middleware:

In server-side frameworks like <a href="http://expressjs.com/">Express</a> and <a href="http://koajs.com/">Koa</a>, middleware is some code you can put between the framework receiving a request, and the framework generating a response.

Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. **It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.**

Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's ```dispatch``` method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

The middleware signature is ```({ getState, dispatch }) => next => action```.

Each middleware receives Store's ```dispatch``` and ```getState``` functions as named arguments, and returns a function.

**Example: Custom Logger Middleware:**

```js
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('new state', store.getState());
    console.groupEnd(action.type);

    return result;
};
```

Here's how to apply it to a Redux store:

```js
import { createStore, combineReducers, applyMiddleware } from 'redux';

let todoApp = combineReducers(reducers);
let store = createStore(
  todoApp,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger)
);
```

That's it! Now any actions dispatched to the store instance will flow through ```logger```.

```js
// Will flow through both logger and crashReporter middleware!
store.dispatch(addTodo('Use Redux'));
```

## React & Redux Life Cycle:
<img alt="React &amp; Redux Life Cycle" src="https://raw.githubusercontent.com/nazmulb/react.js/master/React-Redux-Life-Cycle.jpg" height="450px" />