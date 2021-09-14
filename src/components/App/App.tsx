import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../../config/routing/routes';

const App: React.FC = (): JSX.Element => {
  return (
    <main>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={true}
            />
          ))}
        </Switch>
      </Router>
    </main>
  );
};

export default App;
