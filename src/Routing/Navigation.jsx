import React from 'react';

import VerticalNavigation from '../layout/VerticalNavigation';
import Column from '../layout/Column';

import About from './About';
import Dashboard from './Dashboard';
import Vendas from './Vendas';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const Navigation = () => {
  const links = [
    {
      url: '/vendas',
      title: 'Vendas',
      comp: Vendas
    },
    {
      url: '/dashboard',
      title: 'Dashboard',
      comp: Dashboard
    },
    {
      url: '/sobre',
      title: 'Sobre',
      comp: About
    }
  ]

  return (
    <Router>
      <Column size="md-6">
        <div className="h-100 p-5 bg-light rounded">
          <VerticalNavigation menus={links} />
        </div>
      </Column>
      <Column size="md-6">
        <div className="h-100 p-5 text-white bg-dark rounded">
          <Switch>
            <Route exact path="/">
              <Redirect to="/vendas" />
            </Route>
            {links.map((menu) => <Route exact path={menu.url} component={menu.comp} />)}
          </Switch>
        </div>
      </Column>
    </Router>
  );
}

export default Navigation;