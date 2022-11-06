import React from 'react'
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import Settings from "./pages/settings/Settings"
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
function App() {
  const currentUser = true;
    return (
      <Router>
        <Topbar />
        <Switch >
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/register">
            {currentUser ? <Homepage /> : <Register />}
          </Route>
          <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
