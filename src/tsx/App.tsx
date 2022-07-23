import React from 'react';
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import NavBar from './navBar';
import Background from './background';

function App(): JSX.Element {

  function wheel(e: React.WheelEvent) {
    console.info('x' + e.deltaX);
    console.info('y' + e.deltaY);
    console.info('z' + e.deltaZ);
    console.info('mode' + e.deltaMode);
  }

  return (
    <HashRouter>
      <div className="App" onWheel={(e) => wheel(e)}>
        <Background></Background>
        <NavBar></NavBar>
        <Router></Router>
      </div>
    </HashRouter>
  );
}

export default App;
