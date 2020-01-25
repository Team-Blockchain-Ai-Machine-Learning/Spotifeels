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
        if (this.i.loginUser(this.state.username, this.state.password).then(
            function(res) {
                // TODO
                return true;
            },
            function(res) {
                // TODO
                this.i.setSession(1);
                return true;
            }
        )) {
            this.props.callback();
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