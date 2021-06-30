import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Home />
            <Route path='/skills' components={Skills} />
            <Route path='/projects' components={Projects} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
