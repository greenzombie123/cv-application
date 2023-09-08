React is a frontend framework. 
Frontend Frameworks makes your code easily scalable, more readable, and more efficient.
Applications made with React are made with components. 
Component are defined in an ES6 module.
Parent/Child Structure?
Create/declare class component
```javascript
import React, { Component } from 'react';
```

```javascript
class App extends Component {
    {/* Some logic we haven't yet talked about. */}
}
```

```javascript
constructor() {
    super()
}
```

Permissible comments in a React component
```javascript
{
  /* Some logic we haven't yet talked about. */
}
```

JSX is an HTML-like syntax that is transpiled (converted) into Javascript so that the browser is able process it. 

Cool thing about React is that you can combine Javascript and JSX.

Cant use Javascript protected words as html attributes anymore (class is not className)

React class components need a render function that returns one top-like JSX element that must wrap its nested elements in a single parent element.

You can define components in React through class components or as a factory function

```javascript
import React from 'react';

function App() {
  return <div className="App">Hello World!</div>;
}

// OR (arrow-function syntax)

const App = () => {
  return <div className="App">Hello World!</div>;
};

// OR (implicit return)

const App = () => <div className="App">Hello World!</div>;

export default App;
```

A state is a JavaScript object containing information about the component's current condition.

```
class Hello extends React.Component {

    constructor() {
    this.state = {
      endOfMessage: '!'
    };
  }

  render() {
    return <h1>Hello, {this.props.name} {this.state.endOfMessage}</h1>;
  }
}

```

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

The `useState` hook is the way function components allow us to use a component's `state` in a similar manner as `this.state` is used in class components.

Remember: function components use **hooks**. According to the official documentation:

> **What is a Hook?** A Hook is a special function that lets you “hook into” React features. For example, `useState` is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
> 
> **When would I use a Hook?** If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

`create-react-app` is a tool used to do all the necessary setup and configuration to set uo a complete React application for you.

```javascript

import React from 'react'
import {component} from 'react-dom'

class App extends component{
	constructor(){
		super()
	}
	
	render(){
		return (<div>
			<h1>Hello!</h1>
			<Home/>
		</div>)
	}
}

```

A component is a piece of the UI (user interface) that has its own logic and appearance. It can be a small as a button or as large as an entire page. They are JavaScript function that return markup

a toolchain is a set of distinct software development tools linked by specific stages. 

There is a root component, `<App>`, that imports other child components, which in turn import other child components. Data flows from root to children through React properties (called `props`) and flows back up using callback functions. This is the design pattern used by any basic React application.

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

## Adding styles [](https://react.dev/learn#adding-styles "Link for Adding styles")

In React, you specify a CSS class with `className`. It works the same way as the HTML [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) attribute:

```
<img className="avatar" />
```

Then you write the CSS rules for it in a separate CSS file:

```
/* In your CSS */.avatar {  border-radius: 50%;}
```

Conditional Rendering and Rendering List
You can use if conditional to use JSX
`li` and other similar elements need to have a number for their `key` attribute
You can also respond to events with event handler functions inside your components

To add state to your components, you need to import useState, declare a state variable with useState(arg). It will return a value for the state variable and a function that when called will update the state

# <Fragment> (<>...</>)

`<Fragment>`, often used via `<>...</>` syntax, lets you group elements without a wrapper node.

