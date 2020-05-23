import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { QrPage } from './Pages/QrPage';
import {Store} from './Pages/Store/Store'




function App() {


  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path="/" component={QrPage}/>
          <Route exact path="/store/:storeId" component={Store}/>
        </switch>
      </Router>
      
    </div>
  );
}

export default App;
