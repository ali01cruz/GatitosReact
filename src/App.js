import './App.css';
import {Switch,Route} from "react-router-dom";
import NavbarComp from './components/navbarcomp/navbarcomp';
import About from './components/about/about';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
     
        <NavbarComp/>
        <Switch>
          
          <Route exact path="/" >
                      <h1>HOLA</h1>
                      <Footer/>
          </Route>

          <Route exact path="/about" >
                      <About/>
                      <Footer/>
          </Route>

          <Route>
              <h1> PAG NOT FOUND 404</h1>
          </Route>
        </Switch>

  
    </div>
  );
}

export default App;
