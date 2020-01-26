import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Login from "./Login";
import Logout from "./Logout";
import HRView from "./HRView";
import UserView from "./UserView";
import ManagerView from "./ManagerView";
import Interface from "./Interface";
import { render } from 'react-dom';

class App extends React.Component {

  render() {  
  var i = new Interface();
  var handleUpdate = () => {
    this.forceUpdate();};

    console.log(i.getSession());
  if (!i.getSession()) {
    console.log("OKKK");
    return (<Login callback={handleUpdate} />);
  }


  var user = {level: 0};
  if (i.getSession() == 4)
    user = {level: 1};
  if (i.getSession() == 5)
    user = {level: 2};

  console.log(user);

  if (user.level === 0) {
    return(<div>
      <UserView />
      <Logout callback={handleUpdate}/>
      </div>
      );
  } else if (user.level === 1) {
    return(<div>
      <ManagerView callback={handleUpdate}/>
      <Logout callback={handleUpdate}/>
      </div>);
  }else if (user.level === 2) {
    return(<div>
    <HRView />
      <Logout callback={handleUpdate}/>
      </div>);
  }
} 
}

export default App;
