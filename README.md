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

### Step 1 - Create Root Folder:
The root folder will be named **reactApp**. After the folder is created we need to open it and create empty package.json file inside by running `npm init -y` from the command prompt.

```js
mkdir reactApp
cd reactApp
npm init -y
```

### Step 2 - Add Dependencies and plugins:
Since we want to use React, we need to install it first. The **--save** command will add these packages to **package.json** file.

```js
npm install react react-dom --save
```

Since we are using webpack to generate bundler install webpack, webpack-cli and webpack-dev-server.

```js
npm install webpack webpack-cli webpack-dev-server --save-dev
```

We already mentioned that we will need some babel plugins so let's install it too.

```js
npm install babel-core babel-loader babel-preset-react babel-preset-env --save-dev
```

### Step 3 - Create files:

Let's create several files that we need. You can add it manually or you can use **command prompt**.

```js
touch index.html App.jsx main.js webpack.config.js
```

### Step 4 - Set Compiler, Server and Loaders:

Open **webpack-config.js** file and add the code below. We are setting webpack entry point to be **main.js**. Output path is the place where bundled app will be served. We are also setting development server to **8081** port. You can choose any port you want. And lastly, we are setting babel loaders to search for **js** files and use env and react **presets** that we installed before.

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
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
}

module.exports = config;
```

Open the **package.json** and delete **"test" "echo \"Error: no test specified\" && exit 1"** inside **"scripts"** object. We are deleting this line since we will not do any testing here. Let's add the **start** and **build** commands instead.

```js
"start": "../../node_modules/.bin/webpack-dev-server --mode development --open --hot",
"build": "../../node_modules/.bin/webpack --mode production"
```

Now we can use `npm start` command to start the server. `--hot` command will add live reload after something is changed inside our files so we don't need to refresh the browser every time we change our code. And `--open` will open the browser.

### Step 5 - index.html:
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

### Step 6 - App.jsx and main.js:
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

### Step 7 - Running the Server:
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

### Choosing the Type at Runtime:

```jsx
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

### Props in JSX
You can pass any JavaScript expression as a prop, by surrounding it with **{}**. For example, in this JSX:

```jsx
<MyComponent foo={1 + 2 + 3 + 4} />
```
For `MyComponent`, the value of `props.foo` will be `10` because the expression `1 + 2 + 3 + 4` gets evaluated.

**if** statements and **for loops** are not expressions in JavaScript, so they can't be used in JSX directly. Instead, you can put these in the surrounding code. For example:

```jsx
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

### Spread Attributes:
If you already have `props` as an object, and you want to pass it in JSX, you can use `...` as a "spread" operator to pass the whole props object. These two components are equivalent:

```jsx
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```

## React and ReactDOM

- <a href="https://facebook.github.io/react/docs/react-api.html">React</a>
- <a href="https://facebook.github.io/react/docs/react-api.html">React.Component</a>
- <a href="https://facebook.github.io/react/docs/react-dom.html">ReactDOM</a>


## Functional and Class Components

The simplest way to define a component is to write a JavaScript function:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This function is a valid React component because it accepts a single "props" object argument with data and returns a React element. We call such components "functional" because they are literally JavaScript functions.

You can also use an ES6 class to define a component:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Stateless component

### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default App;
```

## Stateful component
State is the place where the data comes from. You should always try to make your state as simple as possible and minimize number of stateful components. If you have, for example, ten components that need data from the state, you should create one container component that will keep the state for all of them. We will set the state for owner component (`App`). The `Header` component is just added like in the last example since it doesn't need any state. Instead of content tag, we are creating `table` and `tbody` elements where we will dynamically insert `TableRow` for every object from the `data` array.

### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         data:
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },

            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },

            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }

   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;
```

### main.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
```

#### NOTE
Notice that we are using `key = {i}` inside `map()` function. This will help React to update only necessary elements instead of re-rendering entire list when something change. It is huge performance boost for larger number of dynamically created elements.

## Difference between State and Props?

There are two types of data that control a component: props and state.

