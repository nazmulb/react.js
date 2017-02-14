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

In server-side frameworks like Express and Koa, middleware is some code you can put between the framework receiving a request, and the framework generating a response.

Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. **It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.**

Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's ```dispatch``` method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

The middleware signature is ```js ({ getState, dispatch }) => next => action```.

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