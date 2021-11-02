import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav"
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav/>
     
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>Home</h2>;
}

function Tags() {
  return <h2>About</h2>;
}

function Money() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return <h2>404</h2>
}