### State:
- State is the place where the data comes from that can be updated and changed (**mutable**).
- State is **private** to the components that means you can't use parent component's state from child.

### Props:
- props (short for properties) are a Component's **configuration**.
- Props are **immutable**.


## State and Props

The example below shows how to combine state and props in your app. We are setting `state` in our parent component and passing it down the component tree using `props`. Inside `render` function, we are setting `headerProp` and `contentProp` that are used in child components.

### App.jsx

```jsx
import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from props...",
         "content": "Content from props..."
      }
   }

   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;
```

### main.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
```

> Please read this page for <a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html">Typechecking with PropTypes</a>.

## Component Lifecycle Methods

- **componentWillMount** is executed before rendering, on both server and client side.
- **componentDidMount** is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur.
- **componentWillReceiveProps** is invoked as soon as the props are updated before another render is called.
- **shouldComponentUpdate** should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.
- **componentWillUpdate** is called just before rendering.
- **componentDidUpdate** is called just after rendering.
- **componentWillUnmount** is called after the component is unmounted from the dom. We are unmounting our component in main.js.

<img alt="React Component Life Cycle Creation" src="https://raw.githubusercontent.com/nazmulb/react.js/master/images/React-Com-Life-Cycle-Creation.png" height="700px" />
<img alt="React Component Life Cycle Update" src="https://raw.githubusercontent.com/nazmulb/react.js/master/images/React-Com-Life-Cycle-Update.png" height="700px" />

### App.jsx

```jsx
import React from 'react';
import Content from './Content.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);

        console.log('Component construct');
    };

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }

    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

export default App;
```

### Content.jsx

```jsx
import React from 'react';

class Content extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {

        if(!Object.is(newProps.myNumber, this.props.myNumber)){
            console.log('Component SHOULD UPDATE!');
            return true;
        }

        console.log('Component SHOULDN\'T UPDATE!');
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Content;
```

### main.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
```

## Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().

An input form element whose value is controlled by React in this way is called a "controlled component".

We can write the form as a controlled component:

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Uncontrolled Components (ref callback)

In most cases, I recommend using ***controlled components*** to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

For example, this code accepts a single name in an uncontrolled component:

```jsx
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Since an uncontrolled component keeps the source of truth in the DOM, it is sometimes easier to integrate React and non-React code when using uncontrolled components. It can also be slightly less code if you want to be ***quick and dirty***. Otherwise, you should usually use controlled components.

> ***String Refs*** where the ref attribute is a `string`, like "textInput", and the DOM node is accessed as `this.refs.textInput`. We shouldn't use string refs because string refs have some issues, are considered legacy, and ***are likely to be removed in one of the future releases***. If you're currently using `this.refs.textInput` to access refs, I recommend the callback pattern instead.

## Thinking in React

Please read <a href="https://facebook.github.io/react/docs/thinking-in-react.html">this page</a> which is very important for everyone to work with React.

## Some tips about React

- You should use Composition instead of Inheritance.
- Single State of App: You should always try to make your state as simple as possible and minimize number of stateful components. If you have, for example, ten components that need data from the state, you should create one container component that will keep the state for all of them.
- You should use controlled component and if need then use ref callback for uncontrolled component.
- <a href="https://github.com/airbnb/javascript/blob/master/react/README.md">React/JSX Style Guide</a>

# Redux
Redux is a **predictable** state container for JavaScript apps. Redux manages the state of your data.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

Redux evolves the ideas of <a href="https://facebook.github.io/flux/">Flux</a>, but avoids its complexity by taking cues from <a href="http://elm-lang.org/">Elm</a>.

Flux is a pattern that helps keeping your data unidirectional. This data enters the app and flows through it in one direction until it is rendered on screen.

<img alt="Flux" src="https://raw.githubusercontent.com/nazmulb/react.js/master/images/react-flux-concept-image.jpg" width="500px" />

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

## Core terms of Redux:

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

##Presentational and Container Components:

React bindings for Redux embrace the idea of **separating presentational and container components**.

|     | Presentational Components | Container Components |
| --- | --- | --- |
| Purpose | How things look (markup, styles) | How things work (data fetching, state updates) |
| Aware of Redux | No | Yes |
| To read data | Read data from props | Subscribe to Redux state |
| To change data | Invoke callbacks from props | Dispatch Redux actions |
| Are written | By hand | Usually generated by React Redux |


## Stateless functional components:

In idiomatic React code, most of the components you write will be stateless, simply composing other components. We’re introducing a new, simpler syntax for these components where you can take props as an argument and return the element you want to render:

```jsx
// A functional component using an ES2015 (ES6) arrow function:
var Aquarium = (props) => {
  var fish = getFish(props.species);
  return <Tank>{fish}</Tank>;
};

// Or with destructuring and an implicit return, simply:
var Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);

