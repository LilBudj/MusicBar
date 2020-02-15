import React from 'react';
import * as axios from 'axios'
import AppBody from './components/AppBody/AppBody'

function AppContainer() {

    const initTracks = [
        {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
        {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
        {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
        {singer: 'slipknot', song: 'ffff', genre: 'metal', year: '2000'},
    ];

  return (
    <div className="App">
      <header className="App-header">
          <AppBody tracks={initTracks}/>
      </header>
    </div>
  );
}

export default AppContainer;
