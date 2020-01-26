import React from 'react';
import Interface from "./Interface";

export default class UserView extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      mood: 50,
      note: "",
      message: "",
      i: new Interface(),
    };

    this.submit = this.submit.bind(this);
    this.updateMood = this.updateMood.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  submit(event) {
    var payload = {
      user: 1,
      mood: parseInt(this.state.mood),
      comment: this.state.note,
      task: 1
    };
    var callback = (x) => this.setState({message: x});
    if (this.state.i.postReaction(payload).then(
        function(res) {
          callback("SENT!");
        },
        function(res) {
          console.log(res);
          callback("lovely");
        }
    )) {
        callback();
    } 
    event.preventDefault(); 
  }

  updateMood(event) {
    this.setState({mood: event.target.value});
  }
  updateNote(event) {
    this.setState({note: event.target.value});
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
            <input type="text" value={this.state.note} onChange={this.updateNote} placeholder="Note"/>
            <input type="submit"></input>
            
            <br />

        </form>
       </div>
    );
  };
}
