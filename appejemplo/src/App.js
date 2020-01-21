import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './page';
import About from './page/About'
import Dashboard from './page/Dashboard';

function App() {
  return (

<Router>
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/dashboard">Dashboard</Link>
         </li>
       </ul>

       <hr />

         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/about">
           <About />
         </Route> 
         <Route path="/dashboard">
           <Dashboard />
         </Route>
     
     </div>
   </Router>

 );
}

export default App;
