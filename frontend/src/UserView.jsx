import React from 'react';
import Interface from "./Interface";

export default class UserView extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      id: 0,
      mood: 50,
    };

    this.submit = this.submit.bind(this);
    this.updateMood = this.updateMood.bind(this);
  
    this.i = new Interface();
  }

  submit(event) {
    var reaction = {
      user: this.i.getSession(),
      mood: 9
    };
    var callback = (x) => this.setState({message: x});
    if (this.i.postReaction(reaction).then(
        function(res) {
            // TODO
            return true;
        },
        function(res) {
            return callback("lovely");
        }
    )) {
        this.props.callback();
    } 
    console.log("OK");
    event.preventDefault(); 
  }

  updateMood(event) {
    this.setState({mood: event.target.value});
  }

  render() {
    var message = "";
    if (this.state.message) {
      message = <h1>{this.state.message}</h1>;
    }
    return(
      <div>
        {message}
        <form  onSubmit={this.submit}>
            <input type="range" name="mood" min="0" max="100"
            value={this.state.mood}
            onChange={this.updateMood}/>
            <input type="submit"></input>
            
            <br />

        </form>
       </div>
    );
  };
}
