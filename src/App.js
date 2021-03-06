import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            
            <Route exact path='/'>
              <Home />
            </Route> 
            <Route path='/skills'>
              <Skills />
            </Route> 
            <Route path='/projects'>   
              <Projects/>
            </Route> 

          </Switch>
      </Router>
      
    </>
  );
}

export default App;
