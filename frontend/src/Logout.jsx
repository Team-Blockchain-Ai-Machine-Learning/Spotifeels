import React from 'react';
import './App.css';

import Login from "./Login";
import HRView from "./HRView";
import UserView from "./UserView";
import ManagerView from "./ManagerView";
import Interface from "./Interface";
import { render } from 'react-dom';

export default class Logout extends React.Component {
    constructor(props) {
        super();

        this.state = {
            i: new Interface()
        }
    }

    render() {
        var click = () => {this.state.i.delSession(); this.props.callback();};

        return(<input type="button" value="log out" onClick={click}/>);
    }
}