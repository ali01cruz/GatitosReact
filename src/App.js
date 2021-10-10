import './App.css';
import {Switch,Route} from "react-router-dom";
import NavbarComp from './components/navbarcomp/navbarcomp';


function App() {
  return (
    <div className="App">
     
        <NavbarComp/>
        <Switch>
          <Route exact path="/" >
                      <h1>HOLA</h1>
          </Route>
          <Route>
              <h1> PAG NOT FOUND 404</h1>
          </Route>
        </Switch>

  
    </div>
  );
}

export default App;
