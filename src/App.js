import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'//Switch only renders one page
import ShopPage from './pages/shop/shop.component.jsx'

import HomePage from './pages/homepage/hompage.component'
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />     
        <Route path='/shop' component={ShopPage} />
      </Switch>
      
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;