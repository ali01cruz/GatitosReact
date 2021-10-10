import './App.css';
import {Switch,Route} from "react-router-dom";
import NavbarComp from './components/navbarcomp/navbarcomp';
import About from './components/about/about';


function App() {
  return (
    <div className="App">
     
        <NavbarComp/>
        <Switch>
          <Route exact path="/" >
                      <h1>HOLA</h1>
          </Route>
          <Route exact path="/about" >
                      <About/>
          </Route>
          <Route>
              <h1> PAG NOT FOUND 404</h1>
          </Route>
        </Switch>

  
    </div>
  );
}

export default App;
