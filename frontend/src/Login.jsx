import React from "react";
import Interface from "./Interface";

export default class LogIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            error: "",
            username: "",
            password: "",
            i: new Interface(),
        };

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        var log = (x) => {this.state.i.setSession(x); this.props.callback();};
        var username = this.state.username;
        if (this.state.i.getUsers().then(
            function(res) {
		    console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].username == username) {
                        log(res.data[i].id);
                        return true;
                    }
                }
            },
            function(res) {
                return false;
            }
        )) {
		console.log("ok");
        } else {
            this.setState({error: "Invalid log in", password: ""});
        }
        event.preventDefault(); 
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.submit}>
                <p>{this.state.error}</p>
                <input 
                    type="text" 
                    value={this.state.username} 
                    placeholder="Username" 
                    onChange={this.updateUsername}
                />
                <br />
                <input 
                    type="password" 
                    value={this.state.password} 
                    placeholder="Password" 
                    onChange={this.updatePassword}
                />
                <br />
                <input type="submit" value="Log In" />
            </form>
        );
    }
}
