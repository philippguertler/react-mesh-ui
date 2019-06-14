import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from './Login';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={redirect("/login")} />
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

function redirect(route: string) {
  return () => <Redirect to={route} />
}
