import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
        <div>
          <nav>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </nav>

          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
    );
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
