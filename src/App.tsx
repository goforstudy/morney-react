import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from "views/Tags";
import Money from "views/Money";
import Tag from "views/Tag";
import Statistics from "views/Statistics";
import NotFound from "views/404";
import styled from "styled-components";
const AppWrapper = styled.div`
  color: #333;
`
export default function App() {
  return (
    <AppWrapper>
      <Router>
          <Switch>
            <Route path="/tags/:id" exact>
              <Tag />
            </Route>
            <Route path="/tags"  exact>
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
    </AppWrapper>
  );
}