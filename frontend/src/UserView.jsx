import React from 'react';
import Interface from "./Interface";

export default class UserView extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      message: "",
      reaction: {
        mood: 50,
        note: "",
        task: 0
      },
      task: {
        title: "",
        skills: []
      },
      
      i: new Interface(),
    };

    this.submitReaction = this.submitReaction.bind(this);
    this.updateMood = this.updateMood.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.submitTask = this.submitTask.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  submitTask(event) {
    var payload = {
      user: 1,
      mood: parseInt(this.state.reaction.mood),
      title: this.state.task.title,
      skills: ["gspot","mindfuck"]
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

  submitReaction(event) {
    var payload = {
      user: 1,
      mood: parseInt(this.state.reaction.mood),
      comment: this.state.reaction.note,
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
    this.setState({reaction: {mood: event.target.value}});
  }
  updateNote(event) {
    this.setState({reaction: {note: event.target.value}});
  }
  updateTitle(event) {
    this.setState({task: {title: event.target.value}});
  }


  render() {
    var message = "";
    if (this.state.message) {
      message = <h1>{this.state.message}</h1>;
    }
    return(
      <div>
        {message}
        <form  onSubmit={this.submitReaction}>
            <input type="range" name="mood" min="0" max="100"
            value={this.state.reaction.mood}
            onChange={this.updateMood}/>
            <input type="textarea" value={this.state.reaction.note} onChange={this.updateNote} placeholder="Note"/>
            <input type="submit"></input>
            
            <br />

        </form>
        <form  onSubmit={this.submitTask}>
            <input type="text" value={this.state.task.title} onChange={this.updateTitle} placeholder="Title"/>
            <input type="submit"></input>
            
            <br />

        </form>
       </div>
    );
  };
}
