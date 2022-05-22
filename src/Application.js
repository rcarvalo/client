import Home from "./pages/home/Home";
import Login from "./pages/login/L";
import Profile from "./pages/profile/Profile1";

import Register from "./pages/register/R";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext1";
import ToggleColorMode from "./components/ToggleColorMode"
import Messenger from "./pages/messenger/Messenger1";
function Application() {
  const { user } = useContext(AuthContext);
  return (
    <>
    <ToggleColorMode/>
    <Router>
    <Switch>
      <Route exact path="/">
        
        {user ? <Home /> : <Register />}
      </Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="/profile/:username">
        <Profile />
      </Route>
      <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
    </Switch>
  </Router>
  
  </>
  );
}

export default Application;