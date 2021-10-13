import './App.css';

import { useState } from 'react';
import {Route} from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about'


import NavbarComp from './components/navbarcomp/navbarcomp';
import Landing from './components/landingpage/landingpage';
function App() {
  //con la badera lo que hace es que cuando se inicia el componente
  //usando el use effec  lo va a negar
  //como se inicia  en true  , luego cuando
  //preciona el boton niega de vuelta
  const[bandera,setBandera] = useState(true)
  function activarNav (){
    setBandera(!bandera)
  }
  
  return (
    <div className="App">

      <Route exact path="/">
          <Landing activarNav={activarNav}/>
      </Route>
      {bandera && <NavbarComp/>}
      <Route exact path="/home">
        <Home/>
      </Route>

      <Route path="/about">
           
            <About/>
      </Route>


    </div>
  );
}

export default App;
