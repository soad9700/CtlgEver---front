import React, { Component } from 'react';
import './App.scss';
import Button from './Components/Button/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onBtnClick={() => console.log("xd")}/>
      </div>
    );
  }
}

export default App;