// Then use: <Aquarium species="rainbowfish" />
```

> We should use stateless functional component for Presentational component. If you need state or component lifecycle methods or any handler methods then you can use class based component.

## React & Redux Life Cycle:
<img alt="React &amp; Redux Life Cycle" src="https://raw.githubusercontent.com/nazmulb/react.js/master/images/React-Redux-Life-Cycle.jpg" height="700px" />

# Redux-Saga

## Saga Advantages:
- Saga is like a **separate thread** in your application that's solely responsible for **side effects** (e.g. ajax calls, local storage, gps, websockets, etc) and  handles complex asynchronous actions (side effects) **easier and better ways** in React/Redux applications.
- `redux-saga` is a **redux middleware**, which means this thread can be **started, paused and cancelled** from the main application with normal redux actions.
- It uses an ES6 feature called **Generators** to make asynchronous flows easy to **read, write and test**.
- **Testability**. It's very easy to test sagas as `call()` returns a **pure object**. Testing thunks normally requires you to include a mockStore inside your test.
- You don't end up in **callback hell**, you can test your asynchronous flows easily and your actions **stay pure**.
- In every action you have to deal with network errors and updating spinners/loaders and etc, but Saga removes a lot of boilerplate/repetition. It simplifies this as middleware and **automatically exposes all of the operations as actions** that you can fire from anywhere in your application.
- Sagas offer **independent place** to handle all side effects. It is usually **easier to modify and manage**.
- Using `takeLatest`, it cancels subsequent requests for same purpose (it cancels the first, keeps the last).


## Saga Limitations:
- Generator syntax.
- Lots of concepts to learn.

## Generator:
- Generator is a **pauseable or iterator** function.
- Generator functions are differ from normal functions with respect to the **"run to completion"** expectation.
- Generator functions can be start, pause using `yield` and restart.
- Generator functions are denoted using `function*` syntax.
- Calling a generator function does not execute its body immediately; an `iterator` object for the function is returned instead. The iterator's `next()` method is used to advance the execution of the generator body.
- `next()` method returns an object that indicates the progress of the iteration.
- `Object {value: undefined, done: true}` where `value` property containing the yielded value and `done` property indicates that the generator body has been run to the completion.
- Using Generator you can maintain your complex asynchronous codes like synchronous way and can remove **callback hell**.

### Example Codes:

```js
const generatorFunction = function* () {
    yield 1;
};
const iterator = generatorFunction();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: undefined, done: true}
```


```js
function* () {
    var tweets = yield $.get('tweets.json');
    var profile = yield $.get('profile.json');
    var frields = yield $.get('frields.json');

    console.log(tweets, profile, frields);
};
```

Read more from <a href="http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators">this link</a>.

## Getting started: redux-saga:

### Install:

```js
npm install --save redux-saga
```

You might need to install `babel-polyfill` to run Generator functions

```js
npm install --save-dev babel-polyfill
```

### Usage Example:

Suppose we have an UI to fetch some user data from a remote server when a button is clicked.

```js
class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
}
```

The Component dispatches a plain Object action to the Store. We'll create a Saga that watches for all `USER_FETCH_REQUESTED` actions and triggers an API call to fetch the user data.

#### sagas.js

```js
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

To run our Saga, we'll have to connect it to the Redux Store using the `redux-saga` middleware.

#### main.js

```js
import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application
```

