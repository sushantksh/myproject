import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/signup';

class App extends Component {

  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/signup" component={Signup}/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
