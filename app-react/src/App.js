import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./web/pages/home/home'));
const ActivityManager = lazy(() => import('./web/pages/activities/activityManager'));
const ProjectManager = lazy(() => import('./web/pages/projects/projectManager'));
const UserManager = lazy(() => import('./web/pages/users/userManager'));


const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/activities">Atividades</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/users">Usuários</Link>
        <Suspense fallback={<div>Carregando...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/activities" component={ActivityManager}/>
            <Route path="/projects" component={ProjectManager}/>
            <Route path="/users" component={UserManager}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
};

export default App