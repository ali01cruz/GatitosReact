import './App.css';
import {Switch,Route} from "react-router-dom";
import NavbarComp from './components/navbarcomp/navbarcomp';
import About from './components/about/about';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
     
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

  
>>>>>>> main
    </div>
  );
}

export default App;
