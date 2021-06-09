import React from 'react';

import About from './About';
import Dashboard from './Dashboard';
import Vendas from './Vendas';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Vendas</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/vendas" />
            </Route>

            <Route exact path="/vendas" component={Vendas} />

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/sobre" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigation;