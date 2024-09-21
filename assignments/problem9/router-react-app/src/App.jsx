import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Products} from './components/Products';
import {Login} from './components/Login';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/contact" component={<Contact/>} />
        <Route path="/login" component={<Login/>} />
        </Routes>
        <PrivateRoute path="/products" component={<Products/>} />
        
    </Router>
    
  );
}

export default App;
