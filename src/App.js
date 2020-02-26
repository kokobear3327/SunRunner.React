import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Consumer from './consumer/consumer';
import ConsumerWithDockOpened from './consumer/consumer-with-dock-opened/consumer-with-dock-opened';
import Business from './business/business';
import BusinessWithDockOpened from './business/business-with-dock-opened/business-with-dock-opened';
import TreeView from './tree/treeView';
import MedicalInfoView from './medical-info/medicalInfoView'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Consumer" exact component={Consumer}></Route>
        <Route path="/ConsumerWithDockOpened" exact component={ConsumerWithDockOpened}></Route>
        <Route path="/Business" component={Business}></Route>
        <Route path="/BusinessWithDockOpened" exact component={BusinessWithDockOpened}></Route>
        <Route path="/tree" component={TreeView}></Route>
        <Route path="/Medical-Info" exact component={MedicalInfoView}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