## Core terms of Saga:

### Effect:

An effect is a plain JavaScript Object containing some instructions to be executed by the saga middleware. Example effects are `put`, `call`, etc. Neither `put` nor `call` performs any dispatch or asynchronous call by themselves, they simply return plain JavaScript objects.

```js
put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}
```

What happens is that the middleware examines the type of each yielded Effect then decides how to fulfill that Effect. If the Effect type is a `PUT` then it will dispatch an action to the Store. If the Effect is a `CALL` then it'll call the given function.

This separation between Effect creation and Effect execution makes it possible to test our Generator in a surprisingly easy way.

### Blocking/Non-blocking call:

A Blocking call means that the Saga yielded an Effect and will wait for the outcome of its execution before resuming to the next instruction inside the yielding Generator.

A Non-blocking call means that the Saga will resume immediately after yielding the Effect.

For example

```js
function* saga() {
  yield take(ACTION)              // Blocking: will wait for the action
  yield call(ApiFn, ...args)      // Blocking: will wait for ApiFn (If ApiFn returns a Promise)
  yield call(otherSaga, ...args)  // Blocking: will wait for otherSaga to terminate

  yield put(...)                   // Non-Blocking: will dispatch within internal scheduler

  const task = yield fork(otherSaga, ...args)  // Non-blocking: will not wait for otherSaga
  yield cancel(task)                           // Non-blocking: will resume immediately
  // or
  yield join(task)                              // Blocking: will wait for the task to terminate
}
```

<a href="https://github.com/nazmulb/react.js#blocking--non-blocking">See more</a>

### Watcher/Worker:

refers to a way of organizing the control flow using two separate Sagas

**The watcher**: will watch for dispatched actions and fork a worker on every action

**The worker**: will handle the action and terminate

example

```js
function* watcher() {
  while (true) {
    const action = yield take(ACTION)
    yield fork(worker, action.payload)
  }
}

function* worker(payload) {
  // ... do some stuff
}
```

### Task:

A task is like a process running in background. In a redux-saga based application there can be multiple tasks running in parallel. You create tasks by using the `fork` function

```js
function* saga() {
  ...
  const task = yield fork(otherSaga, ...args)
  ...
}
```

### Utils:

#### delay(ms, [val])

Returns a Promise that will resolve after `ms` milliseconds with `val`.

### Effect creators:

- Each function below returns a plain JavaScript object and does not perform any execution.
- The execution is performed by the middleware during the Iteration process.
- The middleware examines each Effect description and performs the appropriate action.

#### put(action)

Creates an Effect description that instructs the middleware to dispatch an action to the Store. This effect is non-blocking and any errors that are thrown downstream (e.g. in a reducer) will not bubble back into the saga.

#### call(fn, ...args)

Creates an Effect description that instructs the middleware to call the function `fn` with `args` as arguments.

- `fn: Function` - A Generator function, or normal function which either returns a Promise as result, or any other value.

- `args: Array<any>` - An array of values to be passed as arguments to `fn`

This is a blocking effect.

#### cps(fn, ...args)

Creates an Effect description that instructs the middleware to invoke `fn` as a Node style function.

fn: Function - a Node style function. i.e. a function which accepts in addition to its arguments, an additional callback like `cb(error, result)` to be invoked by `fn` when it terminates. The callback accepts two parameters, where the first parameter is used to report errors while the second is used to report successful results

args: Array<any> - an array to be passed as arguments for `fn`

This is also a blocking effect.

#### fork(fn, ...args)

Creates an Effect description that instructs the middleware to perform a **non-blocking call** on `fn`

Arguments

- `fn: Function` - A Generator function, or normal function which returns a Promise as result

- `args: Array<any>` - An array of values to be passed as arguments to `fn`

returns a `Task` object.

All forked tasks are attached to their parents. When the parent terminates the execution of its own body of instructions, it will wait for all forked tasks to terminate before returning.

Cancellation of a forked Task will automatically cancel all forked tasks that are still executing.

#### spawn(fn, ...args)

