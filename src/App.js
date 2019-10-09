import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import About from './Components/About'
import ProductList from './Components/ProductsList'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Welcome}/>
              <Route path='/Products' component={ProductList}/>
              <Route path='/About' component={About}/>
            </Switch>
        </div>
      </BrowserRouter>    
    
  );
}

export default App;
