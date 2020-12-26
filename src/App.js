import React, { Component } from 'react';

import './App.css';
//import Toggle from './Toggle';
import SelectOption from './SelectOptions/SelectOptions';
import Toggle from './Toggle';
import Counter from './Counter/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Toggle />
       <SelectOption />
       <Counter/>
      </div>
    );
  }
}

export default App;
