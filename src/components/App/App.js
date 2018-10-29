import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Header
        </header>
        <Router>
          <div>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/categories/:name' component={CategoryContainer} />
          </div>
        </Router>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
