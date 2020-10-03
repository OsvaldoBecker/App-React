import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./web/pages/home/home'));
const UserManager = lazy(() => import('./web/pages/users/userManager'));

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/users">Usuarios </Link>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserManager} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
};

export default App