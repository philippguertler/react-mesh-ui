import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import { StylesProvider } from '@material-ui/styles';
const Main = React.lazy(() => import("./Main"));

export default function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={redirect("/login")} />
            <Route path="/login" exact component={Login} />
            <Route component={Main} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}

function redirect(route: string) {
  return () => <Redirect to={route} />
}
