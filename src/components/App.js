import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navb from "../layout/Navbar"
import Home from "./Home"
import Delete from './Delete'
import Contacts from './Contacts'

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/navb" component={Navb} />
        <Route exact path="/" component={Home} />
        <Route exact path="/delete" component={Delete} />
        <Route exact path="/contacts" component={Contacts} />

      </Switch>

    </Router>
  );
}

export default App;
