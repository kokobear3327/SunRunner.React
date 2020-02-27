import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Consumer from './consumer/consumer';
import ConsumerWithDockOpened from './consumer/consumer-with-dock-opened/consumer-with-dock-opened';
import Business from './business/business';
import BusinessWithDockOpened from './business/business-with-dock-opened/business-with-dock-opened';
import TreeView from './tree/treeView';
import MedicalInfoView from './medical-info/medicalInfoView';
import ConsumerWithMenuoverFlowOpen from './consumer/consumer-with-dock-opened/consumer-with-menu-overflow';
import ConsumerWithBallonWrenchActive from './consumer/consumer-with-dock-opened/consumer-with-balloon-wrench-active.js';
import Home from './home/home';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="ipad-container">
      <Switch>
        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Consumer" exact component={Consumer}></Route>
        <Route path="/ConsumerWithDockOpened" exact component={ConsumerWithDockOpened}></Route>
        <Route path="/Business" component={Business}></Route>
        <Route path="/BusinessWithDockOpened" exact component={BusinessWithDockOpened}></Route>
        <Route path="/MenuOverflowOpen" exact component={ConsumerWithMenuoverFlowOpen}></Route>
        <Route path="/BalloonWrenchActive" exact component={ConsumerWithBallonWrenchActive}></Route>
        <Route path="/tree" component={TreeView}></Route>
        <Route path="/Medical-Info" exact component={MedicalInfoView}></Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
