import './App.css';

import { useState } from 'react';
import {Switch, Route, useLocation} from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about'


import NavbarComp from './components/navbarcomp/navbarcomp';
import Landing from './components/landingpage/landingpage';

import HookForm from './components/form/form';

import Footer from './components/footer/footer';

import CatCardDetails from './components/catCard/catCardDetails';

import Cats from './components/catCard/cats';
import NavBar from './components/navbarcomp/navBar.jsx';
import { useEffect } from "react";
import { Navbar } from 'react-bootstrap';


function App() {
  let location = useLocation();

  useEffect(() => {
  }, [location]);

  
  return (

    <div className="page-container">  
      <div className="content-wrap">
    
        <Switch>
             
        <Route exact path="/home/cats/:name/:url">
              <NavBar/>
              <CatCardDetails/>
            </Route>

            <Route exact path="/home/cats">
              <Cats/>
            </Route>

          <Route exact path="/">
              <Landing />
          </Route>
          
        
          <Route exact path="/home">
            <NavbarComp/>
            <Home/>
          </Route>
          
          <Route exact path="/form">
            <NavBar/>
            <HookForm/> 
          </Route>

          <Route exact path="/about">
            <NavBar/>
            <About/>
          </Route>

        </Switch>
      </div>
      { location.pathname === '/' ? <></> : <Footer /> }
    </div>


  );
}

export default App;