Same as `fork(fn, ...args)` but creates a detached task. A detached task remains independent from its parent and acts like a top-level task. The parent will not wait for detached tasks to terminate before returning and all events which may affect the parent or the detached task are completely independents (error, cancellation).

#### cancel(task)

Creates an Effect description that instructs the middleware to cancel a previously forked task.

- `task: Task` - A `Task` object returned by a previous fork

#### select(selector, ...args)

Creates an effect that instructs the middleware to invoke the provided selector on the current Store's state (i.e. returns the result of `selector(getState(), ...args)`).

- `selector: Function` - a function `(state, ...args) => args`. It takes the current state and optionally some arguments and returns a slice of the current Store's state

- `args: Array<any>` - optional arguments to be passed to the selector in addition of `getState`.

If `select` is called without argument (i.e. `yield select()`) then the effect is resolved with the entire state (the same result of a `getState()` call).

#### cancelled()

Creates an effect that instructs the middleware to return whether this generator has been cancelled. Typically you use this Effect in a finally block to run Cancellation specific code

Example

```js
function* saga() {
  try {
    // ...
  } finally {
    if (yield cancelled()) {
      // logic that should execute only on Cancellation
    }
    // logic that should execute in all situations (e.g. closing a channel)
  }
}
```

#### take(pattern)

Creates an Effect description that instructs the middleware to wait for a specified action on the Store. The Generator is **suspended/blocked** until an action that matches `pattern` is dispatched.

`pattern` is interpreted using the following rules:

- `take('*')` or `take()` will match **all actions**.
- `take(INCREMENT_ASYNC)` will match with `'INCREMENT_ASYNC'` as string
- `take([INCREMENT, DECREMENT])` will match either actions of type `INCREMENT` or `DECREMENT`. You can use `action.type=='INCREMENT'` to catch the match.

The middleware provides a special action `END`. If you dispatch the `END` action, then all Sagas blocked on a take Effect will be terminated regardless of the specified pattern. If the terminated Saga has still some forked tasks which are still running, it will wait for all the child tasks to terminate before terminating the Task.

> In reality, `takeEvery` is just a wrapper effect for internal helper function built on top of the lower level and more powerful API. But `take`, which makes it possible to build complex control flow by allowing total control of the action observation process.

### Saga Helpers:

The following functions are helper functions built on top of the Effect creators.

#### takeEvery(pattern, saga, ...args)

Spawns a `saga` on each action dispatched to the Store that matches `pattern`.

- `pattern: String | Array | Function` - for more information see docs for `take(pattern)`
- `saga: Function` - a Generator function
- `args: Array<any>` - arguments to be passed to the started task.

Example

In the following example, we create a simple task `fetchUser`. We use `takeEvery` to start a new `fetchUser` task on each dispatched `USER_REQUESTED` action:

```JS
import { takeEvery } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchFetchUser() {
  yield takeEvery('USER_REQUESTED', fetchUser)
}
```

***Notes***

`takeEvery` is a high-level API built using `take` and `fork`. Here is how the helper could be implemented using the low-level Effects

```js
function* takeEvery(pattern, saga, ...args) {
  const task = yield fork(function* () {
    while (true) {
      const action = yield take(pattern)
      yield fork(saga, ...args.concat(action))
    }
  })
  return task
}
```

