import React from 'react';
import {Route} from 'react-router';

import Layout from './layout';

import AuthenticatedPage from './components/authenticatedPage';

import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import HomePage from './pages/home';

export default [
  <Route name="login" path="login" handler={LoginPage} />,
  <Route name="layout" path="/" handler={AuthenticatedPage(Layout)}>
    <Route name="home" path="" handler={HomePage} />
    <Route name="logout" path="logout" handler={LogoutPage} />
  </Route>
]
