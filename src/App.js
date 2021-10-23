import './App.css';

import { useState } from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about'


import NavbarComp from './components/navbarcomp/navbarcomp';
import Landing from './components/landingpage/landingpage';

import HookForm from './components/form/form';

import Footer from './components/footer/footer';

import CatCardDetails from './components/catCard/catCardDetails';

import Cats from './components/catCard/cats';


function App() {
  //con la badera lo que hace es que cuando se inicia el componente
  //usando el use effec  lo va a negar
  //como se inicia  en true  , luego cuando
  //preciona el boton niega de vuelta
  const[bandera,setBandera] = useState(true)
  
  return (
    <div className="App">

      <Route exact path="/">
          <Landing />
      </Route>
      
     
      <Route exact path="/home">
        <NavbarComp/>
        <Home/>
        <Footer/>
      </Route>
      
      <Route exact path="/form">
        <HookForm/>
        <Footer/>
      </Route>
      
      <Switch>
        <Route exact path="/home/cats/:name/:url">
          <CatCardDetails/>
        </Route>
        <Route exact path="/home/cats">
          <Cats/>
        </Route>
      </Switch>

      <Route path="/about">
           <About/>
           <Footer/>
     </Route>

    
      

    </div>
  );
}

export default App;
