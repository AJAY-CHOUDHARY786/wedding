import logo from "./logo.svg";
import "./App.css";
import Ourwork from "./Pages/Ourwork";

function App() {
  return <>
  <Router>
  <Switch>
          <Route path="/Ourwork">
            <Ourwork />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   
    
  </Router>
  
  
  </>;
}

export default App;
