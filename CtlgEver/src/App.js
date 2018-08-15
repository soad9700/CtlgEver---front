import React, { Component } from 'react';
import './App.scss';

import Button from './Components/Button/Button';
import AppBar from './App-Bar/App-Bar';
import FormCreate from './Form-Create/Form-Create';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="appBarSpace">
          <AppBar/>
        </div>

        <div className="pageSpace">
          <FormCreate/>
        </div>


        {/* <Button className={"big"}onBtnClick={() => alert("xd")}/> */}
      </div>
    );
  }
}

export default App;
