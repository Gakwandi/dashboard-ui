import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './dist/css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Product from './components/product/Product';
import Grant from './components/grant/Grant';
import Accounting from './components/accounting/Accounting';
import Client from './components/client/Client';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accounting} />
        <Route exact path="/client-view" component={Client} />
        <Route exact path="/grant-view" component={Grant} />
        <Route exact path="/product-view" component={Product} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
