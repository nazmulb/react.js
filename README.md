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
The whole state of your app is stored in an object tree inside a single store. We defined the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.

The Store is the object that brings them together. **The store has the following responsibilities**:

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

- **An action informing the reducers that the request began.** The reducers may handle this action by toggling an isFetching flag in the state. This way the UI knows it's time to show a spinner.

- **An action informing the reducers that the request finished successfully.** The reducers may handle this action by merging the new data into the state they manage and resetting isFetching. The UI would hide the spinner, and display the fetched data.

- **An action informing the reducers that the request failed.** The reducers may handle this action by resetting isFetching. Additionally, some reducers may want to store the error message so the UI can display it.


## React & Redux Life Cycle:
<img alt="React &amp; Redux Life Cycle" src="https://raw.githubusercontent.com/nazmulb/react.js/master/React-Redux-Life-Cycle.jpg" height="450px" />