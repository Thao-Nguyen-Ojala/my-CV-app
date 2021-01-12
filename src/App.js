import React from 'react';
import './App.css';
import { Footer, Navbar } from './components/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Porfolio from './pages/Porfolio/Porfolio'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/porfolio' exact component={Porfolio} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