`takeEvery` is a ***non-blocking*** helper which allows ***concurrent*** actions to be handled. In the example above, when a `USER_REQUESTED` action is dispatched, a new `fetchUser` task is started even if a previous `fetchUser` is still pending (for example, the user clicks on a Load User button 2 consecutive times at a rapid rate, the 2nd click will dispatch a `USER_REQUESTED` action while the `fetchUser` fired on the first one hasn't yet terminated)

`takeEvery` doesn't handle out of order responses from tasks. There is no guarantee that the tasks will termiate in the same order they were started. To handle out of order responses, you may consider `takeLatest` below.

#### takeLatest(pattern, saga, ...args)

Spawns a `saga` on each action dispatched to the Store that matches pattern. And automatically cancels any previous `saga` task started previous if it's still running.

Example

```js
import { takeLatest } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchLastFetchUser() {
  yield takeLatest('USER_REQUESTED', fetchUser)
}
```

`takeLatest` is also a ***non-blocking*** helper.

***Notes***

`takeLatest` is a high-level API built using `take and `fork`. Here is how the helper could be implemented using the low-level Effects

```js
function* takeLatest(pattern, saga, ...args) {
  const task = yield fork(function* () {
    let lastTask
    while (true) {
      const action = yield take(pattern)
      if (lastTask)
        yield cancel(lastTask) // cancel is no-op if the task has already terminated

      lastTask = yield fork(saga, ...args.concat(action))
    }
  })
  return task
}
```

> `takeLatest` can be useful to handle ***AJAX requests*** where we want to only have the response to the latest request.

### Effect combinators:

#### race(effects)

Creates an Effect description that instructs the middleware to run a Race between multiple Effects (this is similar to how `Promise.race([...])` behaves).

`effects: Object` - a dictionary Object of the form {label: effect, ...}

Example:

The following example runs a race between two effects:

- A call to a function `fetchUsers` which returns a Promise
- A `CANCEL_FETCH` action which may be eventually dispatched on the Store

```js
import { take, call, race } from `redux-saga/effects`
import fetchUsers from './path/to/fetchUsers'

function* fetchUsersSaga {
  const { response, cancel } = yield race({
    response: call(fetchUsers),
    cancel: take(CANCEL_FETCH)
  })
}
```

> When resolving a `race`, the middleware automatically cancels all the losing Effects.

#### [...effects] (parallel effects)

Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.

Example:

The following example runs two blocking calls in parallel:

```js
import { fetchCustomers, fetchProducts } from './path/to/api'

function* mySaga() {
  const [customers, products] = yield [
    call(fetchCustomers),
    call(fetchProducts)
  ]
}
```

When running Effects in parallel, the middleware suspends the Generator until one of the following occurs:

- All the Effects completed with success: resumes the Generator with an array containing the results of all Effects.
- One of the Effects was rejected before all the effects complete: throws the rejection error inside the Generator.

In a parallel effect (`yield [...]`). The parallel effect is rejected as soon as one of the sub-effects is rejected (as implied by `Promise.all`). In this case, all the other sub-effects are automatically cancelled.

## Example 1: Making Asynchronous calls

We will use our counter example that we did with `redux`. To illustrate asynchronous calls, we will add another button to increment the counter 1 second after the click.

First thing's first, we should add the action with action creator.

```js
//...
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
//...

export const incrementAsync = () => ({
    type: INCREMENT_ASYNC
});
//...
```

We have to add `onIncAsync` in the controller component.

```js
//...
let mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => {
            dispatch(increment())
        },
        onIncAsync: () => {
            dispatch(incrementAsync())
        },
        onDec: () => {
            dispatch(decrement())
        }
    }
};
//...
```

> Note that unlike in `redux-thunk`, our component dispatches a ***plain object action***.

We'll use `onIncAsync` from the UI component.

```js
//...
let Count = ({count, onInc, onIncAsync, onDec}) => (
    <div>
        <label>{count}</label> {' '}
        <button onClick={onInc}>+</button>  {' '}
        <button onClick={onIncAsync}>+ after 1 second</button>  {' '}
        <button onClick={onDec}>-</button>
    </div>
);
//...
```

Now we will introduce Saga to perform the asynchronous call. Our use case is as follows:

On each `INCREMENT_ASYNC` action, we want to start a task that will do the following:
- Wait 1 second then increment the counter

Add the following code to the `sagas.js` module:

```js
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { increment, INCREMENT_ASYNC } from './actions'

// Our worker Saga: will perform the async increment task
export function* incAsync() {
  yield delay(1000)
  yield put(increment())
}

