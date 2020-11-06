import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Button } from 'primereact/button';

const Home = lazy(() => import('./web/pages/home/Home'));
const UserPage = lazy(() => import('./web/pages/users/UsersPage'));
const ProjectPage = lazy(() => import('./web/pages/projects/ProjectsPage'));
const ActivityPage = lazy(() => import('./web/pages/activities/ActivitiesPage'));

const App = () => {
  return (
    <Router>
      <div className="container">
        <Link to="/"><Button className="p-button-outlined" label="Home"></Button></Link>
        &nbsp;
        &nbsp;
        <Link to="/users"><Button className="p-button-outlined" label="Users"></Button></Link>
        &nbsp;
        &nbsp;
        <Link to="/projects"><Button className="p-button-outlined" label="Projects"></Button></Link>
        &nbsp;
        &nbsp;
        <Link to="/activities"><Button className="p-button-outlined" label="Activities"></Button></Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/activities" component={ActivityPage} />
        </Switch>
      </Suspense>
    </Router>
  )
};

export default App