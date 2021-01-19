import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';

library.add(fab, far, fas);

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
