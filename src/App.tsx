import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from "views/Tags";
import Money from "views/Money";
import Statistics from "views/Statistics";
import NotFound from "views/404";
export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from='/' to="/tags"/>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}