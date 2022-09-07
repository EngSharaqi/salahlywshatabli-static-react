import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/nav'
import Main from './components/main'
import Services from './components/services/services'
import Privacy from './components/privacy'
import Terms from './components/terms'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import './i18n'

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
