import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav';

import Main from './components/main';

import Services from './components/services/services';

import Privacy from './components/privacy';
import Terms from './components/terms';
import About from './components/about';
import Contact from './components/contact';

import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
          <Route exact path="/" component={Main}/>
          <Route exact path="/services" component={Services} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          {/* <Route exact path="/" component={Main}/> */}
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
