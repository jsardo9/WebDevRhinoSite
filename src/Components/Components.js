import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import RhinoCountries from "./RhinoCountries/RhinoCountries";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/rhinocountries" component={RhinoCountries} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
