import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './page';


function App() {
  return (

<Router>
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
       </ul>

       <hr />

         <Route exact path="/">
           <Home />
         </Route>
     
     </div>
   </Router>

 );
}

export default App;
