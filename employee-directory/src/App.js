import React, { Component } from 'react';
import Employees from './components/Employees'
import Roles from './components/Roles';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">employee directory</h1>
          <nav>
            <h2><Link to='/'>let's begin here ... </Link> | <Link to='/roles'>roles</Link></h2>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Employees} />
          <Route path='/roles' component={Roles} />
        </Switch>
      </div>
    );
  }
}

export default App;