// Our watcher Saga: spawn a new incAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incAsync)
```

Time for some explanations.

We import `delay`, a utility function that returns a `Promise` that will resolve after a specified number of milliseconds. We'll use this function to block the Generator.

Sagas are implemented as Generator functions that yield objects to the redux-saga middleware. The yielded objects are a kind of instruction to be interpreted by the middleware. When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes. In the above example, the `incAsync` Saga is suspended until the Promise returned by `delay` resolves, which will happen after 1 second.

Once the Promise is resolved, the middleware will resume the Saga, executing code until the next yield. In this example, the next statement is another yielded object: the result of calling `put(increment())`, which instructs the middleware to dispatch an `INCREMENT` action.

`put` is one example of what we call an Effect. Effects are simple JavaScript objects which contain instructions to be fulfilled by the middleware. When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.

So to summarize, the `incAsync` Saga sleeps for 1 second via the call to `delay(1000)`, then dispatches an `INCREMENT` action.

Next, we created another Saga `watchIncrementAsync`. We use `takeEvery`, a helper function provided by `redux-saga`, to listen for dispatched `INCREMENT_ASYNC` actions and run `incAsync` each time.

If we have more then 1 Saga, and we need to start them both at once. To do that, we'll add a rootSaga that is responsible for starting our other Sagas. In the same file `sagas.js`, add the following code:

```js
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
```

We will make the changes to `main.js`:

```js
// ...
import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// ...
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
//...
```

***Please check the code in the examples.*** <a href="https://github.com/nazmulb/react.js/tree/master/learning/redux_examples/counter_saga">Click here</a>

## Making our code testable

First of all, you need to install <a href="https://github.com/substack/tape">tape</a> and <a href="https://github.com/scottcorgan/tap-spec">tap-spec</a>

```js
npm install tape -save-dev
npm install tap-spec -g
```

Please add `test` command under `scripts` in your `package.json` file

```js
"scripts": {
    "start": "webpack-dev-server --hot",
    "test": "babel-node sagas.spec.js --presets es2015,stage-2 | tap-spec"
  },
```

Now we want to test our `incAsync` Saga to make sure it performs the desired task.

Create another file `sagas.spec.js`:

```js
import test from 'tape';

import { incAsync } from './sagas'
import { increment } from './actions'

test('incAsync Saga test', (assert) => {
  const gen = incAsync()

  // now what ?
});
```

Since `incAsync` is a Generator function, when we run it outside the middleware, Each time you invoke `next` on the generator, you get an object of the following shape

```js
gen.next() // => { done: boolean, value: any }
```

The `value` field contains the yielded expression, i.e. the result of the expression after the yield. The `done` field indicates if the generator has terminated or if there are still more 'yield' expressions.

In the case of `incAsync`, the generator yields 2 values consecutively:

- `yield delay(1000)`
- `yield put(increment())`

So if we invoke the next method of the generator 3 times consecutively we get the following results:

```js
gen.next() // => { done: false, value: <result of calling delay(1000)> }
gen.next() // => { done: false, value: <result of calling put(increment())> }
gen.next() // => { done: true, value: undefined }
```

The first 2 invocations return the results of the yield expressions. On the 3rd invocation since there is no more yield the `done` field is set to true. And since the `incAsync` Generator doesn't return anything (no `return` statement), the `value` field is set to `undefined`.

So now, in order to test the logic inside `incAsync`, we'll simply have to iterate over the returned Generator and check the values yielded by the generator.

```js
import test from 'tape';

import { incrementAsync } from './sagas'
import { increment } from './actions'

test('incrementAsync Saga test', (assert) => {
  const gen = incAsync()

  assert.deepEqual(
    gen.next(),
    { done: false, value: ??? },
    'incrementAsync should return a Promise that will resolve after 1 second'
  )
});
```

The issue is how do we test the return value of `delay`? We can't do a simple equality test on Promises. If `delay` returned a normal value, things would've been be easier to test.

Well, `redux-saga` provides a way to make the above statement possible. Instead of calling `delay(1000)` directly inside `incAsync`, we'll call it indirectly:

```js
// ...
import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import { increment, INCREMENT_ASYNC } from './actions'

