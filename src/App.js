import React from 'react';
import Navigation from './Navigation'
import Stats from './Stats'
import Graph from './Graph'
import './App.css'

class App extends React.Component {

  render() {
    return(
      <div>
        <div id="back-ground">
          <div id="container-main">
              <div id="container">
                <Navigation />
              </div>
              <div id="container-flex">
                <Stats />
                <Graph />
              </div>
          </div>          
        </div>
      </div>  
    )
  }
};







export default App;
