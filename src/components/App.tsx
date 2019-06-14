import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
const Main = React.lazy(() => import("./Main"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={redirect("/login")} />
          <Route path="/login" exact component={Login} />
          <Route component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
}

function redirect(route: string) {
  return () => <Redirect to={route} />
}
