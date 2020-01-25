import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from "./Login";
import HRView from "./HRView";
import UserView from "./UserView";
import ManagerView from "./ManagerView";
import Interface from "./Interface";
import { render } from 'react-dom';

function App() {

  var i = new Interface();
  
  if (false) {//(i.getSession() != null) {
    return (<Login callback={loadApp} />);
  }

  var user = {level: 0};//i.getUser(uid);

  if (user.level === 0) {
    return(<UserView />);
  } else if (user.level === 1) {
    return(<ManagerView />);
  }else if (user.level === 2) {
    return(<HRView />);
  }
  
}

function loadApp() {
  return;
}
export default App;
