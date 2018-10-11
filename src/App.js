import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default withRouter(App);
