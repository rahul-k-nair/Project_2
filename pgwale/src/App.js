import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import Aboutus from './components/Aboutus';
import Signin from './components/Signin';
import Contact from './components/Contact';


import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() { 
  return (
    <>
    <div> 
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/Home" exact component={Home} />
          <Route  path="/aboutus" component={Aboutus} />
          <Route  path="/Signin" component={Signin}/>
          <Route  path="/Contact" component={Contact}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
      
        
    
    </>
  );
}


export default App;
