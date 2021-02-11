import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Resume from './components/Pages/Resume';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/' component={Home} exact/>

          <Route path='/resume' component={Resume} />

          <Route path='/blog' component={Blog} />

          <Route path='/blog/:name' component={}/>

        </Switch> 
      </div>
    </Router>
  );
}

export default App;
