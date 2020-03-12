import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'//Switch only renders one page

import HomePage from './pages/homepage/hompage.component'

const HatsPage = () =>(
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path='/Hats' component={HatsPage}/>
        <Route  path='/' component={HomePage} />
      </Switch>
      
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;