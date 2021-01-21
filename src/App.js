import React from 'react';
import './App.css';
import { Footer, Navbar } from './components/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portfolio' exact component={Portfolio} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
