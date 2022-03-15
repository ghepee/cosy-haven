import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/about/about-us'
import Services from './pages/services/services'
import Contact from './pages/contact/contact-us'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
