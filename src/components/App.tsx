import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
const Main = React.lazy(() => import("./Main"));

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={redirect("/login")} />
        <Route path="/login" exact component={Login} />
        <Route component={WaitingComponent(Main)} />
      </Switch>
    </Router>
  );
}

function redirect(route: string) {
  return () => <Redirect to={route} />
}


function WaitingComponent<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}