export function* incAsync() {
  // use the call Effect
  yield call(delay, 1000)
  yield put(increment())
}
```

Instead of doing yield `delay(1000)`, we're now doing yield `call(delay, 1000)`. What's the difference?

In the first case, the yield expression `delay(1000)` is evaluated before it gets passed to the caller of `next`. So what the caller gets is a Promise, like in the test code above.

In the second case, the yield expression `call(delay, 1000)` is what gets passed to the caller of `next`. `call` just like `put`, returns an Effect which instructs the middleware to call a given function with the given arguments. In fact, neither `put` nor `call` performs any dispatch or asynchronous call by themselves, they simply return plain **JavaScript objects**.

```js
put(increment())        // => { PUT: {type: 'INCREMENT'} }
call(delay, 1000)       // => { CALL: {fn: delay, args: [1000]}}
```

What happens is that the middleware examines the type of each yielded Effect then decides how to fulfill that Effect. If the Effect type is a `PUT` then it will dispatch an action to the Store. If the Effect is a `CAL`L then it'll call the given function.

This separation between Effect creation and Effect execution makes it possible to test our Generator in a surprisingly easy way:

```js
import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incAsync } from './sagas';
import { increment } from './actions';

test('incAsync saga test', (assert) => {
    const gen = incAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incAsync Saga must call delay(1000)'
    );

    assert.deepEqual(
        gen.next().value,
        put(increment()),
        'incAsync Saga must dispatch an INCREMENT action'
    );

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incAsync Saga must be done'
    );

    assert.end();
});
```

Since `put` and `call` return plain objects, we can reuse the same functions in our test code. And to test the logic of `incAsync`, we simply iterate over the generator and do `deepEqual` tests on its values.

In order to run the above test, run:

```js
npm test
```

which should report the results on the console.

## Error handling

We want to handle those errors inside our Saga by dispatching a `PRODUCTS_REQUEST_FAILED` action to the Store.

We can catch errors inside the Saga using the familiar `try/catch` syntax.

```js
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

// ...

function* fetchProducts() {
  try {
    const products = yield call(Api.fetch, '/products')
    yield put({ type: 'PRODUCTS_RECEIVED', products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
  }
}
```

In order to test the failure case, we'll use the `throw` method of the Generator

```js
import { call, put } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// expects a call instruction
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts should yield an Effect call(Api.fetch, './products')"
)

// create a fake error
const error = {}

// expects a dispatch instruction
assert.deepEqual(
  iterator.throw(error).value,
  put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
  "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
)
```

In this case, we're passing the `throw` method a fake error. This will cause the Generator to break the current flow and execute the catch block.

Of course, you're not forced to handle your API errors inside `try/catch` blocks. You can also make your API service return a normal value with some error flag on it. For example, you can catch Promise rejections and map them to an object with an error field.

```js
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

function fetchProductsApi() {
  return Api.fetch('/products')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* fetchProducts() {
  const { response, error } = yield call(fetchProductsApi)
  if (response)
    yield put({ type: 'PRODUCTS_RECEIVED', products: response })
  else
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
}
```

## Running Tasks In Parallel

The `yield` statement is great for representing asynchronous control flow in a simple and linear style, but we also need to do things in parallel. We can't simply write:

```js
// wrong, effects will be executed in sequence
const users  = yield call(fetch, '/users'),
      repos = yield call(fetch, '/repos')
```

Because the 2nd effect will not get executed until the first call resolves. Instead we have to write:

```js
import { call } from 'redux-saga/effects'

// correct, effects will get executed in parallel
const [users, repos]  = yield [
  call(fetch, '/users'),
  call(fetch, '/repos')
]
```

When we yield an array of effects, the generator is blocked until all the effects are resolved or as soon as one is rejected (just like how `Promise.all` behaves).

## Blocking / Non-blocking

| Name | Blocking |
| --- | --- |
| takeEvery	| No |
| takeLatest | No |
| throttle | No |
| take	| Yes |
| put | No |
| call | Yes |
| apply | Yes |
| cps | Yes |
| fork | No |
| spawn | No |
| join | Yes |
| cancel | Yes |
| select | No |
| flush | Yes |
| cancelled | Yes |
| race | Yes |
| [...effects] | Blocks only if there is a blocking effect in the array |