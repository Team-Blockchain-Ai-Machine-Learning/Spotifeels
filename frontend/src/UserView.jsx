import React from 'react';
import Interface from "./Interface";
import './App.css';

export default class UserView extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      numResponses: 0,
      question: "Good morning ___! How well rested do you feel?",
      reaction: {
        user: 1,
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
    var callback = (x) => this.setState({numResponses: this.state.numResponses + 1});
    if (this.state.i.postTask(payload).then(
        function(res) {
          callback(payload);
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
    var callback = (x) => {
      this.setState({numResponses: this.state.numResponses + 1})
      if(payload.mood > 15)
      this.setState({question: "Sorry to hear that. Have you been having headaches or stomach problems lately?"})
      else 
      this.setState({question: "Great! Did you have a chance to relax and reset yesterday?"})
    };
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
    var question = "";
    var taskAdder = "";
   if (this.state.numResponses === 1){
     question = (

      <form  onSubmit={this.submitTask}>

      <h1>What are you working on?</h1>
      <fieldset>
      <input type="text" value={this.state.task.title} onChange={this.updateTitle} placeholder="Title"/>
      <input type="submit"></input>
      
      <br />
      </fieldset>
  </form>

     )
    }
    else if (this.state.numResponses > 2){ 
      question = (
      <div>
      <h1> Great, thanks! </h1>
      <p> By the way, yoga is planned for 7:30am in the atrium on Wednesday. Mindfullness and exercise are very effective ways to reduce stress.</p>
      </div>
      )
   }
    else {
      question = (
      <form  onSubmit={this.submitReaction}>
      <fieldset>
        <h1>{this.state.question}</h1>
        <div className="slidecontainer">
          <input type="range" name="mood" min="0" max="100" className="slider"
          value={this.state.mood}
          onChange={this.updateMood}/>
        </div>
          <textarea value={this.state.note} onChange={this.updateNote} placeholder="Note"/>
          <input type="submit"></input>
          
          <br />
      </fieldset>

      </form>
      )
    }
    return(
      <div>
        {question}
        

        
    {/* <legend><span class="number">1</span> Your basic info</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">

    <label for="mail">Email:</label>
    <input type="email" id="mail" name="user_email"></input> */}
        
       
       </div>
    );
  };
}
